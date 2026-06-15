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
    first.textContent="階を選択";


    floor.appendChild(first);



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

        let option =
        document.createElement("option");


        option.value=i;
        option.textContent=i+"階";


        floor.appendChild(option);

    }




    if(value==="S"){


        let option =
        document.createElement("option");


        option.value="1.5";
        option.textContent="1階上";


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



    map.src=file;


    marker.style.display="none";



});









// =====================
// 座標表示
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
// 目的地データ
// =====================

const destinations = {


library:{

building:"S",
floor:"2",

x:2500,
y:600

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


        let container =
        document.getElementById("map-container");



        let imgRect =
        map.getBoundingClientRect();


        let containerRect =
        container.getBoundingClientRect();




        // object-fit contain 対応

        let scaleX =
        imgRect.width / 3186;


        let scaleY =
        imgRect.height / 2088;




        let offsetX =
        imgRect.left -
        containerRect.left;


        let offsetY =
        imgRect.top -
        containerRect.top;




        let x =
        place.x * scaleX + offsetX;


        let y =
        place.y * scaleY + offsetY;




        marker.style.left =
        x+"px";


        marker.style.top =
        y+"px";


        marker.style.display =
        "block";



    },500);


}
