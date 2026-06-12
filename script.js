console.log("JS読み込みOK");


window.onload = function(){


    const building =
    document.getElementById("building");


    const floor =
    document.getElementById("floor");



    console.log(
        building,
        floor
    );



    building.addEventListener(
    "change",
    function(){


        console.log(
            "建物:",
            building.value
        );


        floor.innerHTML =
        `
        <option value="">
        階を選択
        </option>
        `;



        if(building.value === ""){
            return;
        }



        for(let i=1;i<=5;i++){


            let option =
            document.createElement("option");


            option.value=i;


            option.textContent =
            i+"階";


            floor.appendChild(option);

        }



        console.log(
            "階追加完了"
        );


    });



};
