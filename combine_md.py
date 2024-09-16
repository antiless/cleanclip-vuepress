import os
import re
import argparse
import fnmatch

def collect_md_and_txt_files(directory):
    files = []
    for root, dirs, filenames in os.walk(directory):
        for filename in filenames:
            if filename.endswith('.md') or filename.endswith('.txt'):
                files.append(os.path.join(root, filename))
    return files

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 移除 frontmatter
    content = re.sub(r'^---\n.*?\n---\n', '', content, flags=re.DOTALL)
    
    # 添加文件分隔符
    header = f"====== {file_path} ======\n\n"
    footer = f"------- {file_path} ------\n\n"
    
    return header + content + footer

def parse_llmignore(ignore_file):
    ignore_patterns = []
    if os.path.exists(ignore_file):
        with open(ignore_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):
                    ignore_patterns.append(line)
    return ignore_patterns

def should_ignore(file_path, ignore_patterns):
    for pattern in ignore_patterns:
        if pattern.endswith('/'):
            # 如果模式以 '/' 结尾，表示整个目录
            if file_path.startswith(pattern):
                return True
        elif fnmatch.fnmatch(file_path, pattern):
            return True
    return False

def list_media_files(directory, extensions):
    media_files = []
    ignore_file = os.path.join('llm', '.llmignore')
    ignore_patterns = parse_llmignore(ignore_file)
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(extensions):
                full_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_path, directory)
                relative_path = relative_path.replace(os.path.sep, '/')
                if not should_ignore(relative_path, ignore_patterns):
                    media_files.append(relative_path)
    return media_files

def process_media(media_type):
    if media_type == 'images':
        directory = 'src/.vuepress/public/images'
        output_file = 'llm/images.txt'
        extensions = ('.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp')
        base_url = 'https://cleanclip.cc/images/'
    elif media_type == 'videos':
        directory = 'src/.vuepress/public/videos'
        output_file = 'llm/videos.txt'
        extensions = ('.mp4', '.webm', '.ogg')
        base_url = 'https://cleanclip.cc/videos/'
    else:
        raise ValueError("不支持的媒体类型")

    # 读取现有的媒体 URL 和解释
    existing_media = {}
    if os.path.exists(output_file):
        with open(output_file, 'r', encoding='utf-8') as mediafile:
            for line in mediafile:
                parts = line.strip().split('|', 1)
                url = parts[0]
                explanation = parts[1] if len(parts) > 1 else ''
                existing_media[url] = explanation
    
    # 获取当前的媒体文件列表，保持遍历顺序，并应用忽略规则
    current_media = [f"{base_url}{media}" for media in list_media_files(directory, extensions)]
    
    # 更新媒体文件列表
    with open(output_file, 'w', encoding='utf-8') as mediafile:
        mediafile.write(f"下面是 CleanClip 相关的所有可使用的{media_type}文件\n")
        mediafile.write("格式为<资源url>|<资源解释>\n\n")
        for media_url in current_media:
            explanation = existing_media.get(media_url, '')
            mediafile.write(f"{media_url}|{explanation}\n")
    
    print(f"所有{media_type}（包括子目录）的真实网络地址已更新并写入 {output_file}")

def main():
    repo_paths = ['src/zh', 'llm']  # 处理 src/zh 和 llm 目录
    output_file = 'combined_markdown_zh.md'
    
    all_files = []
    for path in repo_paths:
        all_files.extend(collect_md_and_txt_files(path))
    
    with open(output_file, 'w', encoding='utf-8') as outfile:
        # 添加项目简介和合并规则说明
        outfile.write("# CleanClip 项目合成文件\n\n")
        outfile.write("本文件包含了 CleanClip 项目的所有 Markdown 文件和部分 JavaScript 配置文件的合并内容。CleanClip 是一个为 macOS 设计的剪贴板管理工具，具有自动保存、快速使用、多格式支持、智能列表等功能。\n\n")
        outfile.write("该合成文件用于作为 LLM（大型语言模型）的知识库语料，以便于模型理解和回答有关 CleanClip 功能、使用方法、配置等相关问题。文件包含了多语言网站内容、用户文档、功能说明等信息。\n\n")
        outfile.write("文件格式说明：\n")
        outfile.write("====== <文件名> ======\n")
        outfile.write("<文件内容>\n")
        outfile.write("------- <文件名> ------\n\n")
        outfile.write("以下是合并的文件内容：\n\n")

        for file_path in all_files:
            outfile.write(process_file(file_path))
    
    print(f"所有 src/zh 和 llm 目录下的 Markdown 和 txt 文件已合并到 {output_file}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='处理 Markdown 文件、图片和视频')
    parser.add_argument('-i', '--image', action='store_true', help='处理图片并生成图片地址列表')
    parser.add_argument('-v', '--video', action='store_true', help='处理视频并生成视频地址列表')
    args = parser.parse_args()

    if args.image:
        process_media('images')
    elif args.video:
        process_media('videos')
    else:
        main()
