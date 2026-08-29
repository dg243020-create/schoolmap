/* =========================================
   全体
========================================= */

* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
}

body {
    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        "Noto Sans JP",
        sans-serif;

    background: #f5f7fa;
    color: #222;
}


/* =========================================
   ヘッダー
========================================= */

header {
    padding: 18px 20px;

    background: #fff;

    border-bottom: 1px solid #ddd;

    text-align: center;
}

header h1 {
    margin: 0;

    font-size: 23px;
}


/* =========================================
   操作パネル
========================================= */

.controls {
    width: min(1200px, 94%);

    margin: 20px auto;

    padding: 18px;

    background: #fff;

    border-radius: 12px;

    box-shadow:
        0 3px 12px rgba(0, 0, 0, 0.08);
}


.control-row {
    display: flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 12px;
}

.control-row:last-child {
    margin-bottom: 0;
}


.control-row label {
    min-width: 90px;

    font-weight: 600;
}


select,
input,
button {
    padding: 10px 12px;

    font-size: 15px;

    border-radius: 8px;
}


select,
input {
    border: 1px solid #bbb;

    background: #fff;
}


input[type="text"] {
    flex: 1;

    min-width: 150px;
}


button {
    border: none;

    background: #333;

    color: #fff;

    cursor: pointer;
}


button:hover {
    opacity: 0.85;
}


/* =========================================
   座標パネル
========================================= */

.coordinate-panel {
    width: min(1200px, 94%);

    margin: 0 auto 20px;

    padding: 18px;

    background: #fff;

    border-radius: 12px;

    box-shadow:
        0 3px 12px rgba(0, 0, 0, 0.08);
}


.coordinate-panel h2,
.coordinate-panel h3 {
    margin-top: 0;
}


.coordinate-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 10px;

    margin-bottom: 18px;
}


.coordinate-grid div {
    padding: 12px;

    background: #f1f3f5;

    border-radius: 8px;

    text-align: center;
}


.coordinate-grid span {
    display: block;

    margin-bottom: 5px;

    font-size: 12px;

    color: #666;
}


.coordinate-grid strong {
    font-size: 20px;
}


textarea {
    width: 100%;

    min-height: 130px;

    padding: 12px;

    resize: vertical;

    border: 1px solid #bbb;

    border-radius: 8px;

    font-family:
        Consolas,
        "Courier New",
        monospace;

    font-size: 14px;
}


.copy-button {
    margin-top: 10px;
}


/* =========================================
   地図
========================================= */

#map-wrapper {
    width: 100%;

    display: flex;

    justify-content: center;

    padding: 0 10px 40px;
}


#map-container {
    position: relative;

    width: min(1200px, 100%);

    overflow: hidden;

    background: #ddd;

    border-radius: 12px;

    box-shadow:
        0 4px 15px rgba(0, 0, 0, 0.1);

    touch-action: none;
}


#map {
    display: block;

    width: 100%;

    height: auto;

    user-select: none;

    -webkit-user-drag: none;
}


/* =========================================
   選択範囲
========================================= */

#selection {
    position: absolute;

    display: none;

    pointer-events: none;

    border: 2px solid #008cff;

    background: rgba(0, 140, 255, 0.18);

    z-index: 10;
}


/* =========================================
   スマホ
========================================= */

@media (max-width: 600px) {

    .control-row {
        flex-wrap: wrap;
    }

    .control-row label {
        width: 100%;
    }

    .coordinate-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    header h1 {
        font-size: 19px;
    }

}
