// =====================
// 建物設定
// =====================

const floors = {

    S:6,     // 新館
    AB:6,    // AB館
    G:5      // グラウンド側

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


    first.value = "";


    first.textContent =
    "階を選択";



    floor.appendChild(first);




    let value =
    building.value;



    if(value === ""){
        return;
    }






    // 通常階追加

    for(
        let i = 1;
        i <= floors[value];
        i++
    ){

        let option =
        document.createElement("option");


        option.value =
        i;


        option.textContent =
        i + "階";



        floor.appendChild(option);

    }







    // 新館だけ追加

    if(value === "S"){


        let option =
        document.createElement("option");


        option.value =
        "1.5";


        option.textContent =
        "1階上";



        floor.appendChild(option);


    }



});










// =====================
// 階変更
// =====================

floor.addEventListener(
"change",
()=>{


    let buildingName =
    building.value;


    let floorNumber =
    floor.value;



    if(
        buildingName === "" ||
        floorNumber === ""
    ){

        return;

    }






    let file;



    // 特殊画像チェック

    if(
        specialFloors[buildingName] &&
        specialFloors[buildingName][floorNumber]
    ){


        file =
        specialFloors[buildingName][floorNumber];


    }
    else{


        file =
        buildingName +
        floorNumber +
        "F.png";


    }






    console.log(
        "表示:",
        file
    );



    map.src =
    file;



});










// =====================
// 画像クリック座標
// =====================

map.onclick =
function(e){



    let x =
    e.offsetX;


    let y =
    e.offsetY;



    document
    .getElementById("coordinate")
    .textContent =
    `X:${x} Y:${y}`;



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


    const value =
    document.getElementById("destination").value;



    if(value===""){
        return;
    }



    const place =
    destinations[value];





    // 建物変更

    building.value =
    place.building;


    building.dispatchEvent(
        new Event("change")
    );





    // 階変更

    floor.value =
    place.floor;


    floor.dispatchEvent(
        new Event("change")
    );







    // 少し待ってマーカー表示

    setTimeout(()=>{


        const marker =
        document.getElementById("marker");



        const x =
        place.x / 3186 *
        map.clientWidth;



        const y =
        place.y / 2088 *
        map.clientHeight;




        marker.style.left =
        x+"px";


        marker.style.top =
        y+"px";


        marker.style.display =
        "block";



    },300);



}
