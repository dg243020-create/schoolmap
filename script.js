// 建物ごとの階数

const floors = {

    S: 5,
    AB: 5,
    G: 5

};


// HTML取得

const building =
document.getElementById("building");


const floor =
document.getElementById("floor");


const map =
document.getElementById("map");



// ====================
// 建物選択
// ====================

building.onchange = function(){


    // 階をリセット

    floor.innerHTML =
    '<option value="">階を選択</option>';



    let value =
    building.value;



    if(value === ""){
        return;
    }



    for(let i = 1; i <= floors[value]; i++){


        let option =
        document.createElement("option");



        option.value =
        i;



        option.innerText =
        i + "階";



        floor.appendChild(option);


    }



};





// ====================
// 階選択
// ====================

floor.onchange = function(){



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



    let image =
    buildingName
    +
    floorNumber
    +
    "F.png";



    console.log(image);



    map.src=image;



};






// ====================
// 座標表示
// ====================

map.onclick=function(e){


    document
    .getElementById("coordinate")
    .innerText =
    "X:"+
    e.offsetX+
    " Y:"+
    e.offsetY;


};
