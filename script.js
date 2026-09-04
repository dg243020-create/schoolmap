// ============================================================
// 大商学園 校内マップ
// ============================================================
//
// ★★★ 基本的に編集するのはこのファイルの
// 「目的地」「文化祭クリック範囲」「文化祭情報」だけ ★★★
//
// ============================================================



// ============================================================
// 建物設定
// ============================================================

const floors = {

    AB: 5

};


// ============================================================
// HTML要素
// ============================================================

const building =
    document.getElementById("building");

const floor =
    document.getElementById("floor");

const map =
    document.getElementById("map");

const classroomLayer =
    document.getElementById("classroom-layer");



// ============================================================
// ★ 文化祭クリック範囲
// ============================================================
//
// x      = 元画像の左からの座標
// y      = 元画像の上からの座標
// width  = 元画像上での横幅
// height = 元画像上での縦幅
//
// ============================================================

const classroomAreas = {

    // --------------------------------------------------------
    // 1年
    // --------------------------------------------------------

    "11": {
        building: "S",
        floor: "2",
        x: 720,
        y: 718,
        width: 432,
        height: 364
    },

    "12": {
        building: "S",
        floor: "3",
        x: 718,
        y: 1074,
        width: 426,
        height: 364
    },

    "13": {
        building: "S",
        floor: "3",
        x: 720,
        y: 718,
        width: 426,
        height: 354
    },

    "14": {
        building: "S",
        floor: "3",
        x: 723,
        y: 356,
        width: 432,
        height: 364
    },

    "15": {
        building: "S",
        floor: "3",
        x: 726,
        y: 0,
        width: 432,
        height: 364
    },

    "16": {
        building: "AB",
        floor: "5",
        x: 3060,
        y: 646,
        width: 393,
        height: 355
    },

    "17": {
        building: "AB",
        floor: "5",
        x: 2667,
        y: 646,
        width: 393,
        height: 355
    },

    "18": {
        building: "AB",
        floor: "5",
        x: 2267,
        y: 646,
        width: 393,
        height: 355
    },

    "19": {
        building: "AB",
        floor: "5",
        x: 1870,
        y: 646,
        width: 393,
        height: 355
    },

    "110": {
        building: "AB",
        floor: "5",
        x: 1477,
        y: 646,
        width: 393,
        height: 355
    },

    "111": {
        building: "AB",
        floor: "5",
        x: 1,
        y: 1180,
        width: 348,
        height: 400
    },

    "112": {
        building: "AB",
        floor: "5",
        x: 1,
        y: 790,
        width: 348,
        height: 400
    },

    "113": {
        building: "AB",
        floor: "5",
        x: 1,
        y: 397,
        width: 348,
        height: 400
    },

    "114": {
        building: "AB",
        floor: "5",
        x: 1,
        y: 2,
        width: 348,
        height: 400
    },

    "115": {
        building: "AB",
        floor: "5",
        x: 804,
        y: 0,
        width: 353,
        height: 355
    },

    "116": {
        building: "AB",
        floor: "4",
        x: 804,
        y: 0,
        width: 353,
        height: 355
    },


    // --------------------------------------------------------
    // 2年
    // --------------------------------------------------------

    "21": {
        building: "S",
        floor: "2",
        x: 720,
        y: 1079,
        width: 432,
        height: 364
    },

    "22": {
        building: "S",
        floor: "3",
        x: 143,
        y: 1079,
        width: 426,
        height: 364
    },

    "23": {
        building: "S",
        floor: "3",
        x: 143,
        y: 725,
        width: 432,
        height: 351
    },

    "24": {
        building: "S",
        floor: "3",
        x: 143,
        y: 364,
        width: 426,
        height: 364
    },

    "25": {
        building: "AB",
        floor: "4",
        x: 3060,
        y: 646,
        width: 393,
        height: 355
    },

    "26": {
        building: "AB",
        floor: "3",
        x: 804,
        y: 0,
        width: 353,
        height: 355
    },

    "27": {
        building: "AB",
        floor: "4",
        x: 2667,
        y: 646,
        width: 393,
        height: 355
    },

    "28": {
        building: "AB",
        floor: "4",
        x: 2267,
        y: 646,
        width: 393,
        height: 355
    },

    "29": {
        building: "AB",
        floor: "4",
        x: 1870,
        y: 646,
        width: 393,
        height: 355
    },

    "210": {
        building: "AB",
        floor: "4",
        x: 1477,
        y: 646,
        width: 393,
        height: 355
    },

    "211": {
        building: "AB",
        floor: "4",
        x: 1,
        y: 1180,
        width: 348,
        height: 400
    },
/*
    "212": {
        building: "AB",
        floor: "4",
        x: 1,
        y: 790,
        width: 348,
        height: 400
    },
*/
    "213": {
        building: "AB",
        floor: "4",
        x: 1,
        y: 397,
        width: 348,
        height: 400
    },

    "214": {
        building: "AB",
        floor: "4",
        x: 1,
        y: 2,
        width: 348,
        height: 400
    },


    // --------------------------------------------------------
    // 3年
    // --------------------------------------------------------

    "31e": {
        building: "S",
        floor: "2",
        x: 720,
        y: 1438,
        width: 426,
        height: 435
    },

    "31s": {
        building: "S",
        floor: "6",
        x: 940,
        y: 1,
        width: 141,
        height: 145
    },

    "32e": {
        building: "S",
        floor: "2",
        x: 723,
        y: 356,
        width: 432,
        height: 364
    },

    "32s": {
        building: "S",
        floor: "6",
        x: 1656,
        y: 1840,
        width: 141,
        height: 145
    },


    "33p": {
        building: "S",
        floor: "2",
        x: 726,
        y: 0,
        width: 432,
        height: 364
    },

    "33s": {
        building: "S",
        floor: "6",
        x: 1981,
        y: 1840,
        width: 141,
        height: 145
    },


    "34t": {
        building: "AB",
        floor: "3",
        x: 3060,
        y: 646,
        width: 393,
        height: 355
    },

    "34s": {
        building: "S",
        floor: "6",
        x: 1189,
        y: 1840,
        width: 141,
        height: 145
    },

    "35": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 2,
        width: 348,
        height: 400
    },

    "36e": {
        building: "AB",
        floor: "3",
        x: 2667,
        y: 646,
        width: 393,
        height: 355
    },

    "36s": {
        building: "S",
        floor: "6",
        x: 791,
        y: 1,
        width: 141,
        height: 145
    },


    "37p": {
        building: "AB",
        floor: "3",
        x: 2267,
        y: 646,
        width: 393,
        height: 355
    },

    "37s": {
        building: "S",
        floor: "6",
        x: 395,
        y: 1367,
        width: 141,
        height: 145
    },

    "38p": {
        building: "AB",
        floor: "3",
        x: 1870,
        y: 646,
        width: 393,
        height: 355
    },

    "38s": {
        building: "S",
        floor: "6",
        x: 1840,
        y: 1840,
        width: 141,
        height: 145
    },

    "39p": {
        building: "AB",
        floor: "3",
        x: 1477,
        y: 646,
        width: 393,
        height: 355
    },

    "39s": {
        building: "S",
        floor: "6",
        x: 1732,
        y: 1260,
        width: 141,
        height: 145
    },

    "310p": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 1180,
        width: 348,
        height: 400
    },

    "310s": {
        building: "S",
        floor: "6",
        x: 1910,
        y: 1258,
        width: 141,
        height: 145
    },

    "311p": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 790,
        width: 348,
        height: 400
    },

    "311s": {
        building: "S",
        floor: "6",
        x: 1518,
        y: 1840,
        width: 141,
        height: 145
    },

    "312p": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 397,
        width: 348,
        height: 400
    },

    "312s": {
        building: "S",
        floor: "6",
        x: 1331,
        y: 1835,
        width: 141,
        height: 145
    },

    "dance": {
        building: "S",
        floor: "6",
        x:  646,
        y: 1,
        width: 141,
        height: 145
    },

    "bado": {
        building: "S",
        floor: "6",
        x: 2051,
        y: 1259,
        width: 141,
        height: 145
    },

    "hand": {
        building: "S",
        floor: "6",
        x: 74,
        y: 1371,
        width: 141,
        height: 145
    },

    "ragubi": {
        building: "S",
        floor: "6",
        x: 217,
        y: 1371,
        width: 141,
        height: 145
    },

    "kendo": {
        building: "S",
        floor: "6",
        x: 506,
        y: 1,
        width: 141,
        height: 145
    },

    "judo": {
        building: "S",
        floor: "6",
        x: 860,
        y: 1371,
        width: 141,
        height: 145
    },

    "wbasket": {
        building: "S",
        floor: "6",
        x: 542,
        y: 1371,
        width: 141,
        height: 145
    },

    "information": {
        building: "S",
        floor: "6",
        x: 1407,
        y: 1256,
        width: 141,
        height: 145
    },

    "suisougaku": {
        building: "S",
        floor: "6",
        x: 573,
        y: 1694,
        width: 113,
        height: 287
    },

    "mtennis": {
        building: "S",
        floor: "6",
        x: 722,
        y: 1371,
        width: 141,
        height: 145
    },

    "mbasket": {
        building: "S",
        floor: "6",
        x: 1583,
        y: 1256,
        width: 141,
        height: 145
    },

    "mbare": {
        building: "S",
        floor: "6",
        x: 1227,
        y: 1,
        width: 141,
        height: 145
    },

    "boki": {
        building: "S",
        floor: "6",
        x: 1262,
        y: 1262,
        width: 141,
        height: 145
    },

    "ryouri": {
        building: "S",
        floor: "6",
        x: 1080,
        y: 1,
        width: 141,
        height: 145
    },

    "ESS": {
        building: "AB",
        floor: "3",
        x: 2233,
        y: 1156,
        width: 291,
        height: 213
    },


    "kokusai": {
        building: "AB",
        floor: "3",
        x: 1873,
        y: 652,
        width: 397,
        height: 357
    },


    "science": {
        building: "AB",
        floor: "3",
        x: 1081,
        y: 1006,
        width: 432,
        height: 147
    },

    "photo": {
        building: "AB",
        floor: "3",
        x: 2521,
        y: 1156,
        width: 216,
        height: 210   
 },

    "housou": {
        building: "AB",
        floor: "3",
        x: 2727,
        y: 1156,
        width: 216,
        height: 210   
 },

    "shodou": {
        building: "AB",
        floor: "3",
        x: 1804,
        y: 1156,
        width: 216,
        height: 210
    },

    "information2": {
        building: "AB",
        floor: "4",
        x: 4,
        y: 796,
        width: 354,
        height: 210
    },

    "tosho": {
        building: "AB",
        floor: "3",
        x: 433,
        y: 721,
        width: 288,
        height: 288
    },

    "bijutu": {
        building: "AB",
        floor: "3",
        x: 2015,
        y: 1156,
        width: 216,
        height: 210
    },

    "manken": {
        building: "AB",
        floor: "4",
        x: 10,
        y: 1015,
        width: 351,
        height: 176
    },

    "TCG": {
        building: "AB",
        floor: "4",
        x: 433,
        y: 433,
        width: 288,
        height: 288
    },


};







