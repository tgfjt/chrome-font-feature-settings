// https://helpx.adobe.com/jp/fonts/using/open-type-syntax.html
const settings = [
  {
    "val": "normal",
    "text": "Normal"
  },
  {
    "val": "liga",
    "text": "一般的な合字／標準合字（liga）"
  },
  {
    "val": "calt",
    "text": "前後関係に依存する字形（calt）"
  },
  {
    "val": "dlig",
    "text": "任意の合字（dlig）"
  },
  {
    "val": "smcp",
    "text": "スモールキャップス（smcp）"
  },
  {
    "val": "c2sc",
    "text": "大文字のスモールキャップス（c2sc）"
  },
  {
    "val": "swsh",
    "text": "スワッシュ字形（swsh）"
  },
  {
    "val": "salt",
    "text": "デザインのバリエーション（salt）"
  },
  {
    "val": "lnum",
    "text": "ライニング数字（lnum）"
  },
  {
    "val": "onum",
    "text": "オールドスタイル数字（onum）"
  },
  {
    "val": "pnum",
    "text": "プロポーショナル数字（pnum）"
  },
  {
    "val": "tnum",
    "text": "等幅数字（tnum）"
  },
  {
    "val": "frac",
    "text": "分数（frac）"
  },
  {
    "val": "ordn",
    "text": "上付き序数表記（ordn）"
  },
  {
    "val": "pwid",
    "text": "プロポーショナル字形（pwid）"
  },
  {
    "val": "palt",
    "text": "プロポーショナルメトリクス（palt）"
  },
  {
    "val": "pkna",
    "text": "プロポーショナルかな（pkna）"
  },
  {
    "val": "fwid",
    "text": "等幅全角字形（fwid）"
  },
  {
    "val": "hwid",
    "text": "等幅半角字形（hwid）"
  },
  {
    "val": "halt",
    "text": "字幅半角メトリクス（halt）"
  },
  {
    "val": "twid",
    "text": "等幅三分字形（twid）"
  },
  {
    "val": "qwid",
    "text": "等幅四分字形（qwid）"
  },
  {
    "val": "jp78",
    "text": "JIS78 字形（jp78）"
  },
  {
    "val": "jp83",
    "text": "JIS83 字形（jp83）"
  },
  {
    "val": "jp90",
    "text": "JIS90 字形（jp90）"
  },
  {
    "val": "jp04",
    "text": "JIS2004 字形（jp04）"
  },
  {
    "val": "trad",
    "text": "旧字体（trad）"
  },
  {
    "val": "ruby",
    "text": "ルビ用字形（ruby）"
  },
  {
    "val": "hkna",
    "text": "横組み用かな（hkna）"
  },
  {
    "val": "nlck",
    "text": "印刷標準字体（nlck）"
  },
  {
    "val": "nalt",
    "text": "修飾字形（nalt）"
  },
  {
    "val": "ital",
    "text": "イタリック（ital）"
  },
  {
    "val": "vkrn",
    "text": "縦組みペアカーニング（vkrn）"
  },
  {
    "val": "vert",
    "text": "縦組み用字形（vert）"
  },
  {
    "val": "vpal",
    "text": "縦組みプロポーショナルメトリクス（vpal）"
  },
  {
    "val": "vhal",
    "text": "縦組み字幅半角メトリクス（vhal）"
  },
  {
    "val": "vkna",
    "text": "縦組み用かな（vkna）"
  },
  {
    "val": "kern",
    "text": "カーニング（kern）"
  },
  {
    "val": "ccmp",
    "text": "字体組版／分解（ccmp）"
  },
  {
    "val": "locl",
    "text": "ローカライズの字形（locl）"
  },
  {
    "val": "sups",
    "text": "上付き文字（sups）"
  },
  {
    "val": "subs",
    "text": "下付き文字（subs）"
  }
];

function handleClick(val) {
  chrome.tabs.getSelected(null, (tab) => {
    if (tab.id === -1) return;

    chrome.tabs.sendMessage(tab.id, {
      type: 'font-feature-setting',
      val,
      settings
    }, (res) => {
      console.log(res);
    });
  });
};

settings.forEach(setting => {
  chrome.contextMenus.create({
    "title" : setting.text,
    "contexts" : ["all"],
    "onclick" : function() {
      handleClick(setting.val)
    }
  });
})