const footer = [
  {
    title: "产品",
    items: [
      {
        name: "CleanClip",
        url: "https://cleanclip.cc/zh",
      },
      {
        name: "Macaify",
        url: "https://macaify.com",
      },
    ]
  },
  {
    title: "支持",
    items: [
      {
        name: "路线图",
        url: "/zh/docs/roadmap.html",
      },
      {
        name: "下载",
        // url: "https://macaify.lemonsqueezy.com/checkout/buy/69bd0056-9182-4030-9aaf-bd0604db751b?embed=1&media=0&logo=0&desc=0&discount=0&enabled=114543",
        url: "/zh/download",
        class: "lemonsqueezy-button"
      },
      {
        name: "许可证管理器",
        url: "https://app.lemonsqueezy.com/my-orders",
      },
      {
        name: "联系支持",
        url: "mailto:support@cleanclip.cc",
      },
      {
        name: "功能请求",
        url: "https://github.com/auv1107/cleancliprun/issues",
      }
    ]
  },
  {
    title: "销售",
    items: [
      {
        name: "联盟计划",
        url: "https://store.cleanclip.cc/affiliates",
        label: "每单最多挣 $10.00"
      },
      {
        name: "特别优惠",
        url: "/zh/discounts",
        label: "4-9 折优惠"
      },
    ]
  },
  {
    title: "公司",
    items: [
      {
        name: "Twitter",
        url: "https://x.com/cleanclipapp",
      },
      {
        name: "文章",
        url: "/zh/articles",
      },
      {
        name: "开发者博客",
        url: "/zh/developer",
      },
      {
        name: "协助翻译",
        url: "https://crowdin.com/project/cleanclipapp",
        label: "新"
      },
      {
        name: "隐私政策",
        url: "/zh/docs/privacy",
      },
    ]
  },
]

const students = {
  largeTitle: "学生特价优惠",
  subtitle: "使用您的教育邮箱，在 CleanClip 享受 7 折优惠。",
  placeholder: "输入您的教育邮箱",
  placeholder_error: "输入正确的教育邮箱",
  cta: "获取优惠",
  tip: "你的邮箱无法申请？发邮件至 edu@cleanclip.cc。",
  howTo: "如何获取您的优惠",
  step1Title: "输入您的邮箱",
  step1Desc: "在上方输入您的.EDU邮箱",

  step2Title: "检查您的邮箱",
  step2Desc: "打开我们发送给您的邮件",

  step3Title: "获取您的折扣",
  step3Desc: "使用邮件中的链接购买应用",

  successText: "成功，请检查您的邮箱。"
}

const discounts = {
  title: "特别优惠",
  subtitle: "我们为不同的用户群体提供了一系列的优惠",
  student_title: "学生优惠",
  student_desc: '我们为全日制学生提供 <b>30%</b> 优惠，帮助他们更好地学习和探索。<a href="/zh/students">了解更多</a>',
  competitor_title: "竞品用户优惠",
  competitor_desc: '如果你是我们竞品的用户，我们提供 <b>30%</b> 优惠，帮助你轻松切换到我们的产品。<a href="https://forms.gle/v1ya3x93Z1ud3H4A7" target="_blank">申请优惠</a>',
  open_source_contributor_title: "开源贡献者优惠",
  open_source_contributor_desc: '对于那些为开源社区做出贡献的人，我们提供 <b>10%</b> 优惠以表达我们的感谢。<a href="https://forms.gle/m7TLTbSuZyJdfDgLA" target="_blank">申请优惠</a>',
  translator_title: "翻译贡献者谢礼",
  translator_desc: '对于那些帮助我们将产品翻译成其他语言的人，我们提供 <b>$5 - $20</b> 代金券用以购买我们后续的产品，以表达我们的感谢。<a class="" href="https://crowdin.com/project/cleanclipapp" target="_blank">去翻译</a>',
  content_creator_title: "内容创作者合作优惠",
  content_creator_desc: '如果你是内容创作者并且计划创建 CleanClip 相关的内容，我们愿意提供专属折扣码以供加强内容宣传影响力。合作邮箱: <b>cooperation@cleanclip.cc</b>。',
  war_zone_title: "战争地区的普通民众",
  war_zone_desc: '对于那些在战争地区生活的普通民众，我们提供 55% 特殊优惠以表达我们的关心和支持。<a href="https://forms.gle/sYErhfAD3KpFraqK8" target="_blank">登记所在地区</a>',
}

const download = {
  title: "在 Mac 上下载 CleanClip",
  desc: "如果您没有许可证密钥，您仍然可以使用所有功能，但在一定数量的粘贴后将出现激活窗口。",
  appStore: "从 AppStore 下载",
  download: "下载 .dmg",
  system: "建议使用 macOS Monterey 12.0 或更高版本。"
}

