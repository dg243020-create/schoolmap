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

    S: 5,

    AB: 6,

    G: 4

};


// ============================================================
// 特殊な階
// ============================================================

const specialFloors = {

    S: {

        "1.5": "S11F.png"

    }

};



// ============================================================
// HTML要素
// ============================================================

const building =
    document.getElementById("building");

const floor =
    document.getElementById("floor");

const destination =
    document.getElementById("destination");

const map =
    document.getElementById("map");

const marker =
    document.getElementById("marker");

const classroomLayer =
    document.getElementById("classroom-layer");



// ============================================================
// ★ 目的地
// ============================================================
//
// ここに目的地を追加してください。
//
// x / y は元画像の座標です。
//
// ============================================================

const destinations = {

    Library:{
    building:"AB",
    floor:"6",
    x:150,
    y:1000
},

Ignitionbase:{
    building:"AB",
    floor:"6",
    x:965,
    y:925
},

Studyroom:{
    building:"AB",
    floor:"6",
    x:968,
    y:461
},

Millenniumhall:{
    building:"AB",
    floor:"6",
    x:2420,
    y:1030
},

Artroom:{
    building:"AB",
    floor:"6",
    x:1750,
    y:910
},

Exerciseroom:{
    building:"AB",
    floor:"6",
    x:3200,
    y:928
},

Scienceroom:{
    building:"AB",
    floor:"5",
    x:971,
    y:792
},

Kateikaroom:{
    building:"AB",
    floor:"4",
    x:971,
    y:792
},

Shodouroom:{
    building:"AB",
    floor:"3",
    x:971,
    y:792
},

Shokuinroom:{
    building:"AB",
    floor:"2",
    x:450,
    y:930
},

Shokudou:{
    building:"AB",
    floor:"1",
    x:595,
    y:1132
},

Jimuroom:{
    building:"AB",
    floor:"1",
    x:2020,
    y:1200
},

Hokenroom:{
    building:"AB",
    floor:"1",
    x:3139,
    y:1194
},

Koudoutaiikukan:{
    building:"G",
    floor:"2",
    x:1178,
    y:1134
},

Sinkanshokuinroom:{
    building:"S",
    floor:"1",
    x:866,
    y:440
},

Musicroom:{
    building:"S",
    floor:"1",
    x:369,
    y:1122
},

Danceroom:{
    building:"S",
    floor:"1",
    x:900,
    y:1600
},

Gomishori:{
    building:"S",
    floor:"1",
    x:869,
    y:177
},

Informationroom:{
    building:"S",
    floor:"2",
    x:380,
    y:1283
},

Sinkantaiikukan:{
    building:"S",
    floor:"4",
    x:618,
    y:741
},

Juudouroom:{
    building:"G",
    floor:"1",
    x:420,
    y:1024
},

Kendouroom:{
    building:"G",
    floor:"1",
    x:1126,
    y:1466
},

TakkyuuRoom:{
    building:"G",
    floor:"1",
    x:416,
    y:1619
},

S301:{
    building:"S",
    floor:"3",
    x:1000,
    y:1700
},

S206:{
    building:"S",
    floor:"2",
    x:429,
    y:600
},
    
11:{
    building:"S",
    floor:"2",
    x:1000,
    y:956
},

12:{
    building:"S",
    floor:"3",
    x:1000,
    y:1326
},

13:{
    building:"S",
    floor:"3",
    x:1000,
    y:972
},
    
14:{
    building:"S",
    floor:"3",
    x:1000,
    y:579
},

15:{
    building:"S",
    floor:"3",
    x:1000,
    y:259
},

16:{
    building:"AB",
    floor:"5",
    x:3263,
    y:906
},

17:{
    building:"AB",
    floor:"5",
    x:2880,
    y:906
},

18:{
    building:"AB",
    floor:"5",
    x:2488,
    y:906
},

19:{
    building:"AB",
    floor:"5",
    x:2088,
    y:906
},

110:{
    building:"AB",
    floor:"5",
    x:1693,
    y:906
},

111:{
    building:"AB",
    floor:"5",
    x:156,
    y:1465
},

112:{
    building:"AB",
    floor:"5",
    x:156,
    y:1085
},

113:{
    building:"AB",
    floor:"5",
    x:156,
    y:673
},

114:{
    building:"AB",
    floor:"5",
    x:156,
    y:290
},

115:{
    building:"AB",
    floor:"5",
    x:950,
    y:261
},

116:{
    building:"AB",
    floor:"4",
    x:950,
    y:261
},

21:{
    building:"S",
    floor:"2",
    x:983,
    y:1326
},

22:{
    building:"S",
    floor:"3",
    x:429,
    y:1326
},

23:{
    building:"S",
    floor:"3",
    x:429,
    y:963
},

24:{
    building:"S",
    floor:"3",
    x:429,
    y:605
},

25:{
    building:"AB",
    floor:"4",
    x:3263,
    y:906
},

26:{
    building:"AB",
    floor:"3",
    x:950,
    y:261
},
    
27:{
    building:"AB",
    floor:"4",
    x:2880,
    y:906
},

28:{
    building:"AB",
    floor:"4",
    x:2488,
    y:906
},

29:{
    building:"AB",
    floor:"4",
    x:2088,
    y:906
},

210:{
    building:"AB",
    floor:"4",
    x:1693,
    y:906
},

211:{
    building:"AB",
    floor:"4",
    x:156,
    y:1465
},

212:{
    building:"AB",
    floor:"4",
    x:156,
    y:1085
},

213:{
    building:"AB",
    floor:"4",
    x:156,
    y:673
},

214:{
    building:"AB",
    floor:"4",
    x:156,
    y:290
},

31:{
    building:"S",
    floor:"2",
    x:1000,
    y:1700
},
    
32:{
    building:"S",
    floor:"2",
    x:1000,
    y:579
},

33:{
    building:"S",
    floor:"2",
    x:1000,
    y:259
},
    
34:{
    building:"AB",
    floor:"3",
    x:3263,
    y:906
},

35:{
    building:"AB",
    floor:"3",
    x:156,
    y:290
},
    
36:{
    building:"AB",
    floor:"3",
    x:2880,
    y:906
},

37:{
    building:"AB",
    floor:"3",
    x:2488,
    y:906
},

38:{
    building:"AB",
    floor:"3",
    x:2088,
    y:906
},

39:{
    building:"AB",
    floor:"3",
    x:1693,
    y:906
},

310:{
    building:"AB",
    floor:"3",
    x:156,
    y:1465
},

311:{
    building:"AB",
    floor:"3",
    x:156,
    y:1085
},

312:{
    building:"AB",
    floor:"3",
    x:156,
    y:673
},


    // 例
    //
    // Studyroom: {
    //
    //     name: "自習室",
    //
    //     building: "AB",
    //
    //     floor: "6",
    //
    //     x: 968,
    //
    //     y: 461
    //
    // }

};



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

    "212": {
        building: "AB",
        floor: "4",
        x: 1,
        y: 790,
        width: 348,
        height: 400
    },

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

    "32e": {
        building: "S",
        floor: "2",
        x: 723,
        y: 356,
        width: 432,
        height: 364
    },

    "33p": {
        building: "S",
        floor: "2",
        x: 726,
        y: 0,
        width: 432,
        height: 364
    },

    "34t": {
        building: "AB",
        floor: "3",
        x: 3060,
        y: 646,
        width: 393,
        height: 355
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

    "37p": {
        building: "AB",
        floor: "3",
        x: 2267,
        y: 646,
        width: 393,
        height: 355
    },

    "38p": {
        building: "AB",
        floor: "3",
        x: 1870,
        y: 646,
        width: 393,
        height: 355
    },

    "39p": {
        building: "AB",
        floor: "3",
        x: 1477,
        y: 646,
        width: 393,
        height: 355
    },

    "310p": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 1180,
        width: 348,
        height: 400
    },

    "311p": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 790,
        width: 348,
        height: 400
    },

    "312p": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 397,
        width: 348,
        height: 400
    }

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
        image: "festival6/5体験-101.pdf",
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
        image: "festival6/5体験-112.pdf",
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
        image: "festival6/5体験-203.pdf",
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
        title: "2-8 パフォーマンス 川口と愉快な仲間たち",
        image: "festival3/2パ-208.png",
        description: "全力パフォーマンスで最高の舞台を届けます！"
    },

    "29": {
        title: "2-9 パフォーマンス 9組と夏フェス",
        image: "festival2/2パ-209.jpg",
        description: "この夏1番熱いステージ！元気と勢いで会場を沸かせます！"
    },

    "210": {
        title: "2-10 体験 「カラダ探し」",
        image: "festival6/5体験-210.pdf",
        description: "この恐怖。見るだけじゃ終われない。「カラダ探し」で待っています。"
    },

    "211": {
        title: "2-11 体験 ディズニーハロウィンのフォトスポット",
        image: "festival/5体験-211.png",
        description: "ディズニーハロウィンをテーマにしたフォトスポットです。他のフォトスポットとは違う内容をお楽しみください。"
    },

    "212": {
        title: '2-12 パフォーマンス "D"スデ～皆にんきもの～',
        image: "festival2/2パ-212.jpg",
        description: "人気曲が続々登場！普段と違う姿にもご注目ください！"
    },

    "213": {
        title: "2-13 パフォーマンス urabemax",
        image: "festival2/2パ-213.jpg",
        description: "2年13組38人の個性全開で頑張ります！"
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
        title: "3-6 演劇 3-6STORY",
        image: "festival3/1演-306.png",
        description: "3年6組37名が全力でおもちゃを演じます。ぜひ見に来てください。"
    },
    
    "36t": {
        title: "3-6 模擬店 クルンジ",
        image: "festival3/1-1.jpg",
        description: "クロワッサンをカリカリに焼き上げた、韓国発祥のスイーツです"
    },  

    "37p": {
        title: "3-7 パフォーマンス ３－７ LiveLive",
        image: "festival2/2パ-307.jpg",
        description: "ユニットに分かれて全て違う系統のステージを届けます！ぜひ楽しんで見てくださいね^_^"
    },

    "37s": {
        title: "3-7 模擬店 Cheese!Cheese!",
        image: "festival3/7模擬店-307.jpg",
        description: "いろんな味の『もちもちチーズボール』食べてください__"
    },

    "38p": {
        title: "3-8 パフォーマンス 櫻井Family",
        image: "festival2/2パ-308.jpg",
        description: "みんなの心に残る最高のダンスをします。観に来てください。"
    },

    "38s": {
        title: "3-8 模擬店 ハッピーポテト",
        image: "festival3/7模擬店-308.jpg",
        description: "みんなを幸せにするハッピーポテトを販売します。食べに来てください。"
    },

    "39p": {
        title: "3-9 パフォーマンス タピオカ帝国",
        image: "festival2/2パ-309.png",
        description: "あのタピオカ帝国が帰ってくる。坊主（タピオカ）とミルクティー（女子）の調和をご覧あれ！！"
    },

    "39s": {
        title: "3-9 模擬店 坊主　せんべい＝たません",
        image: "festival2/7模擬店-309.png",
        description: "えびせん × 玉子 × ソース × マヨ ＝ 勝利 シンプルにして至高。説明不要の最強B級グルメ「たません」降臨！"
    },

    "310p": {
        title: "3-10 パフォーマンス 3年10組のたこ焼き",
        image: "festival2/2パ-310.jpg",
        description: "魂込めて踊ります。"
    },

    "310s": {
        title: "3-10 模擬店 3年10組のたこ焼き",
        image: "festival3/7模擬店-310.png",
        description: "魂込めて焼きます。"
    },

    "311p": {
        title: "3-11 パフォーマンス まさオンズとゆかいな仲間たち",
        image: "festival2/2パ-311.png",
        description: "まさオンズとゆかいな仲間たちのおもろいダンスをご覧あれ！！"
    },

    "311s": {
        title: "3-11 模擬店 おいし～い焼きバナナ",
        image: "festival/7模擬店-311.pdf",
        description: "何じゃこれ！？新食感の焼きバナナをご賞味あれ！！"
    },

    "312p": {
        title: "3-12 パフォーマンス Final Stage～商業科の軌跡～",
        image: "festival2/2パ-312.png",
        description: "3年間のダンスの集大成__焼き鳥も買ってね！"
    },

    "312s": {
        title: "3-12 模擬店 とりま焼き鳥",
        image: "festival2/7模擬店-312.png",
        description: "とりま焼き鳥__一本食べたら止まらない"
    }

};



