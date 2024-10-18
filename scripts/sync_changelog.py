import requests
import datetime
import pytz
import re
from jinja2 import Environment, FileSystemLoader
import os

# GitHub API 配置
GITHUB_API = "https://api.github.com/repos/CleanClip/CleanClipApp/releases"
HEADERS = {
    "Accept": "application/vnd.github.v3+json",
    # 如果需要,添加您的 GitHub token: "Authorization": "token YOUR_TOKEN"
}

# 时区设置
TIMEZONE = pytz.timezone('Asia/Shanghai')

# Appcast 文件路径
APPCAST_PATH = "src/.vuepress/public/appcast.xml"

def fetch_releases(per_page=100, max_pages=10):
    all_releases = []
    page = 1
    while page <= max_pages:
        url = f"{GITHUB_API}?per_page={per_page}&page={page}"
        response = requests.get(url, headers=HEADERS)
        if response.status_code == 200:
            releases = response.json()
            if not releases:
                break
            all_releases.extend(releases)
            page += 1
        else:
            print(f"获取releases失败，状态码：{response.status_code}")
            break
    return all_releases

def format_release(release):
    # 转换时间为指定时区
    date = datetime.datetime.strptime(release['published_at'], "%Y-%m-%dT%H:%M:%SZ")
    date = date.replace(tzinfo=pytz.UTC).astimezone(TIMEZONE)
    
    formatted = f"## {release['tag_name']}\n"
    
    body = release['body'].split('\n')
    content = []
    date_added = False
    
    # 检查body中是否已经包含Date:开头的行
    date_line = next((line for line in body if line.lower().startswith('date:')), None)
    if not date_line:
        formatted += f"Date: {date.strftime('%Y-%m-%d')}\n\n"

    for line in body:
        # 识别并跳过 Markdown 的大标题和二级标题
        if not re.match(r'^#\s+|^##\s+', line.strip()):
            content.append(line)
    
    formatted += "\n".join(content)
    
    # 检查是否有可下载的资产
    if release['assets'] and 'browser_download_url' in release['assets'][0]:
        formatted += f"\n[Download]({release['assets'][0]['browser_download_url']})\n\n"
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
    # 设置Jinja2环境
    env = Environment(loader=FileSystemLoader('.'))
    template = env.get_template('appcast_template.xml')

    # 准备模板数据
    release_date = datetime.datetime.strptime(latest_release['published_at'], "%Y-%m-%dT%H:%M:%SZ")
    release_date = release_date.replace(tzinfo=pytz.UTC).astimezone(TIMEZONE)
    
    # 检查是否有可下载的资产
    if latest_release['assets'] and 'browser_download_url' in latest_release['assets'][0]:
        template_data = {
            'version': latest_release['tag_name'].replace("v", ""),
            'publish_date': release_date.strftime('%a, %d %b %Y %H:%M:%S %z'),
            'download_url': latest_release['assets'][0]['browser_download_url'],
            'file_size': latest_release['assets'][0]['size'],
            'release_notes': latest_release['body']
        }
        
        # 渲染模板
        output = template.render(template_data)

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
