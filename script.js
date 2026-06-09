const locations = {

    entrance:{
        x:300,
        y:1800
    },

    stairs:{
        x:1600,
        y:1000
    },

    library:{
        x:2500,
        y:600
    }

};

document.getElementById("map").onclick = e => {
    console.log(e.offsetX, e.offsetY);
};

const map = document.getElementById("map");
const canvas = document.getElementById("routeCanvas");
const ctx = canvas.getContext("2d");

map.onload = () => {

    canvas.width = map.clientWidth;
    canvas.height = map.clientHeight;

};

function drawRoute(){

    const start =
        document.getElementById("start").value;

    const goal =
        document.getElementById("goal").value;

    if(!start || !goal){
        alert("現在地と目的地を選択してください");
        return;
    }

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    const sx =
        locations[start].x / 3186 *
        canvas.width;

    const sy =
        locations[start].y / 2088 *
        canvas.height;

    const gx =
        locations[goal].x / 3186 *
        canvas.width;

    const gy =
        locations[goal].y / 2088 *
        canvas.height;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 8;

    ctx.beginPath();
    ctx.moveTo(sx,sy);
    ctx.lineTo(gx,gy);
    ctx.stroke();
}

function changeFloor(file){

    document.getElementById("map").src = file;

    setTimeout(()=>{
        canvas.width = map.clientWidth;
        canvas.height = map.clientHeight;
    },100);

}
