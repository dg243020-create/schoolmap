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

const building = document.getElementById("building");
const floor = document.getElementById("floor");
const map = document.getElementById("map");




// =====================
// 建物選択
// =====================

building.onchange = function(){


    floor.innerHTML =
    `<option value="">階を選択</option>`;



    let b = building.value;



    if(b===""){
        return;
    }



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
// 階選択
// =====================

floor.onchange = function(){


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



    console.log(file);


    map.src=file;


};









// =====================
// 座標
// =====================

map.onclick=function(e){


    let rect =
    map.getBoundingClientRect();


    let x =
    e.clientX - rect.left;


    let y =
    e.clientY - rect.top;



    document
    .getElementById("coordinate")
    .textContent =
    `X:${Math.round(x)} Y:${Math.round(y)}`;


};









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

},    


};







function showDestination(){


    let key =
    document.getElementById("destination").value;



    if(key===""){
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



    let marker =
    document.getElementById("marker");



    let rect =
    map.getBoundingClientRect();



    let container =
    document
    .getElementById("map-container")
    .getBoundingClientRect();




    let scaleX =
    rect.width / 3186;


    let scaleY =
    rect.height / 2088;



    marker.style.left =
    (
    p.x * scaleX
    +
    rect.left
    -
    container.left
    )
    +"px";



    marker.style.top =
    (
    p.y * scaleY
    +
    rect.top
    -
    container.top
    )
    +"px";



    marker.style.display =
    "block";


}
