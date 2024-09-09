import os
import re

def collect_md_files(directory):
    md_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    return md_files

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 移除 frontmatter
    content = re.sub(r'^---\n.*?\n---\n', '', content, flags=re.DOTALL)
    
    # 添加文件路径作为标题
    header = f"# {file_path}\n\n"
    
    return header + content + "\n\n"

def main():
    repo_path = 'src/zh'  # 只处理 src/zh 目录
    output_file = 'combined_markdown_zh.md'
    
    md_files = collect_md_files(repo_path)
    
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for file_path in md_files:
            outfile.write(process_file(file_path))
    
    print(f"所有 src/zh 目录下的 Markdown 文件已合并到 {output_file}")

if __name__ == "__main__":
    main()
