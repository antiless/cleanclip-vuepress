const i18nInfo = [
  {
    path: '/',
    lang: 'en-US',
    lang_code: 'en',
    isAI: false,
    label: "English",
    translation: require("./en"),
  },
  {
    path: '/zh/',
    lang: 'zh-CN',
    lang_code: 'zh',
    isAI: false,
    label: "简体中文",
    translation: require("./zh"),
  },
  {
    path: '/gb/',
    lang: 'gb',
    lang_code: 'gb',
    isAI: true,
    label: "English (UK)",
    translation: require("./gb"),
  },
  {
    path: '/de/',
    lang: 'de',
    lang_code: 'de',
    isAI: true,
    label: "Deutsch",
    translation: require("./de"),
  },
  {
    path: '/ar/',
    lang: 'ar',
    lang_code: 'ar',
    isAI: true,
    label: "العربية",
    translation: require("./ar"),
  },
  {
    path: '/jp/',
    lang: 'jp',
    lang_code: 'jp',
    isAI: true,
    label: "日本語",
    translation: require("./jp"),
  },
  {
    path: '/ko/',
    lang: 'ko',
    lang_code: 'ko',
    isAI: true,
    label: "한국어",
    translation: require("./ko"),
  },
  {
    path: '/sk/',
    lang: 'sk',
    lang_code: 'sk',
    isAI: true,
    label: "Slovak",
    translation: require("./sk"),
  },
  {
    path: '/se/',
    lang: 'se',
    lang_code: 'se',
    isAI: true,
    label: "Svenska",
    translation: require("./se"),
  },
];

String.prototype.format = function () {
  let formatted = this;
  for (let i = 0; i < arguments.length; i++) {
    const regexp = new RegExp('\\{' + i + '\\}', 'gi');
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};

function toDict() {
  let dict = {};
  for (let i = 0; i < i18nInfo.length; i++) {
    dict[i18nInfo[i].lang_code] = i18nInfo[i].translation;
  }
  return dict;
}

function findByLang(lang) {
  for (let i = 0; i < i18nInfo.length; i++) {
    if (i18nInfo[i].lang === lang) {
      return i18nInfo[i].translation;
    }
  }
}

module.exports = {
  ...toDict(),
  strings: findByLang,
  i18nInfo: i18nInfo,
}
