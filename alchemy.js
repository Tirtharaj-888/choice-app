// Phase-1
const phaseOneBlock = document.getElementById("phaseOneOptions")
const redBox = document.getElementById("rb");
const yellowBox = document.getElementById("yb");
// Phase-2
const phaseTwoBlock = document.getElementById("phaseTwoOptions")
const blueBox = document.getElementById("bb");
const greenBox = document.getElementById("gb");
// Phase-3
const finRes = document.getElementById("final")
const rst = document.getElementById("restart");
boxClickers();

let currentSelection;

function phaseTwo(){
    phaseOneBlock.style.display = "none";
    blueBox.style.display = "block";
    greenBox.style.display = "block";
}
function showFinalResult(ps,cs){
    phaseTwoBlock.style.display = "none";
    finRes.style.display = "block";

    if(ps === "rb" && cs === "bb"){
        finRes.innerHTML = "Red Blue";
    }
    else if (ps === "rb" && cs === "gb"){
        finRes.innerHTML = "Red Green";
    }
    else if (ps === "yb" && cs === "bb"){
        finRes.innerHTML = "Yellow Blue";
    }
    else {
        finRes.innerHTML = "Yellow Green";
    }
    rst.addEventListener("click",
    function(){
        finRes.style.display = "none";
        rst.style.display = "none";
        boxClickers();
    })
}

function boxClickers(){
    // Setting event listeners

    phaseOneBlock.style.display = "block";
    redBox.addEventListener("click",
    function(){
        currentSelection = "rb";
        phaseTwo();
    }
    )
    yellowBox.addEventListener("click", 
        function(){
            currentSelection = "yb";
            phaseTwo();
        }
        )
    blueBox.addEventListener("click",
        function(){
            let previousSelection = currentSelection;
            currentSelection = "bb";
            showFinalResult(previousSelection, currentSelection);
        })
    greenBox.addEventListener("click",
        function(){
            let previousSelection = currentSelection;
            currentSelection = "gb";
            showFinalResult(previousSelection, currentSelection);
        })
}