// ============================================================
// ★ 文化祭情報
// ============================================================
//
// classroomAreas のキーと同じ名前を使います。
//
// title       = 企画名
// image       = 画像
// description = 紹介文
//
// ============================================================

const festivalInfo = {

    "11": {
        title: "1-1 体験 怪力乱心！！ゴーストバスターズ",
        image: "festival6/5体験-101.png",
        description: "12人全員で全力で取り組みました。お化けの世界へようこそ！"
    },

    "12": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival4/5体験-102.png",
        description: "咲き誇る色とりどりの花々と、可憐に舞う蝶たち——。 一歩踏み入れれば、そこはまるで絵本の中に迷い込んだような幻想的な世界。 今日という日を彩る、あなただけの“とっておきの1枚”を残しにきませんか？"
    },

    "13": {
        title: "1-3 体験 ちいかわたちの日常",
        image: "festival4/5体験-103.jpg",
        description: "友だちと一緒にちいかわの世界を楽しみながら最高の１枚を撮ろう！"
    },

    "14": {
        title: "1-4 体験 人力マリオカート",
        image: "festival4/5体験-104.jpg",
        description: "自分の脚で自分の限界にチャレンジしよう！"
    },

    "15": {
        title: "1-5 体験 縁日",
        image: "festival4/5体験-105.png",
        description: "1年5組がお届けする、夏祭り気分満点の縁日です。"
    },

    "16": {
        title: "1-6 体験 Diglet Casino",
        image: "festival4/5体験-106.png",
        description: "ざわ・・・ざわ・・・ざわ・・・情報クラスが本気でCreateした最高のentertainment！！"
    },

    "17": {
        title: "1-7 体験 トイストーリーお化け屋敷",
        image: "festival4/5体験-107.png",
        description: "「逃げ場なし。あなたは、この暗闇から生きて出られるか——？」1年7組が贈る、本気の本格お化け屋敷。足を踏み入れた瞬間、日常は崩壊する。絶叫の準備をしてお越しください。"
    },

    "18": {
        title: "1-8 体験 1年8組の恐怖地帯",
        image: "festival4/5体験-108.png",
        description: "「本物の恐怖」を味わいたい人はぜひ来てください！"
    },

    "19": {
        title: "1-9 体験 お化け屋敷",
        image: "festival4/5体験-109.jpg",
        description: "暗闇に包まれた教室を、入口から出口まで進みながら脱出を目指す体験型お化け屋敷です。道中では、お化け役の生徒たちがさまざまな演出で皆さんをお迎えします。最後まで無事にゴールできるか、ぜひ挑戦してください！"
    },

    "110": {
        title: "1-10 体験 スタンプラリー",
        image: "festival4/5体験-110.png",
        description: "謎解き等をしながら学校中を探索し、スタンプを集める。完成すれば！"
    },

    "111": {
        title: "1-11 体験 急げ！恐怖の部屋から緊急脱出！",
        image: "festival3/5体験-111.png",
        description: "カギを見つけて、この恐怖の部屋から脱出せよ！早く出られたあなたには景品が...!!"
    },

    "112": {
        title: "1-12 体験 縁日",
        image: "festival6/5体験-112.png",
        description: "子供から大人まで楽しめる縁日コーナー！！ぜひお越しください！！"
    },

    "113": {
        title: "1-13 体験 ストラックアウト",
        image: "festival/5体験-113.png",
        description: "コントロールに自信はあるか？狙いを定めて全抜きに挑戦だ！"
    },

    "114": {
        title: "1-14 体験 今日好きになりました。文化祭編",
        image: "festival2/5体験-114.jpg",
        description: "恋愛リアリティーショーをイメージした映えスポットです。ぜひ来てください。"
    },

   /* "114p": {
        title: "1-14 パフォーマンス ダンスパラダイス1-14",
        image: "festival2/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },
*/
    "115": {
        title: "1-15 体験 学校の怪談",
        image: "festival/5体験-115.png",
        description: "お化け屋敷×迷路であなたを学校の怪談の世界に誘います。"
    },

    "116": {
        title: "1-16 モンキー縁日",
        image: "festival2/5体験-116.jpg",
        description: "他と比べて、楽しい縁日にするのでみんな来てください！"
    },


    // --------------------------------------------------------
    // 2年
    // --------------------------------------------------------

    "21": {
        title: "2-1 展示 Save Our Blue ～私たちがつなぐ、未来の海～",
        image: "festival3/4展示-201.png",
        description: "海の生き物たちをテーマにした幻想的な空間で、ゴミのないきれいな海の中を散歩しているような体験が楽しめます。"
    },

    "22": {
        title: "2-2 パフォーマンス ARASHI",
        image: "festival3/2パ-202.png",
        description: "個性溢れる2組の魅力を 10 分間でお伝えします。みんな見てね"
    },

    "23": {
        title: "2-3 体験 トモニ、全集中！",
        image: "festival6/5体験-203.png",
        description: "見えない相手に全集中！トモニ笑って楽しめる、最高の思い出を作ろう！"
    },

    "24": {
        title: "2-4 体験 Have a nice 縁日！！",
        image: "festival/5体験-204.png",
        description: "世界一、友達と楽しめる縁日です！子どもの頃の無邪気な自分を思い出そう！"
    },

    "25": {
        title: "2-5 体験 MISSION！！縁日を楽しめ",
        image: "festival2/5体験-205.jpg",
        description: "射的、わなげ、千本くじなど、縁日気分味わおう！"
    },

    "26": {
        title: "2-6 体験 ドールルーム",
        image: "festival/5体験-206.png",
        description: "今夏最恐！「二度と来たくない」ホラー体験を！2−6教室にて！"
    },

    "27": {
        title: "2-7 勝つか、散るか、人生逆転カジノ",
        image: "festival/5体験-207.png",
        description: "勝負の世界へようこそ！極限ゲーム開幕！"
    },

    "28": {
        title: "2-3 体験 トモニ、全集中！",
        image: "festival6/5体験-203.png",
        description: "見えない相手に全集中！トモニ笑って楽しめる、最高の思い出を作ろう！"
    },

    "29": {
        title: "1-5 体験 縁日",
        image: "festival4/5体験-105.png",
        description: "1年5組がお届けする、夏祭り気分満点の縁日です。"
    },

    "210": {
        title: "2-10 体験 「カラダ探し」",
        image: "festival6/5体験-210.png",
        description: "この恐怖。見るだけじゃ終われない。「カラダ探し」で待っています。"
    },

    "211": {
        title: "2-11 体験 ディズニーハロウィンのフォトスポット",
        image: "festival/5体験-211.png",
        description: "ディズニーハロウィンをテーマにしたフォトスポットです。他のフォトスポットとは違う内容をお楽しみください。"
    },
