// =====================
// 建物設定
// =====================

const floors = {

    S: 5,

    AB: 6,

    G: 4

};


// =====================
// 特殊階
// =====================

const specialFloors = {

    S: {

        "1.5": "S11F.png"

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

const mapContainer =
document.getElementById("map-container");

const selection =
document.getElementById("selection");



const xOutput =
document.getElementById("x");

const yOutput =
document.getElementById("y");

const widthOutput =
document.getElementById("width");

const heightOutput =
document.getElementById("height");

const codeOutput =
document.getElementById("code");

const copyButton =
document.getElementById("copy-button");



// =====================
// 建物変更
// =====================

building.addEventListener(
    "change",
    function(){

        floor.innerHTML =
        `
        <option value="">
            階を選択
        </option>
        `;


        const b =
        building.value;


        if(!b){

            return;

        }


        for(
            let i=1;
            i<=floors[b];
            i++
        ){

            const option =
            document.createElement(
                "option"
            );


            option.value = i;

            option.textContent =
            i + "階";


            floor.appendChild(option);

        }



        // 新館の特殊階

        if(b === "S"){

            const option =
            document.createElement(
                "option"
            );


            option.value = "1.5";

            option.textContent =
            "1階上";


            floor.appendChild(option);

        }

    }
);



// =====================
// 階変更
// =====================

floor.addEventListener(
    "change",
    function(){

        const b =
        building.value;

        const f =
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
            b + f + "F.png";

        }


        clearSelection();


        map.src = file;

    }
);



// =====================
// 座標変換
//
// 画面上の座標
// ↓
// 元画像の座標
// =====================

function getImageDisplayInfo(){

    const mapRect =
    map.getBoundingClientRect();


    const containerRect =
    mapContainer.getBoundingClientRect();


    const naturalWidth =
    map.naturalWidth;

    const naturalHeight =
    map.naturalHeight;


    if(
        !naturalWidth ||
        !naturalHeight
    ){

        return null;

    }


    const containerWidth =
    containerRect.width;

    const containerHeight =
    containerRect.height;


    const scale =
    Math.min(

        containerWidth /
        naturalWidth,

        containerHeight /
        naturalHeight

    );


    const displayWidth =
    naturalWidth * scale;

    const displayHeight =
    naturalHeight * scale;


    const offsetX =
    (containerWidth -
    displayWidth) / 2;


    const offsetY =
    (containerHeight -
    displayHeight) / 2;


    return {

        scale,

        offsetX,

        offsetY,

        displayWidth,

        displayHeight

    };

}



// =====================
// 画面座標 → 画像座標
// =====================

function screenToImage(
    clientX,
    clientY
){

    const info =
    getImageDisplayInfo();


    if(!info){

        return null;

    }


    const rect =
    mapContainer.getBoundingClientRect();


    let x =
    clientX -
    rect.left -
    info.offsetX;


    let y =
    clientY -
    rect.top -
    info.offsetY;


    x /= info.scale;

    y /= info.scale;


    return {

        x,
        y

    };

}



// =====================
// 選択開始
// =====================

let startPoint = null;

let isSelecting = false;



mapContainer.addEventListener(
    "pointerdown",
    function(e){

        // 右クリックなどを除外

        if(e.button !== 0){

            return;

        }


        const point =
        screenToImage(
            e.clientX,
            e.clientY
        );


        if(!point){

            return;

        }


        const info =
        getImageDisplayInfo();


        const rect =
        mapContainer.getBoundingClientRect();


        const displayX =
        e.clientX -
        rect.left;


        const displayY =
        e.clientY -
        rect.top;


        startPoint = {

            imageX: point.x,

            imageY: point.y,

            displayX,

            displayY

        };


        isSelecting = true;


        selection.style.display =
        "block";


        selection.style.left =
        displayX + "px";


        selection.style.top =
        displayY + "px";


        selection.style.width =
        "0px";


        selection.style.height =
        "0px";


        mapContainer.setPointerCapture(
            e.pointerId
        );

    }
);



// =====================
// ドラッグ中
// =====================

mapContainer.addEventListener(
    "pointermove",
    function(e){

        if(!isSelecting){

            return;

        }


        const rect =
        mapContainer.getBoundingClientRect();


        const currentX =
        e.clientX -
        rect.left;


        const currentY =
        e.clientY -
        rect.top;


        const left =
        Math.min(
            startPoint.displayX,
            currentX
        );


        const top =
        Math.min(
            startPoint.displayY,
            currentY
        );


        const width =
        Math.abs(
            currentX -
            startPoint.displayX
        );


        const height =
        Math.abs(
            currentY -
            startPoint.displayY
        );


        selection.style.left =
        left + "px";


        selection.style.top =
        top + "px";


        selection.style.width =
        width + "px";


        selection.style.height =
        height + "px";

    }
);



// =====================
// ドラッグ終了
// =====================

mapContainer.addEventListener(
    "pointerup",
    function(e){

        if(!isSelecting){

            return;

        }


        isSelecting = false;


        const endPoint =
        screenToImage(
            e.clientX,
            e.clientY
        );


        if(!endPoint){

            return;

        }


        let x =
        Math.min(
            startPoint.imageX,
            endPoint.x
        );


        let y =
        Math.min(
            startPoint.imageY,
            endPoint.y
        );


        let width =
        Math.abs(
            endPoint.x -
            startPoint.imageX
        );


        let height =
        Math.abs(
            endPoint.y -
            startPoint.imageY
        );


        // 整数にする

        x =
        Math.round(x);

        y =
        Math.round(y);

        width =
        Math.round(width);

        height =
        Math.round(height);


        // 画像外にはみ出さないようにする

        x =
        Math.max(
            0,
            Math.min(
                x,
                map.naturalWidth
            )
        );


        y =
        Math.max(
            0,
            Math.min(
                y,
                map.naturalHeight
            )
        );


        width =
        Math.min(
            width,
            map.naturalWidth - x
        );


        height =
        Math.min(
            height,
            map.naturalHeight - y
        );


        showResult(
            x,
            y,
            width,
            height
        );

    }
);



// =====================
// 結果表示
// =====================

function showResult(
    x,
    y,
    width,
    height
){

    xOutput.textContent =
    x;

    yOutput.textContent =
    y;

    widthOutput.textContent =
    width;

    heightOutput.textContent =
    height;


    codeOutput.textContent =

`x: ${x},
y: ${y},
width: ${width},
height: ${height}`;

}



// =====================
// 消去
// =====================

function clearSelection(){

    selection.style.display =
    "none";


    xOutput.textContent =
    "---";

    yOutput.textContent =
    "---";

    widthOutput.textContent =
    "---";

    heightOutput.textContent =
    "---";


    codeOutput.textContent =

`x: ---,
y: ---,
width: ---,
height: ---`;

}



// =====================
// 画像読み込み
// =====================

map.addEventListener(
    "load",
    function(){

        clearSelection();

    }
);



// =====================
// コピー
// =====================

copyButton.addEventListener(
    "click",
    async function(){

        const x =
        xOutput.textContent;

        const y =
        yOutput.textContent;

        const width =
        widthOutput.textContent;

        const height =
        heightOutput.textContent;


        if(
            x === "---" ||
            y === "---" ||
            width === "---" ||
            height === "---"
        ){

            return;

        }


        const text =

`x: ${x},
y: ${y},
width: ${width},
height: ${height}`;


        try{

            await navigator.clipboard.writeText(
                text
            );


            copyButton.textContent =
            "コピーしました！";


            setTimeout(
                function(){

                    copyButton.textContent =
                    "コピー";

                },
                1500
            );

        }
        catch(error){

            alert(
                "コピーできませんでした。"
            );

        }

    }
);



// =====================
// ウィンドウサイズ変更
// =====================

window.addEventListener(
    "resize",
    function(){

        // 選択範囲がある場合、
        // 位置だけ再計算する

        const x =
        xOutput.textContent;

        const y =
        yOutput.textContent;

        const width =
        widthOutput.textContent;

        const height =
        heightOutput.textContent;


        if(
            x === "---" ||
            y === "---" ||
            width === "---" ||
            height === "---"
        ){

            return;

        }


        redrawSelection(
            Number(x),
            Number(y),
            Number(width),
            Number(height)
        );

    }
);



// =====================
// 選択範囲を再描画
// =====================

function redrawSelection(
    x,
    y,
    width,
    height
){

    const info =
    getImageDisplayInfo();


    if(!info){

        return;

    }


    const left =
    info.offsetX +
    x * info.scale;


    const top =
    info.offsetY +
    y * info.scale;


    const displayWidth =
    width * info.scale;


    const displayHeight =
    height * info.scale;


    selection.style.display =
    "block";


    selection.style.left =
    left + "px";


    selection.style.top =
    top + "px";


    selection.style.width =
    displayWidth + "px";


    selection.style.height =
    displayHeight + "px";

}
