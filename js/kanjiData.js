const kanjiData = [
    {
        kanji: "木",
        on: [
            { japanese: "ボク", russian: "дерево" },
            { japanese: "モク", russian: "дерево" }
        ],
        kun: [
            { japanese: "き", russian: "дерево" },
            { japanese: "こ", russian: "дерево (в сложных словах)" }
        ]
    },
    {
        kanji: "母",
        on: [
            { japanese: "ボ", russian: "мама" }
        ],
        kun: [
            { japanese: "はは", russian: "мама" }
        ]
    },
    {
        kanji: "山",
        on: [
            { japanese: "サン", russian: "гора" }
        ],
        kun: [
            { japanese: "やま", russian: "гора" }
        ]
    },
    {
        kanji: "川",
        on: [
            { japanese: "セン", russian: "река" }
        ],
        kun: [
            { japanese: "かわ", russian: "река" },
            { japanese: "がわ", russian: "река; в названии рек" }
        ]
    },
    {
        kanji: "本",
        on: [
            { japanese: "ホン", russian: "книга" }
        ],
        kun: [
            { japanese: "もと", russian: "начало, основа" }
        ]
    },
    {
        kanji: "日",
        on: [
            { japanese: "ニチ", russian: "день, солнце" },
            { japanese: "ニ", russian: "день, солнце" },
            { japanese: "ヅツ", russian: "день, солнце" }
        ],
        kun: [
            { japanese: "ひ", russian: "день, солнце" },
            { japanese: "か", russian: "день, солнце" }
        ]
    },
    {
        kanji: "何",
        on: [
            { japanese: "カ", russian: "что" }
        ],
        kun: [
            { japanese: "なん", russian: "что" },
            { japanese: "なに", russian: "что" }
        ]
    },
    {
        kanji: "語",
        on: [
            { japanese: "ゴ", russian: "язык, речь" }
        ],
        kun: [
            { japanese: "かたる", russian: "говорить, рассказывать" }
        ]
    },
    {
        kanji: "英",
        on: [
            { japanese: "エイ", russian: "Англия (в сочетании)" }
        ],
        kun: [
            { japanese: "0", russian: "0" },
            { japanese: "0", russian: "0" }
        ]
    },
    {
        kanji: "人",
        on: [
            { japanese: "ジン", russian: "человек, люди" },
            { japanese: "ニン", russian: "человек, люди" }
        ],
        kun: [
            { japanese: "ひと", russian: "человек, люди" }
        ]
    },
    {
        kanji: "大",
        on: [
            { japanese: "ダイ", russian: "большой, великий" },
            { japanese: "タイ", russian: "большой, великий" }
        ],
        kun: [
            { japanese: "おおきい", russian: "большой, великий" },
            { japanese: "おお", russian: "большой, великий" }
        ]
    },
    {
        kanji: "学",
        on: [
            { japanese: "ガク", russian: "учение, наука" }
        ],
        kun: [
            { japanese: "まなぶ", russian: "учить, изучать" }
        ]
    },
    {
        kanji: "女",
        on: [
            { japanese: "ジョ", russian: "женщина" }
        ],
        kun: [
            { japanese: "おんな", russian: "женщина" }
        ]
    },
    {
        kanji: "男",
        on: [
            { japanese: "ダン", russian: "мужчина" },
            { japanese: "ナン", russian: "мужчина" }
        ],
        kun: [
            { japanese: "おとこ", russian: "мужчина" },
            { japanese: "お", russian: "(мужчина) используется в мужских именах" }
        ]
    },
    {
        kanji: "子",
        on: [
            { japanese: "シ", russian: "ребенок" }
        ],
        kun: [
            { japanese: "こ", russian: "ребенок; используется в женских именах" }
        ]
    },
    {
        kanji: "先",
        on: [
            { japanese: "セン", russian: "прошлый, раньше, прежде" }
        ],
        kun: [
            { japanese: "さき", russian: "вперед, впереди" },
            { japanese: "まず", russian: "сначала, прежде" }
        ]
    },
    {
        kanji: "生",
        on: [
            { japanese: "ショウ", russian: "рождение, появление" }
        ],
        kun: [
            { japanese: "うまれる", russian: "рождаться" },
            { japanese: "うまれ", russian: "уроженец" },
            { japanese: "いきる", russian: "жить" },
            { japanese: "なま", russian: "свежий, сырой" }
        ]
    },
    {
        kanji: "徒",
        on: [
            { japanese: "ト", russian: "группа людей, последователь, хотьба" }
        ],
        kun: [
            { japanese: "0", russian: "0" }
        ]
    },
    {
        kanji: "校",
        on: [
            { japanese: "コウ (on 校)", russian: "школа" }
        ],
        kun: [
            { japanese: "0", russian: "0" }
        ]
    },
    {
        kanji: "方",
        on: [
            { japanese: "ホウ", russian: "сторона, направление" }
        ],
        kun: [
            { japanese: "かた", russian: "человек, лицо, образ, способ" }
        ]
    },
    {
        kanji: "高",
        on: [
            { japanese: "コウ", russian: "высокий, дорогой(о цене)" }
        ],
        kun: [
            { japanese: "た`かい", russian: "высокий, дорогой(о цене)" }
        ]
    },
    {
        kanji: "小",
        on: [
            { japanese: "ショウ", russian: "маленький" }
        ],
        kun: [
            { japanese: "ち`い`さ`い", russian: "маленький" },
            { japanese: "こ", russian: "маленький" }
        ]
    },
    {
        kanji: "白",
        on: [
            { japanese: "ハク", russian: "белый" }
        ],
        kun: [
            { japanese: "しろい/しろ", russian: "белый" }
        ]
    },
    {
        kanji: "黒",
        on: [
            { japanese: "コク", russian: "черный" }
        ],
        kun: [
            { japanese: "くろい/くろ", russian: "черный" }
        ]
    },
    {
        kanji: "明",
        on: [
            { japanese: "メイ", russian: "светлый" },
            { japanese: "ミョウ", russian: "светлый" }
        ],
        kun: [
            { japanese: "あかるい", russian: "ясный" },
            { japanese: "あきらか", russian: "ясный, очевидный" },
            { japanese: "あける", russian: "рассветать" }
        ]
    },
    {
        kanji: "暗",
        on: [
            { japanese: "アン", russian: "темный" }
        ],
        kun: [
            { japanese: "くらい/くら", russian: "тёмный, затемнённый" }
        ]
    },
    {
        kanji: "赤",
        on: [
            { japanese: "セキ", russian: "красный" }
        ],
        kun: [
            { japanese: "あかい/あか", russian: "красный" }
        ]
    },
    {
        kanji: "青",
        on: [
            { japanese: "セイ", russian: "голубой, светло-зеленый" },
            { japanese: "ショウ", russian: "голубой, светло-зеленый" }
        ],
        kun: [
            { japanese: "あおい/あお", russian: "молодой, незрелый" },
        ]
    },
    {
        kanji: "安",
        on: [
            { japanese: "アン (on 安)", russian: "спокойный, устойчивый, дешевый" }
        ],
        kun: [
            { japanese: "やすい", russian: "дешевый, спокойный, устойчивый" }
        ]
    },
    {
        kanji: "広",
        on: [
            { japanese: "コウ", russian: "широкий, просторный" }
        ],
        kun: [
            { japanese: "ひろい", russian: "просторный, широкий" }
        ]
    },
    {
        kanji: "近",
        on: [
            { japanese: "キン", russian: "близкий, ближний (о расстоянии)" }
        ],
        kun: [
            { japanese: "ちかい", russian: "близкий, ближний (о расстоянии)" }
        ]
    },
    {
        kanji: "早",
        on: [
            { japanese: "ソウ", russian: "ранний, быстрый" }
        ],
        kun: [
            { japanese: "はやい", russian: "быстрый, ранний" }
        ]
    },
    {
        kanji: "街",
        on: [
            { japanese: "チョウ", russian: "город, квартал" }
        ],
        kun: [
            { japanese: "まち", russian: "город, квартал" }
        ]
    }
    
];