/*
    "212": {
        title: '2-12 パフォーマンス "D"スデ～皆にんきもの～',
        image: "festival2/2パ-212.jpg",
        description: "人気曲が続々登場！普段と違う姿にもご注目ください！"
    },
*/
    "213": {
        title: "2-1 展示 Save Our Blue ～私たちがつなぐ、未来の海～",
        image: "festival3/4展示-201.png",
        description: "海の生き物たちをテーマにした幻想的な空間で、ゴミのないきれいな海の中を散歩しているような体験が楽しめます。"
    },

    "214": {
        title: "2-14 体験 Daisho Disneyland 2-14",
        image: "festival3/5体験-214.png",
        description: "射的や輪投げをやっているので、遊びにきてください！"
    },


    // --------------------------------------------------------
    // 3年
    // --------------------------------------------------------

    "31e": {
        title: "3-1 体験 おりがみワークショップ&ラリー",
        image: "festival3/5体験-301.png",
        description: "折り紙を折りながらまったり、ラリー系に参加して楽しみませんか。"
    },

    "31s": {
        title: "3-1 3-5 模擬店 宿命の「夏色」ドリンク　〜青春と奇跡の味わい〜",
        image: "festival6/7模擬店-301305.png",
        description: "文化祭は、まだまだ暑さの残る季節。みなさんの喉を潤すため、ドリンクを販売します。"
    },   

    "32e": {
        title: "3-2 体験 文系が作った単純なフォトスポット",
        image: "festival3/5体験-302.jpg",
        description: "文系が夏をイメージして作りました。"
    },

    "32s": {
        title: "3-2 模擬店 理系が作る複雑な豚キムチ",
        image: "festival3/7模擬店-302.jpg",
        description: "美味しいよ__※小麦粉、卵、エビ、牛肉、豚肉、鶏肉、大豆、りんご、ごまを含む"
    },

    "33p": {
        title: "3-3 パフォーマンス 若原の野望 Vol.2",
        image: "festival2/2パ-303.jpg",
        description: "今年　“も“ 特進なめんなよ。"
    },
    
    "33s": {
        title: "3-3 模擬店 油に飛び込め！3-3！！",
        image: "festival3/7模擬店-303.jpg",
        description: "私たち 3-3はチーズ棒などの揚げ物を絶対絶対美味しく作るので、ぜひ食べに来てください！ アツアツの揚げ物を食べて、3-3と一緒に最高の夏を楽しみましょう__"
    },

    "34t": {
        title: "3-4 展示 おもちゃばこ",
        image: "festival3/4展示-304.png",
        description: "トイストーリーの世界に迷い込んだかのような没入感をぜひ体験せよ！"
    },

    "34s": {
        title: "3-4 模擬店 いのちのからあげ",
        image: "festival3/7模擬店-304.jpg",
        description: "店主:いのちによる多彩な味付けを楽しめる唐揚げ屋　是非ご賞味ください__"
    },

    "35": {
        title: "3-1 3-5 校内装飾 カラフルパラソルワンダフル",
        image: "festival3/3校内-301305.jpg",
        description: "宿命が響き、輝く傘とジュース！暑い今日を、最高にまぶしい青春に！"
    },

    "36e": {
        title: "1-1 体験 怪力乱心！！ゴーストバスターズ",
        image: "festival6/5体験-101.png",
        description: "12人全員で全力で取り組みました。お化けの世界へようこそ！"
    },
    
    "36s": {
        title: "3-6 模擬店 クルンジ",
        image: "festival3/7模擬店-306.jpg",
        description: "クロワッサンをカリカリに焼き上げた、韓国発祥のスイーツです"
    },  

    "37p": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival4/5体験-102.png",
        description: "咲き誇る色とりどりの花々と、可憐に舞う蝶たち——。 一歩踏み入れれば、そこはまるで絵本の中に迷い込んだような幻想的な世界。 今日という日を彩る、あなただけの“とっておきの1枚”を残しにきませんか？"
    },

    "37s": {
        title: "3-7 模擬店 Cheese!Cheese!",
        image: "festival3/7模擬店-307.jpg",
        description: "いろんな味の『もちもちチーズボール』食べてください__"
    },

    "38p": {
        title: "国際教育推進委員会 展示 オーストラリア異文化体験",
        image: "festival7/4展示-国際教育.jpeg",
        description: "オーストラリア　メルボルンにある姉妹校で体験した内容を発表します。"
    },

    "38s": {
        title: "3-8 模擬店 ハッピーポテト",
        image: "festival3/7模擬店-308.jpg",
        description: "みんなを幸せにするハッピーポテトを販売します。食べに来てください。"
    },

    "39p": {
        title: "1-3 体験 ちいかわたちの日常",
        image: "festival4/5体験-103.jpg",
        description: "友だちと一緒にちいかわの世界を楽しみながら最高の１枚を撮ろう！"
    },

    "39s": {
        title: "3-9 模擬店 坊主　せんべい＝たません",
        image: "festival2/7模擬店-309.png",
        description: "えびせん × 玉子 × ソース × マヨ ＝ 勝利 シンプルにして至高。説明不要の最強B級グルメ「たません」降臨！"
    },

    "310p": {
        title: "2-4 体験 Have a nice 縁日！！",
        image: "festival/5体験-204.png",
        description: "世界一、友達と楽しめる縁日です！子どもの頃の無邪気な自分を思い出そう！"
    },

    "310s": {
        title: "3-10 模擬店 3年10組のたこ焼き",
        image: "festival3/7模擬店-310.png",
        description: "魂込めて焼きます。"
    },

    "311p": {
        title: "1-4 体験 人力マリオカート",
        image: "festival4/5体験-104.jpg",
        description: "自分の脚で自分の限界にチャレンジしよう！"
    },

    "311s": {
        title: "3-11 模擬店 おいし～い焼きバナナ",
        image: "festival6/7模擬店-311.png",
        description: "何じゃこれ！？新食感の焼きバナナをご賞味あれ！！"
    },

    "312p": {
        title: "3-2 体験 文系が作った単純なフォトスポット",
        image: "festival3/5体験-302.jpg",
        description: "文系が夏をイメージして作りました。"
    },

    "312s": {
        title: "3-12 模擬店 とりま焼き鳥",
        image: "festival2/7模擬店-312.png",
        description: "とりま焼き鳥__一本食べたら止まらない"
    },

    "dance": {
        title: "ダンス部 模擬店 CUTIE DANCERS",
        image: "festival5/dance.png",
        description: "可愛いだけじゃだめなので、キンキンに冷えたジュース売ってます！！"
    },

    "bado": {
        title: "バドミントン部 模擬店 バド部のかき氷",
        image: "festival5/bado.png",
        description: "今年もかき氷作ります！！"
    },

    "hand": {
        title: "ハンドボール部 模擬店 HAN-DOG",
        image: "festival5/hand.png",
        description: "ハンド部の本気。今日はホットドッグに込めました。"
    },

    "ragubi": {
        title: "ラグビー部 模擬店 ジャッカルチキン",
        image: "festival5/ragubi.jpeg",
        description: "「ラグビー部特製！アツアツジューシーな唐揚げを食べてください！」"
    },    

    "kendo": {
        title: "剣道部 模擬店 イカ焼き",
        image: "festival5/剣道部.jpg",
        description: "剣道部が愛情込めて焼くイカ焼きはどの食べ物よりもおいしいです。食べて後悔はないのでぜひ食べに来てください！！"
    },

    "judo": {
        title: "柔道部 模擬店 柔道串物語",
        image: "festival6/7模擬店-柔道部.png",
        description: "肉汁あふれる牛串です。香ばしい香りとやみつきになる味！一度食べて下さい。"
    },

    "wbasket": {
        title: "女子バスケットボール部 模擬店 チュロス",
        image: "festival5/wbasket.jpeg",
        description: "甘くておいしいチュロスとキンキンのジュースをかわいい女バス達が売るのでぜひ来てね__"
    },

    "information": {
        title: "情報処理研究部 模擬店 Cloud Cotton Candy",
        image: "festival5/7模擬店-情報処理研究部.jpg",
        description: "ふわふわで甘い！特製わたあめ！文化祭で待ってます！"
    },

    "suisougaku": {
        title: "吹奏楽部 模擬店 ブラスバンドのスーパーボール",
        image: "festival5/7模擬店-吹奏楽部.jpg",
        description: "特殊なボールもあります、ぜひきてください!!"
    },

    "mtennis": {
        title: "男子テニス部 模擬店 テニ貴族（大商本店）",
        image: "festival5/7模擬店-男子テニス部.png",
        description: "今年もやってきました！テニ貴族大商本店の出店です。　毎年売切れ御免の大人気焼き鳥！そして今年はあの大人気店長最後の出勤となります。みんなで店長の勇姿を見に来てください。"
    },
    
    "mbasket": {
        title: "男子バスケットボール部 模擬店 水餃子【panthers】",
        image: "festival5/mbasket.png",
        description: "大商男バス名物水餃子！美味しいよ！！"
    },

    "mbare": {
        title: "男子バレーボール部 模擬店 元祖 泉屋",
        image: "festival5/mbare.png",
        description: "安くてうまい！最高の家庭の味を提供します！"
    },

    "boki": {
        title: "簿記部 模擬店 コロッケとラムネ",
        image: "festival6/7模擬店-簿記部.png",
        description: "熱々コロッケに冷え冷えラムネは最高です"
    },

    "ryouri": {
        title: "料理研究部 模擬店 大商マフィン",
        image: "festival5/7模擬店-料理研究部.png",
        description: "とっても美味な焼き立てマフィンを販売します(^^)"
    },

    "housou": {
        title: "放送部　校内装飾 テーマソングメドレー",
        image: "festival6/3校内-放送部.png",
        description: "放送室から各クラスのテーマソングをメドレーにしてお届けします"
    },

    "ESS": {
        title: "ESS部 展示 大商の先生を英語で紹介しよう！",
        image: "festival7/4展示-ESS部.jpg",
        description: "大商の先生を英語で紹介します。是非見に来てください。(^^)"
    },

    "kokusai": {
        title: "国際教育推進委員会 展示 オーストラリア異文化体験",
        image: "festival7/4展示-国際教育.jpeg",
        description: "オーストラリア　メルボルンにある姉妹校で体験した内容を発表します。"
    },

    "science": {
        title: "科学研究部 展示 虹色の化石を発見！",
        image: "festival6/4展示-科学研究部.png",
        description: "毎年好評の「魔法の眼鏡」、今年はAB棟渡り廊下の3階ガラス面に出現！"
    },

     "photo": {
        title: "写真部　展示　キョウメイ",
        image: "festival7/4展示-写真部.png",
        description: "ファインダーが見た世界と、僕らの心が「共鳴」した瞬間をお届け。"
    },   

    "shodou": {
        title: "書道部　展示　書道部",
        image: "festival7/4展示-書道部.jpg",
        description: "全身を使った創作と半年間練習した臨書、気韻生動を感じてもらえたら幸いです。"
    },

    "shodou2": {
        title: "書道　展示　書道授業作品",
        image: "festival6/4展示-書道授業作品.jpg",
        description: "書道選択者の授業作品を展示いたします。多彩な書表現をお楽しみください！"
    },

    "information2": {
        title: "情報処理研究部　展示　ゲームとVR体験",
        image: "festival7/4展示-情報処理研究部.png",
        description: "部員が作ったゲームやVRゴーグルを使用した体験、制作した作品の展示を行なっています！ぜひ来てください。"
    },

    "tosho": {
        title: "図書部　展示　図書部の日常",
        image: "festival6/4展示-図書部.png",
        description: "図書館の魅力を伝えるために活動している私たちの日常をご紹介します！"
    },

    "bijutu": {
        title: "美術部　展示　美術部展",
        image: "festival7/4展示-美術部.jpg",
        description: "美術部員が制作した大作を展示します。"
    },

    "bijutu2": {
        title: "美術 展示　美術授業作品展示",
        image: "festival7/4展示-美術授業作品.jpg",
        description: "美術の授業で制作された作品から、選ばれし秀作を展示します。"
    },

    "manken": {
        title: "漫画研究部 展示 オタクールジャパン",
        image: "festival7/4展示-漫画研究部.jpg",
        description: "部員の頑張りと趣味趣向が出ていると思います！ぜひ見に来てください！"
    },

    "TCG": {
        title: "TCG部 体験 ポケカとデュエマのトーナメント大会！",
        image: "festival6/5体験-TCG部.png",
        description: "ポケカとデュエマのトーナメント大会を開催します！皆さん是非来て下さい！"
    },


    


    
};



