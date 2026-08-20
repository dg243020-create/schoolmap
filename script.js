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

    "31": {
        building: "S",
        floor: "2",
        x: 720,
        y: 1438,
        width: 426,
        height: 435
    },

    "32": {
        building: "S",
        floor: "2",
        x: 723,
        y: 356,
        width: 432,
        height: 364
    },

    "33": {
        building: "S",
        floor: "2",
        x: 726,
        y: 0,
        width: 432,
        height: 364
    },

    "34": {
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

    "36": {
        building: "AB",
        floor: "3",
        x: 2667,
        y: 646,
        width: 393,
        height: 355
    },

    "37": {
        building: "AB",
        floor: "3",
        x: 2267,
        y: 646,
        width: 393,
        height: 355
    },

    "38": {
        building: "AB",
        floor: "3",
        x: 1870,
        y: 646,
        width: 393,
        height: 355
    },

    "39": {
        building: "AB",
        floor: "3",
        x: 1477,
        y: 646,
        width: 393,
        height: 355
    },

    "310": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 1180,
        width: 348,
        height: 400
    },

    "311": {
        building: "AB",
        floor: "3",
        x: 1,
        y: 790,
        width: 348,
        height: 400
    },

    "312": {
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
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "12": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "13": {
        title: "1-3 体験 ちいかわたちの日常",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "14": {
        title: "1-4 体験 人力マリオカート",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "15": {
        title: "1-5 体験 縁日",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "16": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "17": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "18": {
        title: "1-8 体験 1年8組の恐怖地帯",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "19": {
        title: "1-9 体験 お化け屋敷",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "110": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "111": {
        title: "1-11 体験 急げ！恐怖の部屋から緊急脱出！",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "112": {
        title: "1-12 体験 縁日",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "113": {
        title: "1-13 体験 ストラックアウト",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "114e": {
        title: "1-14 体験 今日好きになりました。文化祭編",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "114p": {
        title: "1-14 パフォーマンス ダンスパラダイス1-14",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "115": {
        title: "1-5 体験 学校の怪談",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "116": {
        title: "1-16 モンキー縁日",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },


    // --------------------------------------------------------
    // 2年
    // --------------------------------------------------------

    "21": {
        title: "2-1 展示 Save Our Blue ～私たちがつなぐ、未来の海～",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "22": {
        title: "2-2 パフォーマンス ARASHI",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "23": {
        title: "2-3 体験 トモニ、全集中！",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "24": {
        title: "2-4 体験 Have a nice 縁日！！",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "25": {
        title: "2-5 体験 MISSION！！縁日を楽しめ",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "26": {
        title: "2-6 体験 ドールルーム",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "27": {
        title: "2-7 勝つか、散るか、人生逆転カジノ",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "28": {
        title: "2-8 パフォーマンス 川口と愉快な仲間たち",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "29": {
        title: "なんもなし",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "210": {
        title: "2-10 体験 「カラダ探し」",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "211": {
        title: "2-11 体験 ディズニーハロウィンのフォトスポット",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "212": {
        title: '2-12 パフォーマンス "D"スデ～皆にんきもの～',
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "213": {
        title: "2-13 パフォーマンス urabemax",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "214": {
        title: "2-14 体験 Daisho Disneyland 2-14",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },


    // --------------------------------------------------------
    // 3年
    // --------------------------------------------------------

    "31e": {
        title: "3-1 おりがみワークショップ&ラリー",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "31s": {
        title: '3-1 3-5 模擬店 宿命の「夏色」ドリンク ～青春と奇跡の味わい～',
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "32e": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "32s": {
        title: "3-2 模擬店 理系が作る複雑な豚キムチ",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "33p": {
        title: "3-3 パフォーマンス 若原の野望 Vol.2",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "33s": {
        title: "3-3 模擬店 油に飛び込め！3-3！！",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "34t": {
        title: "3-4 展示 おもちゃばこ",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "34s": {
        title: "3-4 模擬店 いのちのからあげ",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "35": {
        title: "3-5 校内装飾 カラフルパラソルワンダフル",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "36": {
        title: "3-6 演劇 3-6STORY",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "37p": {
        title: "3-7 パフォーマンス ３－７ LiveLive",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "37s": {
        title: "3-7 模擬店 Cheese!Cheese!",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "38": {
        title: "3-8 パフォーマンス 櫻井Family",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "38s": {
        title: "3-8 模擬店 ハッピーポテト",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "39p": {
        title: "3-9 パフォーマンス タピオカ帝国",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "39s": {
        title: "3-9 模擬店 坊主　せんべい＝たません",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "310": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "311p": {
        title: "3-11 パフォーマンス まさオンズとゆかいな仲間たち",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "311s": {
        title: "3-11 模擬店 おいし～い焼きバナナ",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    },

    "312p1": {
        title: "1-2 体験 はなひらり、ちょうひらり",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "312p2": {
        title: "3-12 パフォーマンス Final Stage～商業科の軌跡～",
        image: "festival/1-1.jpg",
        description: "ここに1-2の文化祭企画の説明を書きます。"
    },

    "312s": {
        title: "3-12 模擬店 とりま焼き鳥",
        image: "festival/1-1.jpg",
        description: "ここに1-1の文化祭企画の説明を書きます。"
    }

};



// ============================================================
// 現在の状態
// ============================================================

let currentPlace = null;



// ============================================================
// 画像情報
// ============================================================

function getImageInfo() {

    const rect =
        map.getBoundingClientRect();


    const naturalWidth =
        map.naturalWidth;

    const naturalHeight =
        map.naturalHeight;


    if (
        !naturalWidth ||
        !naturalHeight
    ) {

        return {

            scaleX: 1,
            scaleY: 1,

            offsetX: 0,
            offsetY: 0

        };

    }


    const scale =
        Math.min(

            rect.width / naturalWidth,

            rect.height / naturalHeight

        );


    return {

        scaleX: scale,

        scaleY: scale,

        offsetX:
            (rect.width -
                naturalWidth * scale) / 2,

        offsetY:
            (rect.height -
                naturalHeight * scale) / 2

    };

}



// ============================================================
// マーカー消去
// ============================================================

function clearMarker() {

    marker.style.display = "none";

    marker.classList.remove(
        "redMarker"
    );

}



// ============================================================
// 文化祭クリック範囲消去
// ============================================================

function clearClassroomAreas() {

    classroomLayer.innerHTML = "";

}



// ============================================================
// 階の選択肢を作る
// ============================================================

building.addEventListener(
    "change",
    function () {

        floor.innerHTML = `
            <option value="">
                階を選択
            </option>
        `;


        const b =
            building.value;


        clearMarker();

        clearClassroomAreas();


        if (!b) {

            map.src = "";

            return;

        }


        for (
            let i = 1;
            i <= floors[b];
            i++
        ) {

            const option =
                document.createElement(
                    "option"
                );


            option.value = i;

            option.textContent =
                i + "階";


            floor.appendChild(
                option
            );

        }


        // Sだけ特殊階を追加

        if (b === "S") {

            const option =
                document.createElement(
                    "option"
                );


            option.value = "1.5";

            option.textContent =
                "1階上";


            floor.appendChild(
                option
            );

        }

    }
);



// ============================================================
// 階変更
// ============================================================

floor.addEventListener(
    "change",
    function () {

        const b =
            building.value;

        const f =
            floor.value;


        clearMarker();

        clearClassroomAreas();


        if (!b || !f) {

            map.src = "";

            return;

        }


        let file;


        if (
            specialFloors[b] &&
            specialFloors[b][f]
        ) {

            file =
                specialFloors[b][f];

        }

        else {

            file =
                b +
                f +
                "F.png";

        }


        map.src = file;

    }
);



// ============================================================
// 目的地プルダウン作成
// ============================================================

function createDestinationOptions() {

    destination.innerHTML = `
        <option value="">
            目的地を選択
        </option>
    `;


    Object.keys(destinations)
        .forEach(key => {

            const place =
                destinations[key];


            const option =
                document.createElement(
                    "option"
                );


            option.value = key;


            option.textContent =
                place.name || key;


            destination.appendChild(
                option
            );

        });

}



// ============================================================
// 目的地表示
// ============================================================

function showDestination() {

    const key =
        destination.value;


    if (!key) {

        currentPlace = null;

        clearMarker();

        return;

    }


    currentPlace =
        destinations[key];


    if (!currentPlace) {

        return;

    }


    building.value =
        currentPlace.building;


    // 建物変更処理

    building.dispatchEvent(
        new Event("change")
    );


    floor.value =
        currentPlace.floor;


    // 階変更処理

    floor.dispatchEvent(
        new Event("change")
    );

}



// ============================================================
// 画像読み込み完了
// ============================================================

map.addEventListener(
    "load",
    function () {

        clearMarker();

        clearClassroomAreas();


        // 文化祭範囲作成

        createClassroomAreas();


        if (!currentPlace) {

            return;

        }


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
            currentFile === targetFile
        ) {

            showMarker(
                currentPlace
            );

        }

    }
);



// ============================================================
// 地図ファイル名取得
// ============================================================

function getMapFile(
    buildingName,
    floorName
) {

    if (
        buildingName === "S" &&
        floorName === "1.5"
    ) {

        return "S11F.png";

    }


    return (
        buildingName +
        floorName +
        "F.png"
    );

}



// ============================================================
// マーカー表示
// ============================================================

function showMarker(place) {

    if (!map.naturalWidth) {

        return;

    }


    const info =
        getImageInfo();


    const mapRect =
        map.getBoundingClientRect();


    const parentRect =
        map.parentElement
            .getBoundingClientRect();


    const left =
        mapRect.left -
        parentRect.left +
        info.offsetX +
        place.x *
        info.scaleX;


    const top =
        mapRect.top -
        parentRect.top +
        info.offsetY +
        place.y *
        info.scaleY;


    marker.style.left =
        left + "px";


    marker.style.top =
        top + "px";


    marker.classList.remove(
        "redMarker"
    );


    const file =
        map.src
            .split("/")
            .pop();


    // 特定の地図では赤マーカー

    if (

        file === "S1F.png" ||

        file === "AB1F.png" ||

        file === "AB6F.png"

    ) {

        marker.classList.add(
            "redMarker"
        );

    }


    marker.style.display =
        "block";

}



// ============================================================
// 文化祭クリック範囲を作る
// ============================================================

function createClassroomAreas() {

    clearClassroomAreas();


    if (!map.naturalWidth) {

        return;

    }


    const b =
        building.value;


    const f =
        floor.value;


    if (!b || !f) {

        return;

    }


    const info =
        getImageInfo();


    Object.keys(classroomAreas)
        .forEach(key => {

            const room =
                classroomAreas[key];


            // 現在の建物・階だけ

            if (
                room.building !== b ||
                room.floor !== f
            ) {

                return;

            }


            // 文化祭情報がなければ
            // クリック範囲を作らない

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

        });

}



// ============================================================
// 文化祭ポップアップ
// ============================================================

function openFestivalModal(key) {

    const info =
        festivalInfo[key];


    if (!info) {

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


    title.textContent =
        info.title || key;


    description.textContent =
        info.description || "";


    // 画像あり

    if (info.image) {

        image.src =
            info.image;


        image.alt =
            info.title ||
            "文化祭企画";


        imageContainer.style.display =
            "block";

    }

    // 画像なし

    else {

        image.src = "";

        imageContainer.style.display =
            "none";

    }


    modal.classList.add(
        "show"
    );

}



// ============================================================
// 文化祭ポップアップを閉じる
// ============================================================

function closeFestivalModal() {

    const modal =
        document.getElementById(
            "festival-modal"
        );


    modal.classList.remove(
        "show"
    );

}



// ============================================================
// モーダル外側クリックで閉じる
// ============================================================

document
    .getElementById("festival-modal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeFestivalModal();

            }

        }
    );



// ============================================================
// ESCキーで閉じる
// ============================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
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

        if (!map.complete) {

            return;

        }


        createClassroomAreas();


        if (currentPlace) {

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
                currentFile === targetFile
            ) {

                showMarker(
                    currentPlace
                );

            }

        }

    }
);



// ============================================================
// 初期化
// ============================================================

createDestinationOptions();
