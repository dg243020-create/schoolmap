// ==================================================
// 大商学園 校内マップ
// script.js
// ==================================================


// ==================================================
// 建物設定
// ==================================================

const floors = {

    S: 5,

    AB: 6,

    G: 4

};


const specialFloors = {

    S: {
        "1.5": "S11F.png"
    }

};



// ==================================================
// 座標確認デバッグ
// ==================================================
//
// true  → 地図をクリックすると座標をコンソール表示
// false → 座標確認をOFF
//
// 座標を調べ終わったら false にしてください。
// ==================================================

const DEBUG_COORDINATES = true;



// ==================================================
// 要素取得
// ==================================================

const building =
    document.getElementById("building");

const floor =
    document.getElementById("floor");

const map =
    document.getElementById("map");

const marker =
    document.getElementById("marker");



// ==================================================
// 文化祭クリックレイヤー
// ==================================================
//
// HTMLに無ければ自動作成
// ==================================================

let classroomLayer =
    document.getElementById("classroom-layer");


if (!classroomLayer) {

    classroomLayer =
        document.createElement("div");

    classroomLayer.id =
        "classroom-layer";

    const mapContainer =
        document.getElementById("map-container");

    if (mapContainer) {

        mapContainer.appendChild(
            classroomLayer
        );

    }

}



// ==================================================
// 目的地
// ==================================================

const destinations = {

    Library: {

        building: "AB",

        floor: "6",

        x: 150,

        y: 1000

    },


    /*
    
    ここに今まで通り
    目的地を追加してください。

    例：

    Studyroom: {

        building: "AB",

        floor: "6",

        x: 968,

        y: 461

    }

    */

};



// ==================================================
// 現在選択中の目的地
// ==================================================

let currentPlace = null;



// ==================================================
// 文化祭
// ==================================================
//
// x      = 左端
// y      = 上端
// width  = 横幅
// height = 縦幅
//
// すべて「元画像」の座標です。
//
// 例えば
//
// x:100
// y:200
// width:300
// height:150
//
// なら
//
// 左上 X100 Y200
// 右下 X400 Y350
//
// の範囲がクリック可能になります。
// ==================================================

const classroomAreas = {


    // ==================================================
    // 例
    // ==================================================
    //
    // "11": {
    //
    //     building: "AB",
    //     floor: "1",
    //
    //     x: 100,
    //     y: 100,
    //
    //     width: 200,
    //     height: 100
    //
    // }
    //
    // ==================================================


};



// ==================================================
// 文化祭情報
// ==================================================
//
// classroomAreas と同じキーを使います。
//
// "11" → 1-1
// "12" → 1-2
// "21" → 2-1
//
// ==================================================

const festivalInfo = {


    // ==================================================
    // 例
    // ==================================================
    //
    // "11": {
    //
    //     title: "1-1 クラス企画",
    //
    //     image: "festival/1-1.png",
    //
    //     description:
    //         "ここに1-1の文化祭企画の説明を書きます。"
    //
    // }
    //
    // ==================================================


};



// ==================================================
// 現在表示している画像の情報
// ==================================================

function getImageInfo() {


    const rect =
        map.getBoundingClientRect();


    const naturalWidth =
        map.naturalWidth;


    const naturalHeight =
        map.naturalHeight;


    if (
        !naturalWidth ||
        !naturalHeight
    ) {

        return {

            scaleX: 1,

            scaleY: 1,

            offsetX: 0,

            offsetY: 0

        };

    }



    // object-fit: contain と同じ倍率

    const scale =
        Math.min(

            rect.width / naturalWidth,

            rect.height / naturalHeight

        );



    return {

        scaleX: scale,

        scaleY: scale,


        offsetX:
            (rect.width -
                naturalWidth * scale) / 2,


        offsetY:
            (rect.height -
                naturalHeight * scale) / 2

    };

}



// ==================================================
// マーカー消去
// ==================================================

function clearMarker() {


    if (!marker) return;


    marker.style.display =
        "none";


    marker.classList.remove(
        "redMarker"
    );

}



// ==================================================
// 文化祭クリック範囲消去
// ==================================================

function clearClassroomAreas() {


    if (!classroomLayer) return;


    classroomLayer.innerHTML = "";

}



// ==================================================
// 建物変更
// ==================================================

building.onchange = function () {


    floor.innerHTML = `
        <option value="">
            階を選択
        </option>
    `;


    const b =
        building.value;


    if (!b) {

        clearClassroomAreas();

        return;

    }



    // 通常階

    for (
        let i = 1;
        i <= floors[b];
        i++
    ) {


        const option =
            document.createElement(
                "option"
            );


        option.value =
            i;


        option.textContent =
            i + "階";


        floor.appendChild(
            option
        );

    }



    // 新館の1階上

    if (b === "S") {


        const option =
            document.createElement(
                "option"
            );


        option.value =
            "1.5";


        option.textContent =
            "1階上";


        floor.appendChild(
            option
        );

    }



    clearClassroomAreas();

};



