import datetime
import json
import re
import urllib.error
import urllib.request

# GitHub API 配置
GITHUB_API = "https://api.github.com/repos/CleanClip/CleanClipApp/releases"
HEADERS = {
    "Accept": "application/vnd.github.v3+json",
    # 如果需要,添加您的 GitHub token: "Authorization": "token YOUR_TOKEN"
}

# 时区设置
TIMEZONE = datetime.timezone(datetime.timedelta(hours=8))

# Appcast 文件路径
APPCAST_PATH = "src/.vuepress/public/appcast.xml"
WEBSITE_BASE_URL = "https://cleanclip.cc"

def find_release_asset(release, extensions):
    assets = release.get('assets') or []
    normalized_extensions = tuple(ext.lower() for ext in extensions)
    for asset in assets:
        name = asset.get('name', '').lower()
        if name.endswith(normalized_extensions) and asset.get('browser_download_url'):
            return asset
    return None

def website_dmg_url(tag_name):
    version = tag_name.removeprefix("v")
    return f"{WEBSITE_BASE_URL}/releases/download/v{version}/CleanClip.dmg"

def select_release_body(body, preferred_language='en'):
    lang_pattern = re.compile(
        r'<!--\s*au:lang\s*=\s*([A-Za-z0-9_-]+)\s*-->([\s\S]*?)<!--\s*au:end\s*-->'
    )
    sections = {
        match.group(1).lower(): match.group(2).strip()
        for match in lang_pattern.finditer(body)
    }
    if sections:
        return sections.get(preferred_language.lower()) or sections.get('en') or next(iter(sections.values()))
    return body

def fetch_releases(per_page=100, max_pages=10):
    all_releases = []
    page = 1
    while page <= max_pages:
        url = f"{GITHUB_API}?per_page={per_page}&page={page}"
        request = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(request) as response:
                releases = json.loads(response.read().decode('utf-8'))
            if not releases:
                break
            all_releases.extend(releases)
            page += 1
        except urllib.error.HTTPError as error:
            print(f"获取releases失败，状态码：{error.code}")
            break
    return all_releases

def format_release(release):
    # 转换时间为指定时区
    date = datetime.datetime.strptime(release['published_at'], "%Y-%m-%dT%H:%M:%SZ")
    date = date.replace(tzinfo=datetime.timezone.utc).astimezone(TIMEZONE)
    
    formatted = f"## {release['tag_name']}\n"
    
    body = select_release_body(release.get('body') or '').splitlines()
    content = []
    date_added = False
    
    # 检查body中是否已经包含Date:开头的行
    date_line = next((line for line in body if line.lower().startswith('date:')), None)
    if not date_line:
        formatted += f"Date: {date.strftime('%Y-%m-%d')}\n\n"

    for line in body:
        # 识别并跳过 Markdown 的大标题和二级标题
        if not re.match(r'^#\s+|^##\s+', line.strip()):
            content.append(line.rstrip())
    
    formatted += "\n".join(content)
    
    # 检查是否有可下载的 DMG 资产
    dmg_asset = find_release_asset(release, ['.dmg'])
    if dmg_asset:
        formatted += f"\n[Download]({website_dmg_url(release['tag_name'])})\n\n"
    else:
        formatted += "\n\n\n"
    return formatted

def generate_changelog():
    releases = fetch_releases()
    changelog = ""
    for release in releases:
        if isinstance(release, dict):
            changelog += format_release(release)
        else:
            print(f"跳过无效的release数据：{release}")
    return changelog

def save_changelog(content, filename="src/docs/changelog.md"):
    header = """---
canonicalUrl: 'https://cleanclip.cc/docs/changelog'
---

# Release Notes
"""
    with open(filename, "w", encoding="utf-8") as f:
        f.write(header + "\n" + content)

def update_appcast(latest_release):
    # 准备模板数据
    release_date = datetime.datetime.strptime(latest_release['published_at'], "%Y-%m-%dT%H:%M:%SZ")
    release_date = release_date.replace(tzinfo=datetime.timezone.utc).astimezone(TIMEZONE)
    
    # Sparkle 更新使用 zip；网页下载使用 dmg。
    update_asset = find_release_asset(latest_release, ['.zip'])
    if update_asset:
        template_data = {
            'release_tag': latest_release['tag_name'],
            'version': latest_release['tag_name'].removeprefix("v"),
            'publish_date': release_date.strftime('%a, %d %b %Y %H:%M:%S %z'),
            'download_url': update_asset['browser_download_url'],
            'file_size': update_asset['size'],
            'release_notes': latest_release['body']
        }
        
        # 渲染模板
        with open('appcast_template.xml', 'r', encoding='utf-8') as f:
            output = f.read()
        for key, value in template_data.items():
            output = output.replace('{{ ' + key + ' }}', str(value))

        # 保存新的appcast文件
        with open(APPCAST_PATH, 'w', encoding='utf-8') as f:
            f.write(output)
        print("Appcast 已更新。")
    else:
        print("最新版本没有可下载的文件，Appcast 未更新。")

if __name__ == "__main__":
    releases = fetch_releases()
    if releases:
        changelog = generate_changelog()
        save_changelog(changelog)
        print(f"Changelog 已生成并保存。共获取了 {len(releases)} 个版本。")
        
        update_appcast(releases[0])
        print("Appcast 已更新。")
    else:
        print("没有获取到有效的release数据。")