// ============================================================
// 現在の状態
// ============================================================

let currentPlace = null;

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


    /*
        画像サイズを明示的に指定
    */

    map.style.width =
        renderedWidth + "px";

    map.style.height =
        renderedHeight + "px";


    return {

        scaleX: scale,

        scaleY: scale,

        offsetX: 0,

        offsetY: 0

    };

}



// ============================================================
// マーカーを消す
// ============================================================

function clearMarker() {

    marker.style.display = "none";

    marker.classList.remove(
        "redMarker"
    );

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


    // 新館の特殊階

    if (
        selectedBuilding === "S"
    ) {

        const option =
            document.createElement(
                "option"
            );


        option.value =
            "1.5";


        option.textContent =
            "1階上";


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


        clearMarker();

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

    // 特殊階

    if (
        specialFloors[selectedBuilding] &&
        specialFloors[selectedBuilding][selectedFloor]
    ) {

        return specialFloors[
            selectedBuilding
        ][
            selectedFloor
        ];

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


    clearMarker();

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
    

    /*
        現在の目的地が
        この階にある場合だけマーカー表示
    */

    if (
        currentPlace
    ) {

        const currentFile =
            map.src
                .split("/")
                .pop();


        const targetFile =
            getMapFile(
                currentPlace.building,
                currentPlace.floor
            );


        if (
            currentFile ===
            targetFile
        ) {

            showMarker(
                currentPlace
            );

        }

    }

}



// ============================================================
// 目的地一覧を作成
// ============================================================

function createDestinationOptions() {

    destination.innerHTML = `
        <option value="">
            目的地を選択
        </option>
    `;


    Object.keys(
        destinations
    ).forEach(
        function (key) {

            const place =
                destinations[key];


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                key;


            option.textContent =
                place.name ||
                key;


            destination.appendChild(
                option
            );

        }
    );

}



// ============================================================
// 目的地選択イベント
// ============================================================

destination.addEventListener(
    "change",
    showDestination
);



// ============================================================
// 目的地を選択
// ============================================================

function showDestination() {

    const key =
        destination.value;


    // 選択解除

    if (
        !key
    ) {

        currentPlace = null;

        clearMarker();

        return;

    }


    const place =
        destinations[key];


    if (
        !place
    ) {

        currentPlace = null;

        clearMarker();

        return;

    }


    // 座標チェック

    if (
        typeof place.x !== "number" ||
        typeof place.y !== "number"
    ) {

        currentPlace = null;

        clearMarker();

        console.warn(
            "目的地の座標が正しくありません:",
            key,
            place
        );

        return;

    }


    // ========================================================
    // 重要
    //
    // 建物変更・階変更によって currentPlace が
    // 消されないよう、最後に設定する
    // ========================================================

    const targetBuilding =
        String(place.building);

    const targetFloor =
        String(place.floor);


    // 建物が違う場合

    if (
        building.value !==
        targetBuilding
    ) {

        building.value =
            targetBuilding;


        createFloorOptions(
            targetBuilding
        );

    }


    // 階を変更

    floor.value =
        targetFloor;


    // 目的地を現在地として保存

    currentPlace =
        place;


    // 地図を変更

    changeMap(
        targetBuilding,
        targetFloor
    );

}

// ============================================================
// マーカー表示
// ============================================================

function showMarker(place) {

    if (
        !place
    ) {

        clearMarker();

        return;

    }


    if (
        !map.complete ||
        !map.naturalWidth ||
        !map.naturalHeight
    ) {

        return;

    }


    const info =
        getImageInfo();


    // 元画像の座標を
    // 現在表示されている画像上の座標へ変換

    const left =
        info.offsetX +
        place.x *
        info.scaleX;


    const top =
        info.offsetY +
        place.y *
        info.scaleY;


    marker.style.left =
        left + "px";


    marker.style.top =
        top + "px";


    // ========================================================
    // 赤マーカー対象
    // ========================================================

    const currentFile =
        map.src
            .split("/")
            .pop();


    marker.classList.remove(
        "redMarker"
    );


    if (
        currentFile === "S1F.png" ||
        currentFile === "AB1F.png" ||
        currentFile === "AB6F.png"
    ) {

        marker.classList.add(
            "redMarker"
        );

    }


    marker.style.display =
        "block";

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


    const selectedBuilding =
        building.value;


    const selectedFloor =
        floor.value;


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

    clearMarker();

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
... （残り1 KB）