// ==================================================
// 階変更
// ==================================================

floor.onchange = function () {


    const b =
        building.value;


    const f =
        floor.value;


    if (!b || !f) {

        clearClassroomAreas();

        return;

    }



    clearMarker();

    clearClassroomAreas();



    let file;



    // 特殊階

    if (
        specialFloors[b] &&
        specialFloors[b][f]
    ) {

        file =
            specialFloors[b][f];

    }

    // 通常階

    else {

        file =
            b +
            f +
            "F.png";

    }



    map.src =
        file;

};



// ==================================================
// 画像読み込み
// ==================================================

map.onload = function () {


    clearMarker();

    clearClassroomAreas();



    // 文化祭クリック範囲作成

    createClassroomAreas();



    if (!currentPlace) {

        return;

    }



    const now =
        map.src
            .split("/")
            .pop();



    let target;



    if (
        currentPlace.building === "S" &&
        currentPlace.floor === "1.5"
    ) {

        target =
            "S11F.png";

    }

    else {

        target =
            currentPlace.building +
            currentPlace.floor +
            "F.png";

    }



    if (now === target) {

        showMarker(
            currentPlace
        );

    }

};



// ==================================================
// 目的地表示
// ==================================================

function showDestination() {


    const key =
        document
            .getElementById(
                "destination"
            )
            .value;


    if (!key) {

        return;

    }



    currentPlace =
        destinations[key];



    if (!currentPlace) {

        return;

    }



    // 建物変更

    building.value =
        currentPlace.building;


    building.onchange();



    // 階変更

    floor.value =
        currentPlace.floor;


    floor.onchange();

}



// ==================================================
// マーカー表示
// ==================================================

function showMarker(place) {


    if (!marker) return;



    const info =
        getImageInfo();



    const mapRect =
        map.getBoundingClientRect();


    const parentRect =
        map.parentElement
            .getBoundingClientRect();



    marker.style.left =

        (

            mapRect.left -
            parentRect.left +

            info.offsetX +

            place.x *
            info.scaleX

        ) + "px";



    marker.style.top =

        (

            mapRect.top -
            parentRect.top +

            info.offsetY +

            place.y *
            info.scaleY

        ) + "px";



    marker.classList.remove(
        "redMarker"
    );



    const file =
        map.src
            .split("/")
            .pop();



    // 赤マーカー

    if (

        file === "S1F.png" ||

        file === "AB1F.png" ||

        file === "AB6F.png"

    ) {

        marker.classList.add(
            "redMarker"
        );

    }



    marker.style.display =
        "block";

}



// ==================================================
// 文化祭クリック範囲を作る
// ==================================================

function createClassroomAreas() {


    clearClassroomAreas();



    const b =
        building.value;


    const f =
        floor.value;


    if (!b || !f) {

        return;

    }



    if (
        !map.naturalWidth ||
        !map.naturalHeight
    ) {

        return;

    }



    const info =
        getImageInfo();



    Object.keys(
        classroomAreas
    ).forEach(
        function (key) {


            const room =
                classroomAreas[key];



            // 建物が違う

            if (
                room.building !== b
            ) {

                return;

            }



            // 階が違う

            if (
                String(room.floor) !==
                String(f)
            ) {

                return;

            }



            // 文化祭情報が無い場合

            if (
                !festivalInfo[key]
            ) {

                return;

            }



            const area =
                document.createElement(
                    "div"
                );


            area.className =
                "classroom-area";


            area.dataset.room =
                key;



            // ==================================================
            // 左位置
            // ==================================================

            area.style.left =

                (

                    info.offsetX +

                    room.x *
                    info.scaleX

                ) + "px";



            // ==================================================
            // 上位置
            // ==================================================

            area.style.top =

                (

                    info.offsetY +

                    room.y *
                    info.scaleY

                ) + "px";



            // ==================================================
            // 横幅
            // ==================================================

            area.style.width =

                (

                    room.width *
                    info.scaleX

                ) + "px";



            // ==================================================
            // 高さ
            // ==================================================

            area.style.height =

                (

                    room.height *
                    info.scaleY

                ) + "px";



            // ==================================================
            // クリック
            // ==================================================

            area.addEventListener(
                "click",
                function (e) {


                    // デバッグ座標計算

                    if (
                        DEBUG_COORDINATES
                    ) {

                        showDebugCoordinate(
                            e
                        );

                    }



                    openFestivalModal(
                        key
                    );

                }
            );



            classroomLayer.appendChild(
                area
            );

        }
    );

}



// ==================================================
// 座標確認
// ==================================================
//
// クリックした位置を
// 「元画像のX / Y」に変換する。
// ==================================================

