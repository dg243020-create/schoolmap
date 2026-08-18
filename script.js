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

const classroomLayer =
document.getElementById("classroom-layer");



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


    /*
    
    ここに今まで通り
    目的地を追加してください。

    例：

    Studyroom:{
        building:"AB",
        floor:"6",
        x:968,
        y:461
    }

    */

};



// =====================
// 現在選択
// =====================

let currentPlace = null;



// ==================================================
// 文化祭
// ==================================================
//
// x / y / width / height は
// 「元画像そのもの」の座標です。
// 自分であとから入力してください。
//
// x      = 左からの位置
// y      = 上からの位置
// width  = 横幅
// height = 縦幅
//
// ==================================================

const classroomAreas = {

    /*
    ==================================================
    例
    ==================================================

    "11":{

        building:"AB",

        floor:"1",

        x:100,

        y:100,

        width:200,

        height:100

    }

    ==================================================
    */

};



// ==================================================
// 文化祭の情報
// ==================================================
//
// classroomAreas のキーと同じ名前を使用します。
//
// 例：
// "11" → 1-1
//
// ==================================================

const festivalInfo = {

    /*
    ==================================================
    例
    ==================================================

    "11":{

        title:"1-1 クラス企画",

        image:"festival/1-1.jpg",

        description:
        "ここに1-1の文化祭企画の説明を書きます。"

    }

    ==================================================
    */


};



// =====================
// 現在表示している画像の情報
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
// 文化祭クリック範囲消去
// =====================

function clearClassroomAreas(){

    classroomLayer.innerHTML="";

}



// =====================
// 建物変更
// =====================

building.onchange=function(){

    floor.innerHTML=
    `
    <option value="">
        階を選択
    </option>
    `;


    const b =
    building.value;


    if(!b){

        clearClassroomAreas();

        return;

    }


    for(
        let i=1;
        i<=floors[b];
        i++
    ){

        const option =
        document.createElement("option");


        option.value=i;

        option.textContent=
        i+"階";


        floor.appendChild(option);

    }


    if(b==="S"){

        const option =
        document.createElement("option");


        option.value="1.5";

        option.textContent=
        "1階上";


        floor.appendChild(option);

    }


    clearClassroomAreas();

};



// =====================
// 階変更
// =====================

floor.onchange=function(){

    const b =
    building.value;


    const f =
    floor.value;


    if(!b || !f){

        clearClassroomAreas();

        return;

    }


    clearMarker();

    clearClassroomAreas();


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


    map.src=file;

};



// =====================
// 画像読み込み
// =====================

map.onload=function(){

    clearMarker();

    clearClassroomAreas();


    createClassroomAreas();


    if(!currentPlace){

        return;

    }


    const now =
    map.src.split("/").pop();


    let target;


    if(

        currentPlace.building==="S" &&

        currentPlace.floor==="1.5"

    ){

        target="S11F.png";

    }

    else{

        target=
        currentPlace.building +
        currentPlace.floor +
        "F.png";

    }


    if(now===target){

        showMarker(currentPlace);

    }

};



// ==================================================
// 目的地表示
// ==================================================

function showDestination(){

    const key =
    document
    .getElementById("destination")
    .value;


    if(!key){

        return;

    }


    currentPlace =
    destinations[key];


    if(!currentPlace){

        return;

    }


    building.value =
    currentPlace.building;


    building.onchange();


    floor.value =
    currentPlace.floor;


    floor.onchange();

}



// ==================================================
// マーカー表示
// ==================================================

function showMarker(place){

    const info =
    getImageInfo();


    const mapRect =
    map.getBoundingClientRect();


    const parentRect =
    map.parentElement
    .getBoundingClientRect();


    marker.style.left=

    (

        mapRect.left -
        parentRect.left +

        info.offsetX +

        place.x *
        info.scaleX

    )+"px";


    marker.style.top=

    (

        mapRect.top -
        parentRect.top +

        info.offsetY +

        place.y *
        info.scaleY

    )+"px";


    marker.classList.remove(
        "redMarker"
    );


    const file =
    map.src.split("/").pop();


    if(

        file==="S1F.png" ||

        file==="AB1F.png" ||

        file==="AB6F.png"

    ){

        marker.classList.add(
            "redMarker"
        );

    }


    marker.style.display=
    "block";

}



// ==================================================
// 文化祭のクリック範囲を作る
// ==================================================

function createClassroomAreas(){

    clearClassroomAreas();


    const info =
    getImageInfo();


    const b =
    building.value;


    const f =
    floor.value;


    if(!b || !f){

        return;

    }


    Object.keys(classroomAreas)
    .forEach(key=>{

        const room =
        classroomAreas[key];


        // 現在の建物・階だけ表示

        if(
            room.building !== b ||
            room.floor !== f
        ){

            return;

        }


        // 文化祭情報がなければ
        // クリック範囲を作らない

        if(!festivalInfo[key]){

            return;

        }


        const area =
        document.createElement("div");


        area.className=
        "classroom-area";


        area.dataset.room=
        key;


        area.style.left=

        (

            info.offsetX +

            room.x *
            info.scaleX

        )+"px";


        area.style.top=

        (

            info.offsetY +

            room.y *
            info.scaleY

        )+"px";


        area.style.width=

        (

            room.width *
            info.scaleX

        )+"px";


        area.style.height=

        (

            room.height *
            info.scaleY

        )+"px";



        // クリック

        area.addEventListener(
            "click",
            function(){

                openFestivalModal(key);

            }
        );


        classroomLayer.appendChild(
            area
        );

    });

}



// ==================================================
// 文化祭情報表示
// ==================================================

function openFestivalModal(key){

    const info =
    festivalInfo[key];


    if(!info){

        return;

    }


    const modal =
    document.getElementById(
        "festival-modal"
    );


    const title =
    document.getElementById(
        "festival-title"
    );


    const image =
    document.getElementById(
        "festival-image"
    );


    const imageContainer =
    document.getElementById(
        "festival-image-container"
    );


    const description =
    document.getElementById(
        "festival-description"
    );


    title.textContent=
    info.title || key;


    description.textContent=
    info.description || "";


    // 画像が設定されている場合

    if(info.image){

        image.src=
        info.image;

        image.alt=
        info.title || "文化祭企画";

        imageContainer.style.display=
        "block";

    }

    else{

        image.src="";

        imageContainer.style.display=
        "none";

    }


    modal.classList.add(
        "show"
    );

}



// ==================================================
// 文化祭情報を閉じる
// ==================================================

function closeFestivalModal(){

    const modal =
    document.getElementById(
        "festival-modal"
    );


    modal.classList.remove(
        "show"
    );

}



// ==================================================
// ポップアップの外側をクリックしたら閉じる
// ==================================================

document
.getElementById("festival-modal")
.addEventListener(
    "click",
    function(e){

        if(
            e.target === this
        ){

            closeFestivalModal();

        }

    }
);



// ==================================================
// 画面サイズ変更
// ==================================================
//
// スマホの縦横変更などでも
// クリック範囲を正しい位置に戻す
//

window.addEventListener(
    "resize",
    function(){

        if(map.complete){

            createClassroomAreas();

            if(currentPlace){

                const file =
                map.src
                .split("/")
                .pop();


                let target;


                if(

                    currentPlace.building==="S" &&

                    currentPlace.floor==="1.5"

                ){

                    target=
                    "S11F.png";

                }

                else{

                    target=
                    currentPlace.building +
                    currentPlace.floor +
                    "F.png";

                }


                if(file===target){

                    showMarker(
                        currentPlace
                    );

                }

            }

        }

    }
);
