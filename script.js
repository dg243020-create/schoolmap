// =====================
// 建物設定
// =====================

const floors = {

    S:5,
    AB:6,
    G:5

};




// =====================
// 特殊画像
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


const marker =
document.getElementById("marker");







// =====================
// 建物変更
// =====================

building.addEventListener(
"change",
()=>{


    floor.innerHTML =
    "";


    let option =
    document.createElement("option");


    option.value="";

    option.textContent =
    "階を選択";


    floor.appendChild(option);



    let value =
    building.value;



    if(value===""){
        return;
    }




    for(
        let i=1;
        i<=floors[value];
        i++
    ){


        let item =
        document.createElement("option");


        item.value=i;


        item.textContent =
        i+"階";


        floor.appendChild(item);

    }





    if(value==="S"){


        let item =
        document.createElement("option");


        item.value="1.5";


        item.textContent =
        "1階上";


        floor.appendChild(item);

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
        b + f + "F.png";

    }



    console.log(
        "表示:",
        file
    );


    map.src =
    file;


    // 階変更したら一旦光を消す

    marker.style.display =
    "none";


});









// =====================
// 座標表示
// =====================

map.onclick =
function(e){


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
    
entrance:{

    building:"G",
    floor:"1",

    x:300,
    y:500

},


stairs:{

    building:"S",
    floor:"1.5",

    x:1600,
    y:1000

}


};







function showDestination(){


    let value =
    document
    .getElementById("destination")
    .value;



    if(value===""){
        return;
    }



    let place =
    destinations[value];





    building.value =
    place.building;



    building.dispatchEvent(
    new Event("change")
    );




    floor.value =
    place.floor;



    floor.dispatchEvent(
    new Event("change")
    );





    setTimeout(()=>{


        let rect =
        map.getBoundingClientRect();



        let x =
        place.x / 3186 *
        rect.width;



        let y =
        place.y / 2088 *
        rect.height;





        marker.style.left =
        x + "px";


        marker.style.top =
        y + "px";



        marker.style.display =
        "block";



    },300);



}