function getImageCoordinate(e) {


    const container =
        document.getElementById(
            "map-container"
        );


    if (!container) {

        return null;

    }



    const containerRect =
        container.getBoundingClientRect();



    const info =
        getImageInfo();



    // コンテナ内座標

    const clickX =
        e.clientX -
        containerRect.left;


    const clickY =
        e.clientY -
        containerRect.top;



    // 実際の画像部分

    const imageX =
        clickX -
        info.offsetX;


    const imageY =
        clickY -
        info.offsetY;



    // 元画像座標

    const x =
        imageX /
        info.scaleX;


    const y =
        imageY /
        info.scaleY;



    return {

        x: Math.round(x),

        y: Math.round(y)

    };

}



// ==================================================
// 座標デバッグ表示
// ==================================================

function showDebugCoordinate(e) {


    const coordinate =
        getImageCoordinate(e);


    if (!coordinate) {

        return;

    }



    console.log(
        "=============================="
    );


    console.log(
        "文化祭座標確認"
    );


    console.log(
        "X:",
        coordinate.x
    );


    console.log(
        "Y:",
        coordinate.y
    );


    console.log(
        `x:${coordinate.x}, y:${coordinate.y}`
    );


    console.log(
        "=============================="
    );

}



// ==================================================
// 地図クリックで座標確認
// ==================================================
//
// classroom-area のクリックも
// 親へイベントが伝わるため、
// その場合も座標を取得できます。
// ==================================================

document
    .getElementById("map-container")
    .addEventListener(
        "click",
        function (e) {


            if (
                !DEBUG_COORDINATES
            ) {

                return;

            }



            const coordinate =
                getImageCoordinate(e);



            if (!coordinate) {

                return;

            }



            console.log(
                `クリック座標 → X:${coordinate.x} Y:${coordinate.y}`
            );

        }
    );



// ==================================================
// 文化祭モーダルを作成
// ==================================================

function createFestivalModal() {


    let modal =
        document.getElementById(
            "festival-modal"
        );



    // 既にHTMLにあるなら何もしない

    if (modal) {

        return;

    }



    modal =
        document.createElement(
            "div"
        );


    modal.id =
        "festival-modal";



    modal.innerHTML = `

        <div class="festival-modal-content">

            <button
                id="festival-close"
                type="button"
            >
                ×
            </button>


            <h2 id="festival-title">
            </h2>


            <div
                id="festival-image-container"
            >

                <img
                    id="festival-image"
                    src=""
                    alt=""
                >

            </div>


            <p
                id="festival-description"
            >
            </p>

        </div>

    `;



    document.body.appendChild(
        modal
    );



    // ×ボタン

    document
        .getElementById(
            "festival-close"
        )
        .addEventListener(
            "click",
            closeFestivalModal
        );



    // 外側クリック

    modal.addEventListener(
        "click",
        function (e) {


            if (
                e.target === modal
            ) {

                closeFestivalModal();

            }

        }
    );

}



// ==================================================
// 文化祭情報表示
// ==================================================

function openFestivalModal(key) {


    const info =
        festivalInfo[key];


    if (!info) {

        return;

    }



    createFestivalModal();



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



    // タイトル

    title.textContent =
        info.title || key;



    // 説明

    description.textContent =
        info.description || "";



    // 画像

    if (info.image) {


        image.src =
            info.image;


        image.alt =
            info.title ||
            "文化祭企画";


        imageContainer.style.display =
            "block";

    }

    else {


        image.src =
            "";


        imageContainer.style.display =
            "none";

    }



    // 表示

    modal.classList.add(
        "show"
    );

}



// ==================================================
// 文化祭情報を閉じる
// ==================================================

function closeFestivalModal() {


    const modal =
        document.getElementById(
            "festival-modal"
        );


    if (!modal) {

        return;

    }



    modal.classList.remove(
        "show"
    );

}



// ==================================================
// ESCキーで閉じる
// ==================================================

document.addEventListener(
    "keydown",
    function (e) {


        if (
            e.key === "Escape"
        ) {

            closeFestivalModal();

        }

    }
);



// ==================================================
// 画面サイズ変更
// ==================================================

window.addEventListener(
    "resize",
    function () {


        if (
            map.complete &&
            map.naturalWidth
        ) {


            // クリック範囲を再計算

            createClassroomAreas();



            // マーカーも再計算

            if (currentPlace) {


                const file =
                    map.src
                        .split("/")
                        .pop();



                let target;



                if (

                    currentPlace.building === "S" &&

                    currentPlace.floor === "1.5"

                ) {

                    target =
                        "S11F.png";

                }

                else {

                    target =
                        currentPlace.building +
                        currentPlace.floor +
                        "F.png";

                }



                if (
                    file === target
                ) {

                    showMarker(
                        currentPlace
                    );

                }

            }

        }

    }
);



// ==================================================
// 初期化
// ==================================================

createFestivalModal();
