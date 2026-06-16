// =====================
// 建物設定
// =====================

const floors = {

    S:6,
    AB:6,
    G:5

};


const specialFloors = {

    S:{
        "1.5":"S11F.png"
    }

};



// =====================
// 要素
// =====================

const building =
document.getElementById("building");


const floor =
document.getElementById("floor");


const map =
document.getElementById("map");


const marker =
document.getElementById("marker");




// =====================
// 目的地データ
// =====================

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
    x:302,
    y:402
},


Studyroom:{
    building:"AB",
    floor:"6",
    x:300,
    y:291
},


Millenniumhall:{
    building:"AB",
    floor:"6",
    x:753,
    y:470
},


Artroom:{
    building:"AB",
    floor:"6",
    x:538,
    y:435
},


Exerciseroom:{
    building:"AB",
    floor:"6",
    x:985,
    y:435
}


};








// =====================
// 実際の画像位置取得
// =====================

function getImageInfo(){


    const rect =
    map.getBoundingClientRect();



    const scaleX =
    rect.width / map.naturalWidth;


    const scaleY =
    rect.height / map.naturalHeight;



    return {

        left:rect.left,

        top:rect.top,

        scaleX:scaleX,

        scaleY:scaleY

    };

}










// =====================
// 建物変更
// =====================

building.onchange=function(){



    floor.innerHTML =
    `
    <option value="">
    階を選択
    </option>
    `;



    let b =
    building.value;



    if(!b)return;



    for(
        let i=1;
        i<=floors[b];
        i++
    ){


        let option =
        document.createElement("option");


        option.value=i;

        option.textContent =
        i+"階";


        floor.appendChild(option);

    }




    if(b==="S"){


        let option =
        document.createElement("option");


        option.value="1.5";

        option.textContent =
        "1階上";


        floor.appendChild(option);


    }


};









// =====================
// 階変更
// =====================

floor.onchange=function(){


    let b =
    building.value;


    let f =
    floor.value;



    if(!b || !f)return;



    let file;



    if(
        specialFloors[b] &&
        specialFloors[b][f]
    ){

        file =
        specialFloors[b][f];

    }
    else{

        file =
        b+f+"F.png";

    }



    // マーカー消去

    marker.style.display="none";



    map.src=file;


};









// =====================
// クリック座標
// =====================

map.onclick=function(e){


    const info =
    getImageInfo();



    let x =
    (e.clientX - info.left)
    /
    info.scaleX;



    let y =
    (e.clientY - info.top)
    /
    info.scaleY;




    document
    .getElementById("coordinate")
    .textContent =
    `X:${Math.round(x)} Y:${Math.round(y)}`;



};









// =====================
// 目的地表示
// =====================

function showDestination(){


    let key =
    document
    .getElementById("destination")
    .value;



    if(!key)return;



    let p =
    destinations[key];



    building.value =
    p.building;


    building.onchange();



    floor.value =
    p.floor;


    // 画像読み込み後表示

    map.onload=function(){

        showMarker(p);

    };


    floor.onchange();


}









// =====================
// マーカー表示
// =====================

function showMarker(p){


    const info =
    getImageInfo();




    let x =
    p.x * info.scaleX;


    let y =
    p.y * info.scaleY;





    marker.style.left =
    x + "px";



    marker.style.top =
    y + "px";



    marker.style.display =
    "block";


}