// ============================================================
// 現在の状態
// ============================================================

let mapChangeId = 0;


// ============================================================
// 地図画像の表示情報を取得
// ============================================================

// ============================================================
// 地図画像の表示情報を取得
// ============================================================

function getImageInfo() {

    if (
        !map.complete ||
        !map.naturalWidth ||
        !map.naturalHeight
    ) {

        return {
            scaleX: 1,
            scaleY: 1,
            offsetX: 0,
            offsetY: 0
        };

    }


    const container =
        map.parentElement;


    const containerWidth =
        container.clientWidth;


    /*
        元画像のサイズ
    */

    const naturalWidth =
        map.naturalWidth;

    const naturalHeight =
        map.naturalHeight;


    /*
        横幅を基準にした場合の高さ
    */

    const widthScale =
        containerWidth /
        naturalWidth;


    const widthBasedHeight =
        naturalHeight *
        widthScale;


    /*
        画面の高さを基準にして
        あまりにも縦長にならないようにする
    */

    const maxHeight =
        Math.max(
            window.innerHeight * 0.8,
            500
        );


    let scale;


    /*
        横幅いっぱいで表示して
        高すぎる場合は縮小
    */

    if (
        widthBasedHeight > maxHeight
    ) {

        scale =
            maxHeight /
            naturalHeight;

    }

    else {

        scale =
            widthScale;

    }


    const renderedWidth =
        naturalWidth *
        scale;


    const renderedHeight =
        naturalHeight *
        scale;


    /*
        コンテナの高さを
        実際の画像サイズにする
    */

    container.style.height =
        renderedHeight + "px";


 // ▼▼▼ ここを追加 ▼▼▼
    // 画像が横幅いっぱいにならない場合、
    // 余った分の半分だけ右にずらして中央寄せにする

    const offsetX =
        (containerWidth - renderedWidth) / 2;
    // ▲▲▲ ここまで追加 ▲▲▲


    map.style.width =
        renderedWidth + "px";

    map.style.height =
        renderedHeight + "px";

    // ▼ 追加：画像自体もoffsetX分だけ右にずらす
    map.style.left =
        offsetX + "px";


    return {

        scaleX: scale,

        scaleY: scale,

        offsetX: offsetX, // ← 0 から offsetX に変更

        offsetY: 0
    };

}