const usp = [
  {
    title: "真正的极简 UI",
    subtitle: "对于任何 UI 元素，如果你不需要，则不显示",
    body: "初始只显示最近的 5 条记录，当你想浏览更多时会展开成每页 10 条，输入字母搜索时才出现搜索 UI。",
    video: "/videos/clean265.mp4",
    poster: "/images/clean.webp"
  },
  {
    title: "极致地减少上下文切换",
    subtitle: "在文字输入位置展示弹窗",
    body: "上下文切换打断思路很烦人，我们把「拒绝上下文切换」做到了极致——在文字输入位置展示弹窗。",
    video: "/videos/followcursornoshadow265.mp4",
    poster: "/images/followcursornoshadow.webp"
  },
  {
    title: "保持快捷键简约和清晰",
    subtitle: "更少的快捷键需要记住，更少的键要按下，却更快速",
    body: "从设计上深入思考，在不影响效率的前提下尽量减少需要记住的快捷键，尽量减少需要按下的按键",
    poster: "/images/pinboards.webp"
  },
  {
    title: "粘贴队列 - 完美的工作流助手",
    subtitle: "复制到队列，按顺序粘贴",
    body: "我们的工作总会遇到需要一些文字序列，需要我们按顺序复制、粘贴。不断的选择下一条、复制，然后选择下个位置、粘贴，是枯燥且低效的。用 PasteStack 把它们一键全塞到序列里，然后每次粘贴自动粘贴下一条，节省你的时间。",
    video: "/videos/pastestack.mp4",
    poster: "/images/pastestack.webp"
  }
]

const tab_features = [
  {
    title: "真正的极简 UI",
    subtitle: "对于任何 UI 元素，如果你不需要，则不显示：初始只显示最近的 5 条记录，当你想浏览更多时会展开成每页 10 条，输入字母搜索时才出现搜索 UI。",
    video: "/videos/clean265.mp4",
    poster: "/images/clean.webp"
  },
  {
    title: "跟随文字输入位置",
    subtitle: "上下文切换打断思路很烦人，我们把「拒绝上下文切换」做到了极致——在文字输入位置展示弹窗。",
    video: "/videos/followcursornoshadow265.mp4",
    poster: "/images/followcursornoshadow.webp"
  },
]

const quick_menu = [
  {
    "title": "无需切换上下文的菜单",
    "subtitle": "在文本输入位置弹出菜单解决了上下文切换带来的打断思路的烦恼。",
    "video": "/videos/quickuse.mp4",
    "poster": "/images/quickuse.webp"
  },
  // {
  //   "title": "拒绝上下文切换",
  //   "subtitle": "上下文切换打断了思路的流动，非常烦人，我们拒绝它。",
  //   "video": "/videos/quickuse.mp4",
  //   // "poster": "/images/clean.webp"
  // },
  {
    "title": "预设粘贴格式",
    "subtitle": "设置格式后，所有项目将按照指定的格式粘贴。",
    "video": "/videos/quickmenu-format-preset.mp4",
    "poster": "/images/quickmenu-format-preset.webp"
  },
  {
    "title": "快速粘贴格式",
    "subtitle": "长按内容索引号即可弹出格式菜单。",
    "video": "/videos/quickmenu-format.mp4",
    "poster": "/images/quickmenu-format.webp"
  },
  {
    "title": "收藏你的常用内容",
    "subtitle": "按下快捷菜单快捷键⌘;两次即可查看收藏夹，无需记忆新的组合键。",
    "video": "/videos/quickmenu-pinboard.mp4",
    "poster": "/images/quickmenu-pinboard.webp"
  }
]

const paste_stack = [
  {
      "title": "按顺序粘贴",
      "subtitle": "当打开粘贴堆栈时，复制的内容将自动进入堆栈，⌘V将按顺序粘贴堆栈中的下一项。",
      "video": "/videos/pastestack-present.mp4",
      "poster": "/images/pastestack-present.webp"
    },
    {
      "title": "收集信息",
      "subtitle": "在多个页面上收集内容，然后一次性将它们全部粘贴到目标页面上，优化流程，节省时间。",
      "video": "/videos/pastestack-collect.mp4",
      "poster": "/images/pastestack-collect.webp"
    },
    {
      "title": "快速填写表单 - 分割复制",
      "subtitle": "使用⌘⇧C '分割复制'直接将多行分割为多个项目并复制到粘贴堆栈中。",
      "video": "/videos/pastestack-split.mp4",
      "poster": "/images/pastestack-split.webp"
    },
    {
      "title": "辅助填写表单",
      "subtitle": "使用粘贴堆栈可以按顺序复制和粘贴来辅助填写表单。",
      "video": "/videos/pastestack-fill-form.mp4",
      "poster": "/images/pastestack-fill-form.webp"
    },
]

