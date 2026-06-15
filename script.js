// =====================
// 設定
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



let currentDestination = null;





// =====================
// 建物変更
// =====================

building.onchange = ()=>{


    floor.innerHTML =
    `<option value="">階を選択</option>`;



    let b =
    building.value;


    if(!b)return;



    for(let i=1;i<=floors[b];i++){


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

floor.onchange = ()=>{


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



    // マーカー消す

    marker.style.display="none";

    currentDestination=null;



    map.src=file;


};









// =====================
// 座標取得
// =====================

map.onclick=(e)=>{


    let pos =
    getImagePosition(e);



    document
    .getElementById("coordinate")
    .textContent =
    `X:${Math.round(pos.x)} Y:${Math.round(pos.y)}`;


};









// =====================
// 画像内座標取得
// =====================

function getImagePosition(e){


    const rect =
    map.getBoundingClientRect();



    const container =
    document
    .getElementById("map-container")
    .getBoundingClientRect();



    let imageRatio =
    Math.min(
        container.width / map.naturalWidth,
        container.height / map.naturalHeight
    );



    let imageWidth =
    map.naturalWidth * imageRatio;


    let imageHeight =
    map.naturalHeight * imageRatio;




    let offsetX =
    (container.width-imageWidth)/2;


    let offsetY =
    (container.height-imageHeight)/2;





    let x =
    (e.clientX - container.left - offsetX)
    / imageRatio;



    let y =
    (e.clientY - container.top - offsetY)
    / imageRatio;



    return {
        x:x,
        y:y
    };

}









// =====================
// 目的地
// =====================

const destinations = {


Library:{
    building:"AB",
    floor:"6",
    x:57,
    y:469
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



    currentDestination=p;



    building.value =
    p.building;


    building.onchange();



    floor.value =
    p.floor;


    floor.onchange();



    map.onload=()=>{


        showMarker(p);


    };


}










// =====================
// マーカー表示
// =====================

function showMarker(p){



    const container =
    document.getElementById("map-container");



    let ratio =
    Math.min(
        container.clientWidth / map.naturalWidth,
        container.clientHeight / map.naturalHeight
    );



    let imageWidth =
    map.naturalWidth * ratio;


    let imageHeight =
    map.naturalHeight * ratio;



    let offsetX =
    (container.clientWidth-imageWidth)/2;


    let offsetY =
    (container.clientHeight-imageHeight)/2;





    marker.style.left =

    offsetX +
    p.x * ratio
    +"px";



    marker.style.top =

    offsetY +
    p.y * ratio
    +"px";



    marker.style.display =
    "block";

}
