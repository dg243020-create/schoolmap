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
// 画像表示範囲取得
// =====================

function getImageInfo(){


    const box =
    document
    .getElementById("map-container");


    let scale =
    Math.min(

        box.clientWidth / map.naturalWidth,

        box.clientHeight / map.naturalHeight

    );



    let width =
    map.naturalWidth * scale;


    let height =
    map.naturalHeight * scale;




    return {


        scale:scale,


        offsetX:
        (box.clientWidth-width)/2,


        offsetY:
        (box.clientHeight-height)/2


    };


}









// =====================
// 建物選択
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



    if(!b){
        return;
    }





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



    if(!b || !f){
        return;
    }




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




    marker.style.display="none";



    map.src=file;


};









// =====================
// クリック座標
// =====================

map.onclick=function(e){


    let info =
    getImageInfo();



    let rect =
    document
    .getElementById("map-container")
    .getBoundingClientRect();




    let x =
    (
        e.clientX -
        rect.left -
        info.offsetX
    )
    /
    info.scale;



    let y =
    (
        e.clientY -
        rect.top -
        info.offsetY
    )
    /
    info.scale;





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



    if(!key){
        return;
    }




    let p =
    destinations[key];





    building.value =
    p.building;


    building.onchange();




    floor.value =
    p.floor;


    floor.onchange();




    setTimeout(()=>{


        showMarker(p);


    },500);



}









// =====================
// マーカー表示
// =====================

function showMarker(p){


    let info =
    getImageInfo();





    marker.style.left =

    (
        info.offsetX +
        p.x * info.scale
    )
    +"px";




    marker.style.top =

    (
        info.offsetY +
        p.y * info.scale
    )
    +"px";




    marker.style.display =
    "block";


}
