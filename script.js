// ===============================
// 場所データ
// ===============================

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




// ===============================
// 建物データ
// ===============================

const buildings = {

    S:5,     // 新館
    AB:5,    // AB館
    G:5      // グラウンド側

};




// ===============================
// HTML取得
// ===============================

const map =
document.getElementById("map");


const canvas =
document.getElementById("routeCanvas");


const ctx =
canvas.getContext("2d");






// ===============================
// 建物を選択した時
// ===============================

function showFloors(){


    const building =
    document.getElementById("building").value;



    const floor =
    document.getElementById("floor");



    // 階選択をリセット

    floor.innerHTML =
    `
    <option value="">
    階を選択
    </option>
    `;



    if(building === ""){
        return;
    }




    // 1〜5階を作成

    for(let i = 1; i <= buildings[building]; i++){


        const option =
        document.createElement("option");



        option.value =
        building + i + "F.png";



        option.textContent =
        i + "階";



        floor.appendChild(option);

    }


}







// ===============================
// 階を選択した時
// ===============================

function selectFloor(){


    const file =
    document.getElementById("floor").value;



    if(file){

        changeFloor(file);

    }


}







// ===============================
// 画像変更
// ===============================

function changeFloor(file){


    map.src = file;



}







// ===============================
// 画像ロード後 Canvas調整
// ===============================

map.onload = ()=>{


    canvas.width =
    map.clientWidth;


    canvas.height =
    map.clientHeight;


};








// ===============================
// 地図クリック座標表示
// ===============================

map.onclick = e => {


    const x =
    e.offsetX;


    const y =
    e.offsetY;



    console.log(
        "X:",
        x,
        "Y:",
        y
    );



    document
    .getElementById("coordinate")
    .textContent =
    `X:${x} Y:${y}`;


};









// ===============================
// 経路表示
// ===============================

function drawRoute(){



    const start =
    document.getElementById("start").value;



    const goal =
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