// ============================================================
// 文化祭クリック範囲を消す
// ============================================================

function clearClassroomAreas() {

    classroomLayer.innerHTML = "";

}



// ============================================================
// 建物の階選択肢を作る
// ============================================================

function createFloorOptions(
    selectedBuilding
) {

    floor.innerHTML = `
        <option value="">
            階を選択
        </option>
    `;


    if (
        !selectedBuilding ||
        !floors[selectedBuilding]
    ) {

        return;

    }


    const floorCount =
        floors[selectedBuilding];


    for (
        let i = 1;
        i <= floorCount;
        i++
    ) {

        const option =
            document.createElement(
                "option"
            );


        option.value =
            String(i);


        option.textContent =
            i + "階";


        floor.appendChild(
            option
        );

    }

}



// ============================================================
// 建物変更
// ============================================================

map.addEventListener(
    "load",
    function () {

        const thisChangeId =
            mapChangeId;


        // 画像のレイアウト確定を待つ
        requestAnimationFrame(
            function () {

                requestAnimationFrame(
                    function () {

                        if (
                            thisChangeId !==
                            mapChangeId
                        ) {

                            return;

                        }


                        setupCurrentMap(
                            thisChangeId
                        );

                    }
                );

            }
        );

    }
);



// ============================================================
// 階変更
// ============================================================

