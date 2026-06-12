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

const buildingFloors = {

    S:5,      // 新館
    AB:5,     // AB館
    G:5       // グラウンド側

};




// =====================
// 要素取得
// =====================

const map =
document.getElementById("map");


const canvas =
document.getElementById("routeCanvas");


const ctx =
canvas.getContext("2d");






// =====================
// 建物選択
// =====================

function showFloors(){


    const building =
    document.getElementById("building").value;



    const floor =
    document.getElementById("floor");



    // 一旦消す

    floor.innerHTML = "";



    // 初期表示

    let first =
    document.createElement("option");


    first.value = "";

    first.textContent =
    "階を選択";


    floor.appendChild(first);




    if(building === ""){
        return;
    }






    // 階を追加

    for(let i = 1; i <= buildingFloors[building]; i++){


        let option =
        document.createElement("option");



        option.value = i;



        option.textContent =
        i + "階";



        floor.appendChild(option);

    }



}









// =====================
// 階選択
// =====================

function selectFloor(){



    const building =
    document.getElementById("building").value;



    const floor =
    document.getElementById("floor").value;




    if(
        building === "" ||
        floor === ""
    ){

        return;

    }




    let file =
    building + floor + "F.png";



    console.log(file);



    changeFloor(file);


}









// =====================
// 画像変更
// =====================

function changeFloor(file){


    map.src = file;


}









// =====================
// Canvasサイズ調整
// =====================

map.onload = function(){


    canvas.width =
    map.clientWidth;


    canvas.height =
    map.clientHeight;


};









// =====================
// クリック座標
// =====================

map.onclick = function(e){


    let x =
    e.offsetX;


    let y =
    e.offsetY;




    console.log(
        x,
        y
    );



    document
    .getElementById("coordinate")
    .textContent =
    `X:${x} Y:${y}`;


};









// =====================
// ルート表示
// =====================

function drawRoute(){


    const start =
    document.getElementById("start").value;



    const goal =
    document.getElementById("goal").value;




    if(
        !start ||
        !goal
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





    const sx =
    locations[start].x / 3186 *
    canvas.width;


    const sy =
    locations[start].y / 2088 *
    canvas.height;



    const gx =
    locations[goal].x / 3186 *
    canvas.width;


    const gy =
    locations[goal].y / 2088 *
    canvas.height;




    ctx.strokeStyle = "red";

    ctx.lineWidth = 8;


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
