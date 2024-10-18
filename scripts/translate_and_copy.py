import os
import shutil
import sys
import openai
import argparse

def get_language_codes(src_dir):
    return [d for d in os.listdir(src_dir) if os.path.isdir(os.path.join(src_dir, d)) and len(d) == 2 and d not in ['zh', 'en']]

def translate_file(source_path, target_path, target_lang, openai_client):
    with open(source_path, 'r', encoding='utf-8') as source_file:
        content = source_file.read()
    
    response = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": f"你是一个专业的本地化文案翻译器。请将以下内容本地化成{target_lang}语言代码对应的语言"},
            {"role": "user", "content": content}
        ]
    )
    
    translated_content = response.choices[0].message.content
    
    with open(target_path, 'w', encoding='utf-8') as target_file:
        target_file.write(translated_content)

def main(relative_path, openai_client):
    src_dir = 'src'
    zh_dir = os.path.join(src_dir, 'zh')
    en_dir = src_dir  # 将src目录视为en语言目录
    source_path = os.path.join(zh_dir, relative_path)
    
    if not os.path.exists(source_path):
        print(f"源文件 {source_path} 不存在")
        return
    
    language_codes = get_language_codes(src_dir)
    language_codes.append('en')  # 添加en到语言列表
    
    for lang in language_codes:
        if lang == 'en':
            target_dir = os.path.join(en_dir, os.path.dirname(relative_path))
        else:
            target_dir = os.path.join(src_dir, lang, os.path.dirname(relative_path))
        os.makedirs(target_dir, exist_ok=True)
        
        if lang == 'en':
            target_path = os.path.join(en_dir, relative_path)
        else:
            target_path = os.path.join(src_dir, lang, relative_path)
        
        shutil.copy2(source_path, target_path)
        print(f"已复制文件到 {target_path}")

        translate_file(source_path, target_path, lang, openai_client)
        print(f"已将文件翻译为 {lang} 语言")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='翻译并复制文件')
    parser.add_argument('relative_path', help='要翻译的文件的相对路径')
    parser.add_argument('--api_key', required=True, help='OpenAI API密钥')
    parser.add_argument('--base_url', default='https://api.openai.com/v1', help='OpenAI API基础URL')
    
    args = parser.parse_args()

    openai_client = openai.OpenAI(api_key=args.api_key, base_url=args.base_url)
    
    main(args.relative_path, openai_client)