floor.addEventListener(
    "change",
    function () {

        const selectedBuilding =
            building.value;

        const selectedFloor =
            floor.value;


        clearClassroomAreas();


        if (
            !selectedBuilding ||
            !selectedFloor
        ) {

            map.src = "";

            return;

        }


        changeMap(
            selectedBuilding,
            selectedFloor
        );

    }
);



// ============================================================
// 地図ファイル名を取得
// ============================================================
function getMapFile(
    selectedBuilding,
    selectedFloor
) {

    const floorNum =
        Number(selectedFloor);

    // AB館の3・4・5階だけ FAB◯F.png を使う
    if (
        selectedBuilding === "AB" &&
        (floorNum === 3 || floorNum === 4 || floorNum === 5)
    ) {

        return "FAB" + selectedFloor + "F.png";

    }

    return (
        selectedBuilding +
        selectedFloor +
        "F.png"
    );

}
// ============================================================
// 地図を変更
// ============================================================

function changeMap(
    selectedBuilding,
    selectedFloor
) {

    const thisChangeId =
        ++mapChangeId;


    const fileName =
        getMapFile(
            selectedBuilding,
            selectedFloor
        );


    clearClassroomAreas();


    const currentFile =
        map.src
            ? map.src.split("/").pop()
            : "";


    // 同じ画像がすでに表示されている場合

    if (
        currentFile === fileName &&
        map.complete &&
        map.naturalWidth > 0
    ) {

        requestAnimationFrame(
            function () {

                setupCurrentMap(
                    thisChangeId
                );

            }
        );

        return;

    }


    // 新しい画像を読み込む

    map.src =
        fileName;

}



