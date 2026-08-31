// ============================================================
// 文化祭クリック範囲 座標取得ツール
// ============================================================

const building =
    document.getElementById("building");

const floor =
    document.getElementById("floor");

const imageFile =
    document.getElementById("imageFile");

const roomName =
    document.getElementById("roomName");

const loadButton =
    document.getElementById("loadButton");

const map =
    document.getElementById("map");

const mapContainer =
    document.getElementById("map-container");

const selection =
    document.getElementById("selection");

const coordX =
    document.getElementById("coordX");

const coordY =
    document.getElementById("coordY");

const coordWidth =
    document.getElementById("coordWidth");

const coordHeight =
    document.getElementById("coordHeight");

const codeOutput =
    document.getElementById("codeOutput");

const copyButton =
    document.getElementById("copyButton");


let dragging = false;

let startX = 0;
let startY = 0;

let currentSelection = null;


// ============================================================
// 整数化
// ============================================================

function round(value) {

    return Math.round(value);

}


// ============================================================
// 画像上の元画像座標を取得
// ============================================================

function getImagePosition(event) {

    const rect =
        map.getBoundingClientRect();


    let x =
        event.clientX -
        rect.left;

    let y =
        event.clientY -
        rect.top;


    // 表示画像の範囲内に収める

    x =
        Math.max(
            0,
            Math.min(
                rect.width,
                x
            )
        );

    y =
        Math.max(
            0,
            Math.min(
                rect.height,
                y
            )
        );


    // 表示サイズ → 元画像サイズ

    const scaleX =
        map.naturalWidth /
        rect.width;

    const scaleY =
        map.naturalHeight /
        rect.height;


    return {

        x: x * scaleX,

        y: y * scaleY

    };

}


// ============================================================
// 選択範囲更新
// ============================================================

function updateSelection(
    currentX,
    currentY
) {

    const x =
        Math.min(
            startX,
            currentX
        );

    const y =
        Math.min(
            startY,
            currentY
        );

    const width =
        Math.abs(
            currentX -
            startX
        );

    const height =
        Math.abs(
            currentY -
            startY
        );


    currentSelection = {

        x: round(x),

        y: round(y),

        width: round(width),

        height: round(height)

    };


    // ========================================================
    // 画面上の位置へ変換
    // ========================================================

    const rect =
        map.getBoundingClientRect();

    const containerRect =
        mapContainer.getBoundingClientRect();


    const scaleX =
        rect.width /
        map.naturalWidth;

    const scaleY =
        rect.height /
        map.naturalHeight;


    const left =
        x * scaleX;

    const top =
        y * scaleY;

    const displayWidth =
        width * scaleX;

    const displayHeight =
        height * scaleY;


    selection.style.left =
        (
            rect.left -
            containerRect.left +
            left
        ) + "px";


    selection.style.top =
        (
            rect.top -
            containerRect.top +
            top
        ) + "px";


    selection.style.width =
        displayWidth + "px";


    selection.style.height =
        displayHeight + "px";


    selection.style.display =
        "block";


    // ========================================================
    // 数値表示
    // ========================================================

    coordX.textContent =
        currentSelection.x;

    coordY.textContent =
        currentSelection.y;

    coordWidth.textContent =
        currentSelection.width;

    coordHeight.textContent =
        currentSelection.height;


    updateCode();

}


// ============================================================
// コード生成
// ============================================================

function updateCode() {

    if (
        !currentSelection
    ) {

        codeOutput.value =
            "";

        return;

    }


    const key =
        roomName.value.trim();


    if (!key) {

        codeOutput.value =
`// クラス番号を入力してください

x: ${currentSelection.x},
y: ${currentSelection.y},
width: ${currentSelection.width},
height: ${currentSelection.height}`;

        return;

    }


    codeOutput.value =
`"${key}": {
    building: "${building.value}",
    floor: "${floor.value}",
    x: ${currentSelection.x},
    y: ${currentSelection.y},
    width: ${currentSelection.width},
    height: ${currentSelection.height}
},`;

}


// ============================================================
// Pointer開始
// ============================================================

map.addEventListener(
    "pointerdown",
    function (event) {

        event.preventDefault();


        // 左クリック以外は無視

        if (
            event.pointerType === "mouse" &&
            event.button !== 0
        ) {

            return;

        }


        // 画像を掴んでいる間もイベントを受け取る

        map.setPointerCapture(
            event.pointerId
        );


        const pos =
            getImagePosition(event);


        startX =
            pos.x;

        startY =
            pos.y;


        dragging =
            true;


        updateSelection(
            startX,
            startY
        );

    }
);


// ============================================================
// Pointer移動
// ============================================================

map.addEventListener(
    "pointermove",
    function (event) {

        if (
            !dragging
        ) {

            return;

        }


        event.preventDefault();


        const pos =
            getImagePosition(event);


        updateSelection(
            pos.x,
            pos.y
        );

    }
);


// ============================================================
// Pointer終了
// ============================================================

map.addEventListener(
    "pointerup",
    function (event) {

        if (
            !dragging
        ) {

            return;

        }


        const pos =
            getImagePosition(event);


        updateSelection(
            pos.x,
            pos.y
        );


        dragging =
            false;


        try {

            map.releasePointerCapture(
                event.pointerId
            );

        }

        catch (error) {

            // 無視

        }

    }
);


// ============================================================
// Pointerキャンセル
// ============================================================

map.addEventListener(
    "pointercancel",
    function () {

        dragging =
            false;

    }
);


// ============================================================
// 地図読み込み
// ============================================================

loadButton.addEventListener(
    "click",
    function () {

        const file =
            imageFile.value.trim();


        if (!file) {

            alert(
                "画像ファイル名を入力してください。"
            );

            return;

        }


        currentSelection =
            null;


        selection.style.display =
            "none";


        coordX.textContent =
            "---";

        coordY.textContent =
            "---";

        coordWidth.textContent =
            "---";

        coordHeight.textContent =
            "---";

        codeOutput.value =
            "";


        map.src =
            file;

    }
);


// ============================================================
// クラス番号変更
// ============================================================

roomName.addEventListener(
    "input",
    updateCode
);


// ============================================================
// 建物・階変更
// ============================================================

building.addEventListener(
    "change",
    updateCode
);

floor.addEventListener(
    "change",
    updateCode
);


// ============================================================
// コピー
// ============================================================

copyButton.addEventListener(
    "click",
    async function () {

        if (
            !codeOutput.value
        ) {

            return;

        }


        try {

            await navigator.clipboard.writeText(
                codeOutput.value
            );


            copyButton.textContent =
                "コピーしました！";


            setTimeout(
                function () {

                    copyButton.textContent =
                        "コードをコピー";

                },
                1500
            );

        }

        catch (error) {

            codeOutput.select();

            document.execCommand(
                "copy"
            );

        }

    }
);


// ============================================================
// 初期画像
// ============================================================

map.src =
    imageFile.value;
