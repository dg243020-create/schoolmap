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
// 建物
// =====================

const buildingFloors = {

    S:5,
    AB:5,
    G:5

};



// =====================
// 要素
// =====================

const buildingSelect =
document.getElementById("building");


const floorSelect =
document.getElementById("floor");


const map =
document.getElementById("map");


const canvas =
document.getElementById("routeCanvas");


const ctx =
canvas.getContext("2d");




// =====================
// 建物変更イベント
// =====================

buildingSelect.addEventListener(
"change",
function(){


    console.log("建物変更");


    floorSelect.innerHTML =
    "";


    let defaultOption =
    document.createElement("option");


    defaultOption.value="";

    defaultOption.textContent=
    "階を選択";


    floorSelect.appendChild(
    defaultOption
    );



    let building =
    this.value;



    if(building===""){
        return;
    }



    for(
        let i=1;
        i<=buildingFloors[building];
        i++
    ){

        let option =
        document.createElement("option");


        option.value=i;


        option.textContent =
        i+"階";


        floorSelect.appendChild(
        option
        );


    }


});







// =====================
// 階変更イベント
// =====================

floorSelect.addEventListener(
"change",
function(){



    let building =
    buildingSelect.value;



    let floor =
    this.value;



    if(
        building==="" ||
        floor===""
    ){
        return;
    }



    let file =
    building + floor + "F.png";


    console.log(
    file
    );


    map.src=file;


});









// =====================
// 画像サイズ
// =====================

map.onload=function(){


    canvas.width =
    map.clientWidth;


    canvas.height =
    map.clientHeight;

};








// =====================
// 座標表示
// =====================

map.onclick=function(e){


    let x=e.offsetX;

    let y=e.offsetY;



    document
    .getElementById("coordinate")
    .textContent =
    `X:${x} Y:${y}`;


};









// =====================
// ルート
// =====================

function drawRoute(){


    let start =
    document.getElementById("start").value;


    let goal =
    document.getElementById("goal").value;



    if(!start || !goal){

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



    ctx.strokeStyle="red";

    ctx.lineWidth=8;


    ctx.beginPath();


    ctx.moveTo(sx,sy);

    ctx.lineTo(gx,gy);


    ctx.stroke();


}
