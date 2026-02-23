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
        { japanese: "ありがとうございます", russian: "большое спасибо" }
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
    [// индекс 3 --- null ---
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
        { japanese: "えさ", russian: "корм" }
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
        { japanese: "おやすみなさい", russian: "спокойной ночи" }
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
        { japanese: "かばん", russian: "сумка" }
    ],
    [// индекс 10 - が
        { japanese: "がわ", russian: "река; в названии рек" },
        { japanese: "がっこう", russian: "школа" },
        { japanese: "がくせい", russian: "студент, учащийся" },
        { japanese: "が`か", russian: "художник" }
    ],
    [// индекс 11 - き
        { japanese: "き", russian: "дерево" },
        { japanese: "きく", russian: "хризантема" },
        { japanese: "きゃうと", russian: "Киото" },
        { japanese: "きれい（な）", russian: "чистый, красивый" },
        { japanese: "きさらず", russian: "Кисарадзу (город в Японии)" },
        { japanese: "きげき", russian: "комедия" },
        { japanese: "きのう", russian: "вчера" }
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
        { japanese: "くつ", russian: "обувь" }
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
        { japanese: "`ご", russian: "пять" }
    ],
    [// индекс 19 - さ
        { japanese: "さん", russian: "господин, госпожа" },
        { japanese: "さくら", russian: "сакура" },
        { japanese: "さき", russian: "вперед, впереди" },
        { japanese: "さいせい", russian: "возраждение" },
        { japanese: "さけ", russian: "рисовое вино" },
        { japanese: "さびしい", russian: "одинокий" },
        { japanese: "さいふ", russian: "кошелёк" },
        { japanese: "さようなら", russian: "до свидание" }
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
        { japanese: "しき", russian: "моральный дух" }
    ],
    [// индекс 22 - じ
        { japanese: "じどうしゃ", russian: "машина" },
        { japanese: "`じさ", russian: "разница во времени" },
        { japanese: "`じち", russian: "самоуправление" },
        { japanese: "`じじ", russian: "текущее событие" },
        { japanese: "じ`だ`い", russian: "эпоха, время" },
        { japanese: "じどうか", russian: "автоматизация" },
        { japanese: "じてんしゃ", russian: "велосипед" }
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
        { japanese: "せなか", russian: "спина" }
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
        { japanese: "そして (и опускается)", russian: "и" }
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
    ],
    [// индекс 31 - ち
        { japanese: "ちがいます", russian: "ошибаетесь" },
        { japanese: "ち`い`さ`い", russian: "маленький" },
        { japanese: "`ちず", russian: "карта" },
        { japanese: "ちかい", russian: "близкий" },
        { japanese: "`ちち", russian: "отец" },
        { japanese: "ち`た`い", russian: "область" },
        { japanese: "ちゅうごく", russian: "Китай" }
    ],
    [// индекс 32 - ぢ
        { japanese: "ぢ", russian: "ぢ" }
    ],
    [// индекс 33 --- null ---
        { japanese: "0", russian: "0" }
    ],
    [// индекс 34 - つ
        { japanese: "つぎ", russian: "следующий" },
        { japanese: "つづく", russian: "продолжаться" }
    ],
    [// индекс 35 - づ
        { japanese: "づ", russian: "づ" }
    ],
    [// индекс 36 - て
        { japanese: "て", russian: "て" }
    ],
    [// индекс 37 - で
        { japanese: "ではありません", russian: "отрицательная форма" },
        { japanese: "です", russian: "утвердительная форма" }
    ],
    [// индекс 38 - と
        { japanese: "ともだち", russian: "друг" },
        { japanese: "とうきょう", russian: "Токио" },
        { japanese: "とおい", russian: "далекийб дальний" },
        { japanese: "とても", russian: "очень" },
        { japanese: "とけい", russian: "часы" }
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
        { japanese: "どうたい", russian: "проводник" }
    ],
    [// индекс 40 - な
        { japanese: "なま", russian: "свежый, сырой" },
        { japanese: "なん", russian: "что" },
        { japanese: "なに", russian: "что" },
        { japanese: "なにご", russian: "какой язык" },
        { japanese: "ながい", russian: "длинный, долгий" },
        { japanese: "なにじん", russian: "кто (по национальности)" },
        { japanese: "なか", russian: "внутри; отношения" }
    ],
    [// индекс 41 - に
        { japanese: "にほん", russian: "Япония" },
        { japanese: "にっぽん", russian: "Япония" },
        { japanese: "にほんご", russian: "японский язык" },
        { japanese: "にほんじん", russian: "японец, японка" },
        { japanese: "にぎやか（な）", russian: "оживленный, людный" },
        { japanese: "にちべい", russian: "японско-американский" },
        { japanese: "にがい", russian: "горький" },
        { japanese: "にあう", russian: "быть к лицу; быть подходящим; идти" }
    ],
    [// индекс 42 - ぬ
        { japanese: "ぬ", russian: "ぬ" }
    ],
    [// индекс 43 - ね
        { japanese: "れこ", russian: "кот, кошка" }
    ],
    [// индекс 44 - の
        { japanese: "のうこう", russian: "густой; крепкий; тяжелый; темный" }
    ],
    [// индекс 45 - は
        { japanese: "はい", russian: "да(вежливая форма)" },
        { japanese: "はじめまして", russian: "рад знакомству" },
        { japanese: "はこ", russian: "коробка" },
        { japanese: "はな", russian: "цветок" },
        { japanese: "はは", russian: "мама" },
        { japanese: "はやい", russian: "ранний, быстрый" },
        { japanese: "はし", russian: "мост; палочки для еды" },
        { japanese: "はいふう", russian: "стиль жанра хайкой" }
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
        { japanese: "ひこうき", russian: "самолет" }
    ],
    [// индекс 49 - び
        { japanese: "び", russian: "び" }
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
        { japanese: "ふつか", russian: "два дня, на второй день" }
    ],
    [// индекс 52 - ぶ
        { japanese: "ぶどう [doy]", russian: "виноград" },
        { japanese: "ぶどう [do:]", russian: "безчеловечность, зверства" }
    ],
    [// индекс 53 - ぷ
        { japanese: "ぷ", russian: "ぷ" }
    ],
    [// индекс 54 - へ
        { japanese: "へや", russian: "комната" }
    ],
    [// индекс 55 - べ
        { japanese: "べ", russian: "べ" }
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
        { japanese: "ぼうし", russian: "шляпа" }
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
        { japanese: "まだ", russian: "еще не" }
    ],
    [// индекс 61 - み
        { japanese: "みず", russian: "вода" },
        { japanese: "みなさん", russian: "все, вы(обращение к группе людей)" },
        { japanese: "みじかい", russian: "короткий" }
    ],
    [// индекс 62 - む
        { japanese: "む", russian: "む" }
    ],
    [// индекс 63 - め
        { japanese: "め", russian: "め" }
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
        { japanese: "やすい", russian: "дешевый, спокойный, устойчивый" }
    ],
    [// индекс 67 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 68 - ゆ
        { japanese: "ゆうめいな", russian: "знаменитый, известный" }
    ],
    [// индекс 69 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 70 - よ
        { japanese: "よい", russian: "хороший" }
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
        { japanese: "ろ", russian: "ろ" }
    ],
    [// индекс 76 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 77 - わ
        { japanese: "わたしたち", russian: "мы" },
        { japanese: "わたし", russian: "я" },
        { japanese: "わるい", russian: "плохой" }
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
        { japanese: "アイ", russian: "глаз(eye)" }
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
        { japanese: "エイ (on )", russian: "Англия (в сочетании)" },
        { japanese: "エア", russian: "воздух (air)" }
    ],
    [// индекс 103 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 104 - オ
        { japanese: "オーケー", russian: "хорошо, окэй" }
    ],
    [// индекс 105 - カ
        { japanese: "カ (on 何)", russian: "что" },
        { japanese: "カメラマン", russian: "фотограф" },
        { japanese: "カー", russian: "автомобиль" },
        { japanese: "カード", russian: "карточка, документ" }
    ],
    [// индекс 106 - ガ
        { japanese: "ガ", russian: "стекло" },
        { japanese: "ガ", russian: "учение, наука" },
        { japanese: "ガ", russian: "газ (gas)" }
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
        { japanese: "クラス", russian: "класс" }
    ],
    [// индекс 110 - グ
        { japanese: "グ", russian: "グ" }
    ],
    [// индекс 111 - ケ
        { japanese: "ケーキ", russian: "пирожное" }
    ],
    [// индекс 112 - ゲ
        { japanese: "ゲ", russian: "гость (guest)" }
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
        { japanese: "コスト", russian: "расходы(cost)" }
    ],
    [// индекс 114 - ゴ
        { japanese: "ゴ", russian: "язык, речь" }
    ],
    [// индекс 115 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 116 - null
        { japanese: "0", russian: "0" }
    ],
    [// индекс 117 - null
        { japanese: "0", russian: "0" }
    ],
];