const clickButton = document.querySelector("#click");
const select = document.getElementById("secondsTest");

let clicks = 0;
let total = 0;
let jogadas = 0;
let selectedValue = select.value;

select.addEventListener("change", function(){
    selectedValue = select.value;
});

function countClick(){
    clicks++;
    document.getElementById("clicks").innerHTML = ("clicks = "+clicks);
    
}

function enableButton(){
    if(jogadas >= 1){
        window.location.reload();
        clickButton.removeAttribute("disabled");
    }else{
        clickButton.removeAttribute("disabled");
    }
    
    clicks = 0;
    total = 0;
}

function disableButton(){
    clickButton.disabled = true;
    let valueDivision = selectedValue/1000;
    total = clicks/valueDivision;
    document.getElementById("clicks").innerHTML = ("CPS = "+total.toFixed(2));
    jogadas++
}

clickButton.addEventListener("click", function(){
    setTimeout(disableButton, selectedValue);
  });