// ============================================================
// 地図読み込み完了
// ============================================================

map.addEventListener(
    "load",
    function () {

        const thisChangeId =
            mapChangeId;


        requestAnimationFrame(
            function () {

                if (
                    thisChangeId !==
                    mapChangeId
                ) {

                    return;

                }


                setupCurrentMap(
                    thisChangeId
                );

            }
        );

    }
);



// ============================================================
// 現在の地図をセットアップ
// ============================================================

function setupCurrentMap(
    thisChangeId
) {

    if (
        thisChangeId !==
        mapChangeId
    ) {

        return;

    }


    if (
        !map.complete ||
        !map.naturalWidth
    ) {

        return;

    }


    /*
        先に画像の表示サイズを確定
    */

    getImageInfo();


    /*
        そのあと文化祭クリック範囲を作る
    */

    createClassroomAreas();

const currentFile =
        map.src.split("/").pop();

    if (currentFile === "AB1F.png") {

        openStallModal();

    }

}



// ============================================================
// 文化祭クリック範囲作成
// ============================================================

function createClassroomAreas() {

    clearClassroomAreas();


    if (
        !map.complete ||
        !map.naturalWidth
    ) {

        return;

    }


    const currentFile =
        map.src
            .split("/")
            .pop();


    let selectedBuilding =
        building.value;


    let selectedFloor =
        floor.value;


    // ============================================================
    // 模擬店マップ（test.png）は
    // 新館6階の模擬店エリアをそのまま使う
    // ============================================================

    if (
        currentFile === "test.png"
    ) {

        selectedBuilding = "S";

        selectedFloor = "6";

    }


    if (
        !selectedBuilding ||
        !selectedFloor
    ) {

        return;

    }


    const info =
        getImageInfo();


    Object.keys(
        classroomAreas
    ).forEach(
        function (key) {

            const room =
                classroomAreas[key];


            // 建物が違う場合

            if (
                String(room.building) !==
                String(selectedBuilding)
            ) {

                return;

            }


            // 階が違う場合

            if (
                String(room.floor) !==
                String(selectedFloor)
            ) {

                return;

            }


            // 紹介情報がない場合

            if (
                !festivalInfo[key]
            ) {

                return;

            }


            const area =
                document.createElement(
                    "div"
                );


            area.className =
                "classroom-area";


            area.dataset.room =
                key;


            // =================================================
            // 位置
            // =================================================

            area.style.left =
                (
                    info.offsetX +
                    room.x *
                    info.scaleX
                ) + "px";


            area.style.top =
                (
                    info.offsetY +
                    room.y *
                    info.scaleY
                ) + "px";


            // =================================================
            // 大きさ
            // =================================================

            area.style.width =
                (
                    room.width *
                    info.scaleX
                ) + "px";


            area.style.height =
                (
                    room.height *
                    info.scaleY
                ) + "px";


            // =================================================
            // クリック
            // =================================================

            area.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    openFestivalModal(
                        key
                    );

                }
            );


            classroomLayer.appendChild(
                area
            );

        }
    );

}



