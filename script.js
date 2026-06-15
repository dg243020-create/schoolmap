// =====================
// 場所データ
// =====================

const locations = {

    entrance:{
        x:300,
        y:1800
    },

    stairs:{
        x:1600,
        y:1000
    },

    library:{
        x:2500,
        y:600
    }

};




// =====================
// 建物設定
// =====================

const floors = {

    S:6,     // 新館
    AB:6,    // AB館
    G:5      // グラウンド側

};




// =====================
// 特殊画像設定
// =====================

const specialFloors = {

    S:{
        "1.5":"S11F.png"
    }

};




// =====================
// 要素取得
// =====================

const building =
document.getElementById("building");


const floor =
document.getElementById("floor");


const map =
document.getElementById("map");


const canvas =
document.getElementById("routeCanvas");


const ctx =
canvas.getContext("2d");









// =====================
// 建物変更
// =====================

building.addEventListener(
"change",
()=>{


    floor.innerHTML =
    "";



    let first =
    document.createElement("option");


    first.value="";

    first.textContent =
    "階を選択";


    floor.appendChild(first);



    let value =
    building.value;



    if(value===""){
        return;
    }






    // 通常階

    for(
        let i=1;
        i<=floors[value];
        i++
    ){


        let option =
        document.createElement("option");


        option.value =
        i;


        option.textContent =
        i+"階";


        floor.appendChild(option);

    }





    // 新館だけ1階上を追加

    if(value==="S"){


        let option =
        document.createElement("option");


        option.value =
        "1.5";


        option.textContent =
        "1階上";


        floor.appendChild(option);


    }



});











// =====================
// 階変更
// =====================

floor.addEventListener(
"change",
()=>{


    let b =
    building.value;


    let f =
    floor.value;



    if(
        b==="" ||
        f===""
    ){
        return;
    }






    let filename;



    // 特殊階チェック

    if(
        specialFloors[b] &&
        specialFloors[b][f]
    ){

        filename =
        specialFloors[b][f];

    }
    else{

        filename =
        b + f + "F.png";

    }





    console.log(
        "変更:",
        filename
    );



    map.src =
    filename;



});









// =====================
// 画像読み込み
// =====================

map.onload = ()=>{


    canvas.width =
    map.clientWidth;


    canvas.height =
    map.clientHeight;



};









// =====================
// 座標表示
// =====================

map.onclick =
function(e){


    let x =
    e.offsetX;


    let y =
    e.offsetY;



    document
    .getElementById("coordinate")
    .textContent =
    `X:${x} Y:${y}`;



    console.log(
        "X:",
        x,
        "Y:",
        y
    );


};









// =====================
// 経路表示
// =====================

function drawRoute(){



    let start =
    document.getElementById("start").value;



    let goal =
    document.getElementById("goal").value;





    if(
        start==="" ||
        goal===""
    ){

        alert(
        "現在地と目的地を選択してください"
        );

        return;

    }






    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );







    let sx =
    locations[start].x / 3186 *
    canvas.width;


    let sy =
    locations[start].y / 2088 *
    canvas.height;





    let gx =
    locations[goal].x / 3186 *
    canvas.width;


    let gy =
    locations[goal].y / 2088 *
    canvas.height;







    ctx.strokeStyle =
    "red";


    ctx.lineWidth =
    8;



    ctx.beginPath();


    ctx.moveTo(
        sx,
        sy
    );


    ctx.lineTo(
        gx,
        gy
    );


    ctx.stroke();



}