const main_window = [
  {
    "title": "跟随前台应用",
    "subtitle": "内容可自动跟随前台应用的变化，随时查看该应用的剪贴板历史记录。",
    "video": "/videos/followfrontmost_1080.mp4",
    "poster": "/images/followfrontmost_1080.webp"
  },
  {
    "title": "每个应用的独占收藏空间",
    "subtitle": "上下文切换会打断思维流程，非常烦人。",
    "video": "/videos/sketch-simple-full.mp4",
    "poster": "/images/sketch-simple-full.webp"
  },
  {
    "title": "智能列表",
    "subtitle": "根据条件智能过滤项目。",
    "video": "/videos/youtubelinks-1080.mp4",
    "poster": "/images/youtubelinks-1080.webp"
  },
  {
    "title": "收藏列表",
    "subtitle": "您可以创建无限的书签列表来保存不同的内容。",
    "video": "/videos/collection-lists.mp4",
    "poster": "/images/collection-lists.webp"
  }
]

const usecases = [
  {
    title: "收集图片",
    subtitle: "使用 CleanClip，寻找设计灵感的过程中无需打断过程，来回切换 App。只需要复制喜欢的图片，回到 App 后一次性粘贴。",
    video: "/videos/designer265.mp4",
    poster: "/images/designer.webp"
  },
  {
    title: "从手机同步截图制作 App 预览图",
    subtitle: "在手机和 Mac 间同步数据有时候非常繁琐，现在你可以直接在手机上截图、复制完所有信息，CleanClip 会自动帮你记下所有的复制记录。等所有信息收集完成，再回到 Mac 上使用这些信息，制作预览图，很方便。",
    video: "/videos/screenshots265.mp4",
    poster: "/images/screenshots.webp"
  },
  {
    title: "攒写旅行计划✈️",
    subtitle: "写旅行计划的过程中通常需要收集很多图片、截图、文字，CleanClip 帮助我一次性收集所有信息，再回到 App 中使用。",
    video: "/videos/disneyland265.mp4",
    poster: "/images/disneyland.webp"
  },
  {
    title: "搜索邮箱模板",
    subtitle: "作为一个营销人员，需要给不同客户发送各种类型的邮件。CleanClip 帮我保存了使用过的所有邮件模板，让我随时取用。",
    video: "/videos/emailtemplate265.mp4",
    poster: "/images/emailtemplate.webp"
  },
  {
    title: "Solopreneur 在 40+ 网站提交项目信息",
    subtitle: "在推广 App 的过程中需要去很多网站提交项目信息，使用 CleanClip 我不需要多次往返项目文档复制信息，再回到不同的网站粘贴。一次复制，多次使用，是 CleanClip 最酷的地方。",
    video: "/videos/formfill265.mp4",
    poster: "/images/formfill.webp"
  },
  {
    title: "搜索命令使用历史",
    subtitle: "有些常用的命令参数复杂难以记忆，比如 ffmpeg，但是我记得我之前用过，我可以在 CleanClip 中搜索到并快速使用。",
    video: "/videos/terminal265.mp4",
    poster: "/images/terminal.webp"
  }
]

module.exports = {
  name: "CleanClip",
  lang: 'zh-CN',
  title: 'CleanClip - Mac 上最干净的剪贴板管理器。简单且强大！',
  description: '可能是 macOS 上最干净的剪贴板管理工具！自动保存复制内容，轻松管理，秒速查找。简单而强大。CleanClip 不仅可以保护您宝贵的内容不丢失，还提供强大的内容过滤、书签和组织能力。它渗透到您 Mac 使用日常的每个角落。',
  selectText: '选择语言',
  label: '简体中文',
  lastUpdated: '最近更新',
  footer: footer,
  students: students,
  discounts: discounts,
  download: download,
  usp: usp,
  tab_features: tab_features,
  quick_menu: quick_menu,
  quick_menu_subtitle: "双手无需离开键盘即可查找记录，一个即用即走的快捷窗口",
  quick_menu_title: "快捷窗口 - 一秒找到记录",
  paste_stack: paste_stack,
  paste_stack_subtitle: "粘贴队列提供了一个可以快速按顺序粘贴内容的方式",
  paste_stack_title: "粘贴队列 - 按顺序粘贴",
  main_window: main_window,
  main_window_title: "主窗口 - 轻松管理",
  main_window_subtitle: "可轻松查看当前应用的复制记录。还支持无限制的收藏夹、智能列表。方便过滤内容",
  usecases: usecases,
  promotion: "为来自 <b>{0}</b> 的朋友提供购买力平价优惠 - <b>{1}% 优惠</b>",
  promotion_code: "优惠代码: <b>{0}</b>",
  promotion_action: "获取专业版",
}