// ============================================================
// 文化祭ポップアップを開く
// ============================================================

function openFestivalModal(key) {

    const info =
        festivalInfo[key];


    if (
        !info
    ) {

        return;

    }


    const modal =
        document.getElementById(
            "festival-modal"
        );


    const title =
        document.getElementById(
            "festival-title"
        );


    const image =
        document.getElementById(
            "festival-image"
        );


    const imageContainer =
        document.getElementById(
            "festival-image-container"
        );


    const description =
        document.getElementById(
            "festival-description"
        );



    
    // ========================================================
    // タイトル
    // ========================================================

    title.textContent =
        info.title ||
        key;


    // ========================================================
    // 紹介文
    // ========================================================

    description.textContent =
        info.description ||
        "";


    // ========================================================
    // 画像
    // ========================================================

    if (
        info.image
    ) {

        image.src =
            info.image;


        image.alt =
            info.title ||
            "文化祭企画";


        imageContainer.style.display =
            "block";

    }

    else {

        image.src =
            "";

        imageContainer.style.display =
            "none";

    }


    // ========================================================
    // ポップアップ表示
    // ========================================================

    modal.classList.add(
        "show"
    );

}

// ============================================================
// 模擬店マップポップアップ
// ============================================================

function openStallModal() {

    const modal =
        document.getElementById("stall-modal");

    if (!modal) return;

    modal.classList.add("show");

}


function closeStallModal() {

    const modal =
        document.getElementById("stall-modal");

    if (!modal) return;

    modal.classList.remove("show");

}


function goToStallMap() {

    closeStallModal();

    // 建物・階の仕組みとは別枠の画像なので
    // マーカーと教室クリック範囲は消しておく

    ++mapChangeId;

    clearClassroomAreas();

    map.src = "test.png";

}

// ============================================================
// 文化祭ポップアップを閉じる
// ============================================================

function closeFestivalModal() {

    const modal =
        document.getElementById(
            "festival-modal"
        );


    if (
        !modal
    ) {

        return;

    }


    modal.classList.remove(
        "show"
    );

}



// ============================================================
// ポップアップ外側クリック
// ============================================================

const festivalModal =
    document.getElementById(
        "festival-modal"
    );


if (
    festivalModal
) {

    festivalModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                festivalModal
            ) {

                closeFestivalModal();

            }

        }
    );

}



// ============================================================
// ESCでポップアップを閉じる
// ============================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeFestivalModal();

        }

    }
);



// ============================================================
// 画面サイズ変更
// ============================================================

window.addEventListener(
    "resize",
    function () {

        if (
            !map.complete ||
            !map.naturalWidth
        ) {

            return;

        }


        getImageInfo();


        createClassroomAreas();

    }
);



// ============================================================
// 初期化
// ============================================================

// 目的地一覧を作成



// ============================================================
// 初期状態
//
// AB館
// ↓
// 1階
// ↓
// AB1F.png
// ============================================================

building.value =
    "AB";


// 階選択肢を作成

createFloorOptions(
    "AB"
);


// 1階を選択

floor.value =
    "1";


// AB1F.pngを表示

changeMap(
    "AB",
    "1"
);
