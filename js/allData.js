// --------------------------------------------------------------
// 1. ИСХОДНЫЙ МАССИВ ДАННЫХ (твой, без изменений)
// --------------------------------------------------------------
const allData = [
    [// индекс 0 - あ     
        { japanese: "あそこ", russian: "то место" },
        { japanese: "あおい", russian: "голубой, зеленый" },
        { japanese: "あき", russian: "осень" },
        { japanese: "あかい", russian: "красный" },
        { japanese: "あきはばら", russian: "Акихабара (район в Токио)" },
        { japanese: "あれ", russian: "то, вон то" },
        { japanese: "あの", russian: "вон тот" },
        { japanese: "あなた", russian: "ты" },
        { japanese: "あなたたち", russian: "вы" },
        { japanese: "あちら", russian: "вон та сторона" },
        { japanese: "あかるい", russian: "светлый, ясный" },
        { japanese: "あまり", russian: "(не)очень, слишком" },
        { japanese: "あきらか（な）", russian: "очевидный, ясный" },
        { japanese: "あける", russian: "рассветать" },
        { japanese: "あした", russian: "завтра, завтрашний день" },
        { japanese: "あおい/あお", russian: "молодой, незрелый" },
        { japanese: "あ`か", russian: "грязь" },
        { japanese: "`あさ", russian: "утро" },
        { japanese: "あ`さ", russian: "конопля" },
        { japanese: "あ`し", russian: "нога" },
        { japanese: "あ`じ", russian: "вкус" },
        { japanese: "ああ", russian: "аа, ах (междометие)" },
        { japanese: "あおく", russian: "обмахиваться веером" },
        { japanese: "あ`ご", russian: "челюсть" },
        { japanese: "あいこく", russian: "любовь к родине, патриотизм" },
        { japanese: "あさい", russian: "мелкий" },
        { japanese: "あのひと", russian: "он, она, тот человек" },
        { japanese: "あい", russian: "любовь" },
        { japanese: "ありがとうございます", russian: "большое спасибо" },
        { japanese: "あまい", russian: "сладкий (фрукты, десерт); мягкий, нестрогий (о человеке); наивный, оптимистический" }
    ],
    [// индекс 1 --- null ---
        { japanese: "0", russian: "0" }
    ],
    [// индекс 2 - い
        { japanese: "いきる", russian: "жить" },
        { japanese: "いいえ", russian: "нет" },
        { japanese: "いい", russian: "хороший" },
        { japanese: "いちばん", russian: "самый" },
        { japanese: "`いき", russian: "дыхание" },
        { japanese: "い`き", russian: "свежесть" },
        { japanese: "`いがい", russian: "кроме" },
        { japanese: "い`が`い", russian: "неожиданно" },
        { japanese: "`いし", russian: "врач" },
        { japanese: "い`し", russian: "камень" },
        { japanese: "`いち", russian: "местоположение" },
        { japanese: "い`ち", russian: "один" },
        { japanese: "`いぎ", russian: "значение" },
        { japanese: "いそがしい", russian: "быть занятым" },
        { japanese: "いしゃ", russian: "врач" },
        { japanese: "いきおい", russian: "сила, мощь; неизбежно" },
        { japanese: "いす", russian: "стул" },
        { japanese: "いく", russian: "иду, идешь (глаг)" },
        { japanese: "いう", russian: "говорить, сказать, называться (глаг)" },
        { japanese: "いちにち", russian: "один день; целый день, первое число месяца" }
    ],
    [// индекс 3 --- ПУСТО ---
        { japanese: "0", russian: "0" }
    ],
    [// индекс 4 - う
        { japanese: "うまれる", russian: "рождаться" },
        { japanese: "うまれ", russian: "уроженец" },
        { japanese: "うえの", russian: "Уэно (район в Токио)" },
        { japanese: "うみ", russian: "море" },
        { japanese: "う`ち", russian: "дом; семья" },
        { japanese: "うるさい", russian: "шумный" },
        { japanese: "う`じ", russian: "червь" },
        { japanese: "う`そつき", russian: "лжец" },
        { japanese: "う`つ`く`し`い", russian: "красивый" },
        { japanese: "うごき", russian: "движение" },  
        { japanese: "うたがい", russian: "сомнения" },
        { japanese: "うすい", russian: "тонкий (о плоских предметах)" }     
    ],
    [// индекс 5 --- null ---
        { japanese: "0", russian: "0" }
    ],
    [// индекс 6 - え
        { japanese: "え", russian: "картина, изображение" },
        { japanese: "えんぴつ", russian: "карандаш" },
        { japanese: "ええ", russian: "да (простая форма)" },
        { japanese: "`えき", russian: "станция" },
        { japanese: "えいご", russian: "английский язык" },
        { japanese: "え`き", russian: "доход" },
        { japanese: "`えいが", russian: "фильм" },
        { japanese: "え`い`が`か", russian: "экранизация" },
        { japanese: "えがお", russian: "смеющееся лицо" },
        { japanese: "えさ", russian: "корм" },
        { japanese: "えん", russian: "йена" }
    ],
    [// индекс 7 --- null ---
        { japanese: "0", russian: "0" }
    ],
    [// индекс 8 - お
        { japanese: "おんよみ", russian: "онное (китайское) чтение" },
        { japanese: "お`い`し`い", russian: "вкусный" },
        { japanese: "おちゃ", russian: "чай" },
        { japanese: "おとこ", russian: "мужчина" },
        { japanese: "お", russian: "(мужчина) используется в мужских именах" },
        { japanese: "おんな", russian: "женщина" },
        { japanese: "おとこのひと", russian: "мужчина" },
        { japanese: "おんなのひと", russian: "женщина" },
        { japanese: "おとこのこ", russian: "мальчик" },
        { japanese: "おんなのこ", russian: "девочка" },
        { japanese: "おおきい", russian: "большой, великий" },
        { japanese: "おお", russian: "большой, великий" },
        { japanese: "おそい", russian: "поздний" },
        { japanese: "おはよぅございます", russian: "доброе утро" },
        { japanese: "`おい", russian: "эй (междометие)" },
        { japanese: "お`い", russian: "племянник" },
        { japanese: "`おく", russian: "в глубине" },
        { japanese: "お`く", russian: "класть, ставить" },
        { japanese: "`おき", russian: "мискант (растение)" },
        { japanese: "お`う`き", russian: "веер" },
        { japanese: "お", russian: "хвост" },
        { japanese: "おう", russian: "старец" },
        { japanese: "おじぎ", russian: "поклон" },
        { japanese: "おちつく", russian: "быть спокойным" },
        { japanese: "おとた", russian: "взрослый" },
        { japanese: "おねがい", russian: "пожалуйста, просьба" },
        { japanese: "おばさん", russian: "тетя" },
        { japanese: "おばあさん", russian: "бабушка [ба:]" },
        { japanese: "おかしい", russian: "смешной, забавный; странный, неудобный" },
        { japanese: "おやすみなさい", russian: "спокойной ночи" },
        { japanese: "およぐ", russian: "плавать" },
        { japanese: "おもい", russian: "тяжелый; мысль, думы" },
        { japanese: "おと", russian: "звук" },
        { japanese: "おっと", russian: "муж" }
    ],
    [// индекс 9 - か
        { japanese: "かんじ", russian: "иероглиф" },
        { japanese: "かわ", russian: "река" },
        { japanese: "かたる", russian: "говорить, рассказывать" },
        { japanese: "かた", russian: "лицо, человек" },
        { japanese: "かたかな", russian: "катакана" },
        { japanese: "かんだ", russian: "Канда (район в Токио)" },
        { japanese: "か", russian: "день, солнце" },
        { japanese: "かた", russian: "человек, лицо, образ, способ" },
        { japanese: "`かき", russian: "устрица" },
        { japanese: "か`き", russian: "хурма" },
        { japanese: "`か", russian: "урок" },
        { japanese: "`かず", russian: "число" },
        { japanese: "か`ぜ", russian: "ветер" },
        { japanese: "`かぞく", russian: "семья" },
        { japanese: "`かがく", russian: "наука" },
        { japanese: "`かげ", russian: "тень" },
        { japanese: "かいしゃいん", russian: "служащий фирмы" },
        { japanese: "かんこく", russian: "Южная Корея" },
        { japanese: "かさ", russian: "зонт" },
        { japanese: "かお", russian: "лицо" },
        { japanese: "かく", russian: "все, каждый; писать, рисовать" },
        { japanese: "かなしい", russian: "печальный, грустный" },
        { japanese: "かばん", russian: "сумка" },
        { japanese: "かいわ", russian: "разговор, беседа" },
        { japanese: "かった", russian: "купил; выиграл; победил" },
        { japanese: "かいしゃ", russian: "компания, фирма, корпорация" },
        { japanese: "かぎ", russian: "ключи" },
        { japanese: "かた", russian: "плечи" },
        { japanese: "-", russian: "-" }
    ],
    [// индекс 10 - が
        { japanese: "がわ", russian: "река; в названии рек" },
        { japanese: "がっこう", russian: "школа" },
        { japanese: "がくせい", russian: "студент, учащийся" },
        { japanese: "が`か", russian: "художник" },
        { japanese: "がっき", russian: "музыкальный инструмент, учебный семестр" }
    ],
    [// индекс 11 - き
        { japanese: "き", russian: "дерево" },
        { japanese: "きく", russian: "хризантема" },
        { japanese: "きゃうと", russian: "Киото" },
        { japanese: "きれい（な）", russian: "чистый, красивый" },
        { japanese: "きさらず", russian: "Кисарадзу (город в Японии)" },
        { japanese: "きげき", russian: "комедия" },
        { japanese: "きのう", russian: "вчера" },
        { japanese: "きって", russian: "марка" },
        { japanese: "きゅう", russian: "девять - 9" },
        { japanese: "きゅうひゃく", russian: "900" },
        { japanese: "きょうしつ", russian: "аудитория [кё:щицу]" },
        { japanese: "きゅうせん", russian: "9000" }
    ],
    [// индекс 12 - ぎ
        { japanese: "`ぎかい", russian: "парламент, сессия парламента" }
    ],
    [// индекс 13 - く
        { japanese: "くんよみ", russian: "кунное -японское- чтение" },
        { japanese: "くに", russian: "страна" },
        { japanese: "くらい", russian: "темный" },
        { japanese: "くろい/くろ", russian: "черный" },
        { japanese: "く`き", russian: "стебель" },
        { japanese: "`くうき", russian: "воздух, атмосфера" },
        { japanese: "く`し", russian: "расческа" },
        { japanese: "`くじ", russian: "девять часов" },
        { japanese: "くさ", russian: "трава" },
        { japanese: "くうこう", russian: "аэропорт" },
        { japanese: "くつ", russian: "обувь" },
        { japanese: "くるま", russian: "машина" },
        { japanese: "く", russian: "девять - 9" }
    ],
    [// индекс 14 - ぐ
        { japanese: "ぐ`あ`い", russian: "обстоятельства" }
    ],
    [// индекс 15 - け
        { japanese: "けいき", russian: "удобный момент, шанс; срок, наказание" },
        { japanese: "けいかく", russian: "план, проект, схема" },
        { japanese: "けいえい", russian: "хозяйство, управление" },
        { japanese: "けしき", russian: "пейзаж, вид" },
        { japanese: "けいかい", russian: "открывать, начинать (глаг)" }
    ],
    [// индекс 16 - げ
        { japanese: "げ`か", russian: "хирургия" }
    ],
    [// индекс 17 - こ
        { japanese: "こうこう", russian: "средняя школа" },
        { japanese: "ここ", russian: "это место" },
        { japanese: "これ", russian: "это" },
        { japanese: "このひと", russian: "он, она" },
        { japanese: "この", russian: "этот" },
        { japanese: "こ", russian: "ребенок; используется в женских именах" },
        { japanese: "こうこうせい", russian: "школьник" },
        { japanese: "このかた", russian: "он, она (вежливо)" },
        { japanese: "こちらこそどうぞよろしく", russian: "это я прошу любить и жаловать" },
        { japanese: "こちら", russian: "здесь, эта сторона" },
        { japanese: "こ", russian: "маленький" },
        { japanese: "`こうがい", russian: "пригород" },
        { japanese: "こ`う`が`い", russian: "вне школы" },
        { japanese: "こうご", russian: "разговорный язык" },
        { japanese: "こえ", russian: "голос, крик, зов" },
        { japanese: "ことば", russian: "слово" },
        { japanese: "こうき", russian: "весы [коуко]" },
        { japanese: "こうき", russian: "яркость, блеск [ко:ки]" },
        { japanese: "こんにちは (чит-ВА)", russian: "добрый день, привет, здравствуйте" },
        { japanese: "こんばんは (чит-ВА)", russian: "добрый вечер" }
    ],
    [// индекс 18 - ご
        { japanese: "`ごい", russian: "значение слова" },
        { japanese: "ご`う`い", russian: "согласие" },
        { japanese: "`ご", russian: "пять - 5" },
        { japanese: "ごひゃく", russian: "500" },
        { japanese: "ごせん", russian: "5000" }
    ],
    [// индекс 19 - さ
        { japanese: "さん", russian: "господин, госпожа" },
        { japanese: "さくら", russian: "сакура" },
        { japanese: "さき", russian: "вперед, впереди" },
        { japanese: "さいせい", russian: "возраждение" },
        { japanese: "さけ", russian: "рисовое вино" },
        { japanese: "さびしい", russian: "одинокий" },
        { japanese: "さいふ", russian: "кошелёк" },
        { japanese: "さようなら", russian: "до свидание" },
        { japanese: "さん", russian: "три - 3" },
        { japanese: "さんびゃく", russian: "300" },
        { japanese: "さんぜん", russian: "300" }
    ],
    [// индекс 20 - ざ
        { japanese: "ざっし", russian: "журнал" },
        { japanese: "ざ`い`せ`い", russian: "финансовая политика" }
    ],
    [// индекс 21 - し
        { japanese: "`しずか", russian: "тихий, спокойный" },
        { japanese: "しんぶん", russian: "газета" },
        { japanese: "しろい/しろ", russian: "белый" },
        { japanese: "しつれいですが", russian: "прошу прощения" },
        { japanese: "し`ち", russian: "семь" },
        { japanese: "`しじ", russian: "поддержка" },
        { japanese: "`しさ", russian: "указание" },
        { japanese: "し`き`ち", russian: "площадка" },
        { japanese: "しゅふ", russian: "домохозяйка" },
        { japanese: "しさい", russian: "подробности, детально; обстоятельство, причина" },
        { japanese: "しき", russian: "моральный дух" },
        { japanese: "しなもの", russian: "товар, вещь" },
        { japanese: "し", russian: "четыри - 4" },
        { japanese: "しょくどう", russian: "столовая [щёкудо:]" }
    ],
    [// индекс 22 - じ
        { japanese: "じどうしゃ", russian: "машина" },
        { japanese: "`じさ", russian: "разница во времени" },
        { japanese: "`じち", russian: "самоуправление" },
        { japanese: "`じじ", russian: "текущее событие" },
        { japanese: "じ`だ`い", russian: "эпоха, время" },
        { japanese: "じどうか", russian: "автоматизация" },
        { japanese: "じてんしゃ", russian: "велосипед" },
        { japanese: "じょうぶな", russian: "крепкий" },
        { japanese: "じゅうどう", russian: "дзюдо" },
        { japanese: "じしょ", russian: "словарь" },
        { japanese: "じゅう", russian: "десять - 10" },
        { japanese: "じむしょ", russian: "офис [джимущё]" }
    ],
    [// индекс 23 - す
        { japanese: "すみませんが", russian: "простите (используется, если кого-то окликаете или обращаетесь к незнакомцу" },
        { japanese: "すこし", russian: "немного, чуть" },
        { japanese: "`すず", russian: "олово" },
        { japanese: "す`ず", russian: "колокольчик" },
        { japanese: "す`う`し", russian: "числительные" },
        { japanese: "す`う`じ", russian: "цифра" },
        { japanese: "すし", russian: "суши (рис с рыбой)" },
        { japanese: "すみません", russian: "извините" }
    ],
    [// индекс 24 - ず
        { japanese: "`ずが", russian: "чертеж" },
        { japanese: "ず`つ`う", russian: "головная боль" }
    ],
    [// индекс 25 - せ
        { japanese: "`せいと", russian: "ученик" },
        { japanese: "せんせい", russian: "учитель" },
        { japanese: "せまい", russian: "узкий, тесный" },
        { japanese: "`せき", russian: "место" },
        { japanese: "せ`き", russian: "кашель" },
        { japanese: "せ`い`ざ`い", russian: "препарат (медицина)" },
        { japanese: "せなか", russian: "спина" },
        { japanese: "せっけい", russian: "мыло" },
        { japanese: "せん", russian: "1000" }
    ],
    [// индекс 26 - ぜ
        { japanese: "`ぜき", russian: "борец сумо" }
    ],
    [// индекс 27 - そ
        { japanese: "そう", russian: "так" },
        { japanese: "それ", russian: "то" },
        { japanese: "その", russian: "тот" },
        { japanese: "そこ", russian: "там, то место" },
        { japanese: "そちら", russian: "та сторона" },
        { japanese: "そして (и опускается)", russian: "и" },
        { japanese: "そっぽ", russian: "сторона, направление вбок" },
        { japanese: "そうですか", russian: "понятно, понял" }
    ],
    [// индекс 28 - ぞ
        { japanese: "ぞ`くご", russian: "просторечие" }
    ],
    [// индекс 29 - た 
        { japanese: "た`かい", russian: "высокий, дорогой(о цене)" },
        { japanese: "たてもの", russian: "здание" },
    ],
    [// индекс 30 - だ
        { japanese: "だ`い`が`く", russian: "университет, институт" },
        { japanese: "だいがくせい", russian: "студент" },
        { japanese: "だれ", russian: "кто" },
        { japanese: "だれのともだち", russian: "чей друг" }
    ],
    [// индекс 31 - ち
        { japanese: "ちがいます", russian: "ошибаетесь" },
        { japanese: "ち`い`さ`い", russian: "маленький" },
        { japanese: "`ちず", russian: "карта" },
        { japanese: "ちかい", russian: "близкий, ближний (о расстоянии)" },
        { japanese: "`ちち", russian: "отец" },
        { japanese: "ち`た`い", russian: "область" },
        { japanese: "ちゅうごく", russian: "Китай" },
        { japanese: "ちゅうしゃ", russian: "инъекция" }
    ],
    [// индекс 32 - ぢ
        { japanese: "ぢ", russian: "ぢ" }
    ],
    [// индекс 33 --- null ---
        { japanese: "0", russian: "0" }
    ],
    [// индекс 34 - つ
        { japanese: "つぎ", russian: "следующий" },
        { japanese: "つづく", russian: "продолжаться" },
        { japanese: "つつむ", russian: "заворачивать, упаковывать" }
    ],
    [// индекс 35 - づ
        { japanese: "づ", russian: "づ" }
    ],
    [// индекс 36 - て
        { japanese: "て", russian: "て" }
    ],
    [// индекс 37 - で
        { japanese: "ではありません", russian: "отрицательная форма" },
        { japanese: "です", russian: "утвердительная форма" },
        { japanese: "でんわ", russian: "телефон" }
    ],
    [// индекс 38 - と
        { japanese: "ともだち", russian: "друг" },
        { japanese: "とうきょう", russian: "Токио" },
        { japanese: "とおい", russian: "далекий, дальний" },
        { japanese: "とても", russian: "очень" },
        { japanese: "とけい", russian: "часы" },
        { japanese: "ときょう", russian: "система кронштейнов в японских храмах" },
        { japanese: "としょかん", russian: "библиотека" }
    ],
    [// индекс 39 - ど
        { japanese: "どこ", russian: "где, какое место" },
        { japanese: "どうも", russian: "благодарю" },
        { japanese: "どれ", russian: "который(из предметов)" },
        { japanese: "どの", russian: "который, какой" },
        { japanese: "どなた", russian: "кто(вежливо)" },
        { japanese: "どうぞ", russian: "пожалуйста" },
        { japanese: "どのひと", russian: "кто, который (из них)" },
        { japanese: "どうぞよろしく", russian: "прошу любить и жаловать" },
        { japanese: "どうぞこちらへ", russian: "пожалуйста, сюда" },
        { japanese: "どのかた", russian: "кто, который (из них)" },
        { japanese: "どちら", russian: "какая сторона" },
        { japanese: "どんな", russian: "какой, какая" },
        { japanese: "どうたい", russian: "проводник" },
        { japanese: "どこの", russian: "откуда" }
    ],
    [// индекс 40 - な
        { japanese: "なま", russian: "свежий, сырой" },
        { japanese: "なん", russian: "что" },
        { japanese: "なに", russian: "что" },
        { japanese: "なにご", russian: "какой язык" },
        { japanese: "ながい", russian: "длинный, долгий" },
        { japanese: "なにじん", russian: "кто (по национальности)" },
        { japanese: "なか", russian: "внутри; отношения" },
        { japanese: "なっとく", russian: "понятно, принято, убедительно" },
        { japanese: "なな", russian: "семь - 7" },
        { japanese: "ななひゃく", russian: "700" },
        { japanese: "ななせん", russian: "7000" }
    ],
    [// индекс 41 - に
        { japanese: "にほん", russian: "Япония" },
        { japanese: "にっぽん", russian: "Япония" },
        { japanese: "にほんご", russian: "японский язык" },
        { japanese: "にほんじん", russian: "японец, японка" },
        { japanese: "にぎやか（な）", russian: "оживленный, людный" },
        { japanese: "にちべい", russian: "японско-американский" },
        { japanese: "にがい", russian: "горький" },
        { japanese: "にあう", russian: "быть к лицу; быть подходящим; идти" },
        { japanese: "に", russian: "два - 2" },
        { japanese: "にひゃく", russian: "200" },
        { japanese: "にせん", russian: "200" }
    ],
    [// индекс 42 - ぬ
        { japanese: "ぬ", russian: "ぬ" }
    ],
    [// индекс 43 - ね
        { japanese: "れこ", russian: "кот, кошка" },
        { japanese: "ねったい", russian: "тропики" }
    ],
    [// индекс 44 - の
        { japanese: "のうこう", russian: "густой; крепкий; тяжелый; темный" },
        { japanese: "の", russian: "частица принадлежности" }
    ],
    [// индекс 45 - は
        { japanese: "はい", russian: "да(вежливая форма)" },
        { japanese: "はじめまして", russian: "рад знакомству" },
        { japanese: "はこ", russian: "коробка" },
        { japanese: "はな", russian: "цветок" },
        { japanese: "はは", russian: "мама" },
        { japanese: "はやい", russian: "ранний, быстрый" },
        { japanese: "はし", russian: "мост; палочки для еды" },
        { japanese: "はいふう", russian: "стиль жанра хайкой" },
        { japanese: "はっせい", russian: "произнесение звука, голос" },
        { japanese: "はち", russian: "восемь - 8" },
        { japanese: "はっぴゃく", russian: "800" },
        { japanese: "はっせん", russian: "8000" }
    ],
    [// индекс 46 - ば
        { japanese: "ばくはつ", russian: "взрыв" }
    ],
    [// индекс 47 - ぱ
        { japanese: "ぱ", russian: "ぱ" }
    ],
    [// индекс 48 - ひ
        { japanese: "ひらがな", russian: "хирагана" },
        { japanese: "ひくい", russian: "низкий" },
        { japanese: "ひ", russian: "день, солнце" },
        { japanese: "ひと", russian: "человек, люди" },
        { japanese: "ひろい", russian: "просторный, широкий" },
        { japanese: "ひこうき", russian: "самолет" },
        { japanese: "ひっし", russian: "отчаянный, неистовый, вкладывающий все силы" },
        { japanese: "ひゃく", russian: "числительное 100" }
    ],
    [// индекс 49 - び
        { japanese: "びゃういん", russian: "больница, клиника, врачебный кабинет" }
    ],
    [// индекс 50 - ぴ
        { japanese: "ぴ", russian: "ぴ" }
    ],
    [// индекс 51 - ふ
        { japanese: "ふぢさん", russian: "гора Фудзи" },
        { japanese: "ふるい", russian: "старый, древний" },
        { japanese: "ふくろ", russian: "пакет" },
        { japanese: "ふくろう", russian: "сова" },
        { japanese: "ふだ", russian: "этикетка, билет, плакат" },
        { japanese: "ふせぐ", russian: "оборонять, предотвращать" },
        { japanese: "ふつか", russian: "два дня, на второй день" },
        { japanese: "ふゆ", russian: "зима" }
    ],
    [// индекс 52 - ぶ
        { japanese: "ぶどう [doy]", russian: "виноград" },
        { japanese: "ぶどう [do:]", russian: "безчеловечность, зверства" },
        { japanese: "ぶか", russian: "подчиненный" },
        { japanese: "ぶっか", russian: "цена" }
    ],
    [// индекс 53 - ぷ
        { japanese: "ぷ", russian: "ぷ" }
    ],
    [// индекс 54 - へ
        { japanese: "へや", russian: "комната" }
    ],
    [// индекс 55 - べ
        { japanese: "べっそ", russian: "дача, вилла" }
    ],
    [// индекс 56 - ぺ
        { japanese: "ぺん", russian: "ручка" },
        { japanese: "ぺこぺこ", russian: "сильно проголодаться" }
    ],
    [// индекс 57 - ほ
        { japanese: "ほうせき", russian: "драгоценный камень" },
        { japanese: "ほしい", russian: "хотеть, желать" },
        { japanese: "ほぼ", russian: "няня(ясли); почти, в общем" },
        { japanese: "ほうさく", russian: "средство, мера; мероприятие" }
    ],
    [// индекс 58 - ぼ
        { japanese: "ぼうし", russian: "шляпа" },
        { japanese: "ぼうそい", russian: "оборона, защита,самооборона" }
    ],
    [// индекс 59 - ぽ
        { japanese: "ぽ", russian: "ぽ" }
    ],
    [// индекс 60 - ま
        { japanese: "まち", russian: "город, квартал" },
        { japanese: "まず", russian: "сначала, прежде" },
        { japanese: "まなぶ", russian: "учить, изучать" },
        { japanese: "まで", russian: "окно" },
        { japanese: "までガラス", russian: "оконное стекло" },
        { japanese: "まだ", russian: "еще не" },
        { japanese: "まん", russian: "10000" }
    ],
    [// индекс 61 - み
        { japanese: "みず", russian: "вода" },
        { japanese: "みなさん", russian: "все, вы(обращение к группе людей)" },
        { japanese: "みじかい", russian: "короткий" },
        { japanese: "みょうじ", russian: "фамилия" }
    ],
    [// индекс 62 - む
        { japanese: "むすこ", russian: "сын" }
    ],
    [// индекс 63 - め
        { japanese: "めがね", russian: "очки(для глаз)" },
        { japanese: "めざす", russian: "стремится к, ставить целью" }
    ],
    [// индекс 64 - も
        { japanese: "もと", russian: "начало, основа" },
        { japanese: "もう", russian: "уже" }
    ],
    [// индекс 65 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 66 - や
        { japanese: "やま", russian: "гора" },
        { japanese: "やすい", russian: "дешевый, спокойный, устойчивый" },
        { japanese: "やきにく", russian: "жареное мясо" }
    ],
    [// индекс 67 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 68 - ゆ
        { japanese: "ゆうめいな", russian: "знаменитый, известный" },
        { japanese: "ゆき", russian: "снег" }
    ],
    [// индекс 69 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 70 - よ
        { japanese: "よい", russian: "хороший" },
        { japanese: "よむ", russian: "читать" },
        { japanese: "よん", russian: "четыри - 4" },
        { japanese: "よんひゃく", russian: "400" },
        { japanese: "よんせん", russian: "4000" }
    ],
    [// индекс 71 - ら
        { japanese: "ら", russian: "ら" }
    ],
    [// индекс 72 - り
        { japanese: "りっぱ（な）", russian: "прекрасный" }
    ],
    [// индекс 73 - る
        { japanese: "る", russian: "る" }
    ],
    [// индекс 74 - れ
        { japanese: "れ", russian: "れ" }
    ],
    [// индекс 75 - ろ
        { japanese: "ろく", russian: "шесть - 6" },
        { japanese: "ろっぴゃく", russian: "600" },
        { japanese: "ろくせん", russian: "6000" }
    ],
    [// индекс 76 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 77 - わ
        { japanese: "わたしたち", russian: "мы" },
        { japanese: "わたし", russian: "я" },
        { japanese: "わるい", russian: "плохой" },
        { japanese: "わかりました", russian: "понятно, понял" }
    ],
    [// индекс 78 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 79 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 80 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 81 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 82 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 83 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 84 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 85 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 86 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 87 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 88 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 89 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 90 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 91 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 92 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 93 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 94 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 95 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 96 - ア
        { japanese: "アン (on 暗)", russian: "темный" },
        { japanese: "アン (on 安)", russian: "спокойный, устойчивый, дешевый" },
        { japanese: "アート", russian: "искусство(art)" },
        { japanese: "アアイス", russian: "лед(ice)" },
        { japanese: "アカシア", russian: "акация(acacia)" },
        { japanese: "アウト", russian: "вне(out)" },
        { japanese: "アイ", russian: "глаз(eye)" },
        { japanese: "アジア", russian: "Азия" },
    ],
    [// индекс 97 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 98 - イ
        { japanese: "イタリア", russian: "Италия" },
        { japanese: "イタリイゴ", russian: "итальянский язык" },
        { japanese: "イギリス", russian: "Англия" }
    ],
    [// индекс 99 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 100 - ウ
        { japanese: "ウクライナ", russian: "Украина" },
        { japanese: "ウクライナゴ", russian: "украинский язык" }
    ],
    [// индекс 101 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 102 - エ
        { japanese: "エイ", russian: "Англия (в сочетании)" },
        { japanese: "エア", russian: "воздух (air)" }
    ],
    [// индекс 103 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 104 - オ
        { japanese: "オーケー", russian: "хорошо, окэй" },
        { japanese: "オアシス", russian: "оазис" }
    ],
    [// индекс 105 - カ
        { japanese: "カ (on 何)", russian: "что" },
        { japanese: "カメラマン", russian: "фотограф" },
        { japanese: "カー", russian: "автомобиль" },
        { japanese: "カード", russian: "карточка, документ" }
    ],
    [// индекс 106 - ガ
        { japanese: "ガラス", russian: "стекло" },
        { japanese: "ガク", russian: "учение, наука" },
        { japanese: "ガス", russian: "газ (gas)" }
    ],
    [// индекс 107 - キ
        { japanese: "キン (on 近)", russian: "близкий, ближний (о расстоянии)" },
        { japanese: "キー", russian: "ключ; клавиша(компьютер)" },
        { japanese: "キオスク", russian: "киоск" }
    ],
    [// индекс 108 - ギ
        { japanese: "ギ", russian: "ギ" }
    ],
    [// индекс 109 - ク
        { japanese: "クラス", russian: "класс" },
        { japanese: "クイズ", russian: "контрольный вопрос" }
    ],
    [// индекс 110 - グ
        { japanese: "グ", russian: "グ" }
    ],
    [// индекс 111 - ケ
        { japanese: "ケーキ", russian: "пирожное" },
        { japanese: "ケース", russian: "футляр, коробка; случай, ситуация" }
    ],
    [// индекс 112 - ゲ
        { japanese: "ゲスト", russian: "гость (guest)" }
    ],
    [// индекс 113 - コ
        { japanese: "コーヒ", russian: "кофе" },
        { japanese: "コウ (on 校)", russian: "школа" },
        { japanese: "コウ (on 高)", russian: "высокий, дорогой (о цене)" },
        { japanese: "コク (on 黒)", russian: "черный" },
        { japanese: "コウ (on 広)", russian: "просторный, обширный" },
        { japanese: "ココア", russian: "какао(напиток)" },
        { japanese: "コーチ", russian: "тренер" },
        { japanese: "コクコ", russian: "кокс" },
        { japanese: "コスト", russian: "расходы(cost)" },
        { japanese: "コンピューター", russian: "компьютер" },
        { japanese: "コッブ", russian: "чашка" },
        { japanese: "コース", russian: "курс" }
    ],
    [// индекс 114 - ゴ
        { japanese: "ゴ", russian: "язык, речь" }
    ],
    [// индекс 115 - サ
        { japanese: "サン", russian: "гора" },
        { japanese: "サイズ", russian: "размер" },
        { japanese: "サイド", russian: "сторона" },
        { japanese: "サイト", russian: "место, местонахождение" },
        { japanese: "サーカス", russian: "цирк" }
    ],
    [// индекс 116 - ザ
        { japanese: "ザ", russian: "ザ" }
    ],
    [// индекс 117 - シ
        { japanese: "ショウ", russian: "рождение, появление" },
        { japanese: "シ", russian: "ребенок" },
        { japanese: "ショウ", russian: "маленький" },
        { japanese: "ショウ", russian: "голубой, светло-зеленый" }
    ],
    [// индекс 118 - ジ
        { japanese: "ジュース", russian: "сок" },
        { japanese: "ジョ", russian: "женщина" },
        { japanese: "ジン", russian: "человек, люди" },
        { japanese: "ジグザグ", russian: "зигзаг" }
    ],
    [// индекс 119 - ス
        { japanese: "ス`カート", russian: "юбка" },
        { japanese: "ス`キー", russian: "лыжи" },
        { japanese: "ス`ク`ー`ト", russian: "коньки" },
        { japanese: "ス`タ`ジ`オ", russian: "студия" },
        { japanese: "スター", russian: "звезда" },
        { japanese: "スーツ", russian: "костюм" },
        { japanese: "スチージ", russian: "сцена" },
        { japanese: "スタート", russian: "старт" },
        { japanese: "スペイン", russian: "Испания" },        
        { japanese: "スーパー", russian: "Супермаркет" },        
        { japanese: "スコア", russian: "счет" },        
        { japanese: "スイス", russian: "Швейцария" },        
        { japanese: "スキーウエア", russian: "горнолыжная одежда, костюм для лыж" },        
        { japanese: "ステーキ", russian: "стейк" }        
    ],
    [// индекс 120 - ズ
        { japanese: "ズ", russian: "ズ" }
    ],
    [// индекс 121 - セ
        { japanese: "セイ", russian: "рождение, появление" },
        { japanese: "セン", russian: "река" },
        { japanese: "セン", russian: "прошлый, раньше, прежде" },
        { japanese: "セキ", russian: "красный" },
        { japanese: "セイ", russian: "голубой, светло-зеленый" },
        { japanese: "セクト", russian: "политическая группировка, секта" }
    ],
    [// индекс 122 - ゼ
        { japanese: "ゼ", russian: "ゼ" }
    ],
    [// индекс 123 - ソ
        { japanese: "ソーダ", russian: "сода" },
        { japanese: "ソーセージ", russian: "сосиска, колбаса" },
        { japanese: "ソース", russian: "соус" }
    ],
    [// индекс 124 - ゾ
        { japanese: "ゾ", russian: "ゾ" }
    ],
    [// индекс 125 - タ
        { japanese: "`タクツ", russian: "такси" },
        { japanese: "タイ", russian: "большой, великий" },
        { japanese: "タスク", russian: "задание" }
    ],
    [// индекс 126 - ダ
        { japanese: "ダン", russian: "мужчина" },
        { japanese: "ダイ", russian: "большой, великий" }
    ],
    [// индекс 127 - チ
        { japanese: "チョコレート", russian: "шоколад" },
        { japanese: "チョウ", russian: "город, квартал" },
        { japanese: "チーズ", russian: "сыр" }
    ],
    [// индекс 128 - ヂ
        { japanese: "ヂ", russian: "ヂ" }
    ],
    [// индекс 129 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 130 - ツ
        { japanese: "ツ", russian: "ツ" }
    ],
    [// индекс 131 - ヅ
        { japanese: "ヅツ", russian: "день, солнце" }
    ],
    [// индекс 132 - テ
        { japanese: "テレビ", russian: "телевизор" },
        { japanese: "テイ", russian: "чай" },
        { japanese: "テシャツ", russian: "футболка" },
        { japanese: "テスト", russian: "тест, экзамен" }
    ],
    [// индекс 133 - デ
        { japanese: "デイスク", russian: "диск" },
        { japanese: "データ", russian: "данные" },
        { japanese: "デート", russian: "свидание" }
    ],
    [// индекс 134 - ト
        { japanese: "ト", russian: "группа людей, последователь, хотьба" },
        { japanese: "トスト", russian: "подсушеный ломтик хлеба" },
        { japanese: "トウーラ", russian: "г. Тула [ту:ра]" },
        { japanese: "トイレ", russian: "туалет [тоирэ]" }
    ],
    [// индекс 135 - ド
        { japanese: "ドア", russian: "дверь" },
        { japanese: "ドクタ", russian: "врач, доктор" },
        { japanese: "ドール", russian: "доллар" }
    ],
    [// индекс 136 - ナ
        { japanese: "ナン", russian: "мужчина" },
        { japanese: "ナイス", russian: "хороший, приятный, классный" },
    ],
    [// индекс 137 - ニ
        { japanese: "ニチ", russian: "день, солнце" },
        { japanese: "ニ", russian: "день, солнце" },
        { japanese: "ニン", russian: "человек, люди" }
    ],
    [// индекс 138 - ヌ
        { japanese: "ヌ", russian: "ヌ" }
    ],
    [// индекс 139 - ネ
        { japanese: "ネ", russian: "ネ" }
    ],
    [// индекс 140 - ノ
        { japanese: "ノート", russian: "тетрадь" }
    ],
    [// индекс 141 - ハ
        { japanese: "ハク", russian: "белый" }
    ],
    [// индекс 142 - バ
        { japanese: "バス", russian: "автобус" }
    ],
    [// индекс 143 - パ
        { japanese: "パリ", russian: "Париж" },
        { japanese: "パーティー", russian: "вечеринка [па:ти:]" }
    ],
    [// индекс 144 - ヒ
        { japanese: "ヒ", russian: "ヒ" }
    ],
    [// индекс 145 - ビ
        { japanese: "ビデオ", russian: "видео" },
        { japanese: "ビデオカセット", russian: "видеокассета" },
        { japanese: "ビル", russian: "здание" },
        { japanese: "ビール", russian: "пиво" }
    ],
    [// индекс 146 - ピ
        { japanese: "ピ", russian: "ピ" }
    ],
    [// индекс 147 - フ
        { japanese: "フランスゴ", russian: "французский язык" },
        { japanese: "フランス", russian: "Франция" },
        { japanese: "フランスじん", russian: "француз, француженка" },
        { japanese: "ファッション", russian: "мода" }
    ],
    [// индекс 148 - ブ
        { japanese: "ブ", russian: "ブ" }
    ],
    [// индекс 149 - プ
        { japanese: "プ", russian: "プ" }
    ],
    [// индекс 150 - ヘ
        { japanese: "ヘ", russian: "ヘ" }
    ],
    [// индекс 151 - ベ
        { japanese: "ベッド", russian: "кровать" }
    ],
    [// индекс 152 - ペ
        { japanese: "ペテルブルガ", russian: "Петербург" }
    ],
    [// индекс 153 - ホ
        { japanese: "ホテル", russian: "отель" },
        { japanese: "ホン", russian: "книга" },
        { japanese: "ホウ", russian: "сторона, направление" }
    ],
    [// индекс 154 - ボ
        { japanese: "ボ", russian: "мама" },
        { japanese: "ボク", russian: "дерево" }
    ],
    [// индекс 155 - ポ
        { japanese: "ポ", russian: "ポ" }
    ],
    [// индекс 156 - マ
        { japanese: "マーク", russian: "знак, обозначение" }
    ],
    [// индекс 157 - ミ
        { japanese: "ミョウ", russian: "светлый" }
    ],
    [// индекс 158 - ム
        { japanese: "ム", russian: "ム" }
    ],
    [// индекс 159 - メ
        { japanese: "メイ", russian: "светлый" }
    ],
    [// индекс 160 - モ
        { japanese: "モク", russian: "дерево" },
        { japanese: "モスクワ", russian: "Москва" },
    ],
    [// индекс 161 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 162 - ヤ
        { japanese: "ヤ", russian: "ヤ" }
    ],
    [// индекс 163 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 164 - ユ
        { japanese: "ユ", russian: "ユ" }
    ],
    [// индекс 165 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 166 - ヨ
        { japanese: "ヨ", russian: "ヨ" }
    ],
    [// индекс 167 - ラ
        { japanese: "ラジオ", russian: "радио" }
    ],
    [// индекс 168 - リ
        { japanese: "リヨン", russian: "Лион (город во Франции)" }
    ],
    [// индекс 169 - ル
        { japanese: "ルブル", russian: "рубль" }
    ],
    [// индекс 170 - レ
        { japanese: "レストラン", russian: "ресторан" }
    ],
    [// индекс 171 - ロ 
        { japanese: "ロシア", russian: "Россия" },
        { japanese: "ロシアゴ", russian: "Русский язык" },
        { japanese: "ロシアじん", russian: "русский, русская" }
    ],
    [// индекс 172 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 173 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 174 - null
        { japanese: "0", russian: "0" }
    ]
];