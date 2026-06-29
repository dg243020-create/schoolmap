// =====================
// 建物設定
// =====================

const floors = {
    S:5,
    AB:6,
    G:4
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
// 目的地
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
    x:356,
    y:788
},

Sinkantaiikukan:{
    building:"S",
    floor:"4",
    x:646,
    y:499
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

11:{
    building:"S",
    floor:"2",
    x:983,
    y:956
},

12:{
    building:"S",
    floor:"3",
    x:983,
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
    
/*

11:{
    building:"AB",
    floor:"5",
    x:,
    y:
},

*/
    
};

// =====================
// 現在選択
// =====================

let currentPlace = null;




// =====================
// 画像倍率
// =====================

function getImageInfo(){

    const rect =
    map.getBoundingClientRect();


    const scale =
    Math.min(
        rect.width / map.naturalWidth,
        rect.height / map.naturalHeight
    );


    return {

        scaleX:scale,
        scaleY:scale,

        offsetX:
        (rect.width -
        map.naturalWidth * scale) / 2,

        offsetY:
        (rect.height -
        map.naturalHeight * scale) / 2

    };

}




// =====================
// マーカー消去
// =====================

function clearMarker(){

    marker.style.display="none";

    marker.classList.remove("redMarker");

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


    for(let i=1;i<=floors[b];i++){

        let option =
        document.createElement("option");


        option.value=i;

        option.textContent=i+"階";


        floor.appendChild(option);

    }



    if(b==="S"){

        let option =
        document.createElement("option");


        option.value="1.5";

        option.textContent="1階上";


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


    if(!b||!f)return;



    clearMarker();



    let file;



    if(
        specialFloors[b] &&
        specialFloors[b][f]
    ){

        file =
        specialFloors[b][f];

    }else{

        file =
        b+f+"F.png";

    }


    map.src=file;

};






// =====================
// 画像読み込み
// =====================

map.onload=function(){

    clearMarker();


    if(!currentPlace)
    return;



    let now =
    map.src.split("/").pop();



    let target;



    if(
        currentPlace.building==="S" &&
        currentPlace.floor==="1.5"
    ){

        target="S11F.png";

    }else{

        target =
        currentPlace.building +
        currentPlace.floor +
        "F.png";

    }



    if(now===target){

        showMarker(currentPlace);

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



    currentPlace =
    destinations[key];



    building.value =
    currentPlace.building;



    building.onchange();



    floor.value =
    currentPlace.floor;



    floor.onchange();

}

// =====================
// マーカー表示
// =====================

function showMarker(place){


    const info =
    getImageInfo();



    const mapRect =
    map.getBoundingClientRect();


    const parentRect =
    map.parentElement.getBoundingClientRect();



    marker.style.left =
    (
        mapRect.left -
        parentRect.left +
        info.offsetX +
        place.x * info.scaleX
    )
    + "px";



    marker.style.top =
    (
        mapRect.top -
        parentRect.top +
        info.offsetY +
        place.y * info.scaleY
    )
    + "px";



    marker.classList.remove("redMarker");



    let file =
    map.src.split("/").pop();



    if(
        file==="S1F.png" ||
        file==="AB1F.png" ||
        file==="AB6F.png"
    ){

        marker.classList.add("redMarker");

    }



    marker.style.display="block";

}






// =====================
// 座標表示
// =====================

map.onclick=function(e){


    const rect =
    map.getBoundingClientRect();



    let x =
    (e.clientX-rect.left)
    /
    (rect.width/map.naturalWidth);



    let y =
    (e.clientY-rect.top)
    /
    (rect.height/map.naturalHeight);



    document
    .getElementById("coordinate")
    .textContent =
    `X:${Math.round(x)} Y:${Math.round(y)}`;

};
