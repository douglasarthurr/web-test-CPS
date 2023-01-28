const clickButton = document.querySelector("#click");
let clicks = null;

var select = document.getElementById("secondsTest");
var selectedValue = select.value;
select.addEventListener("change", function(){
    selectedValue = select.value;
});

function countClick(){
    clicks++;
    document.getElementById("clicks").innerHTML = ("clicks = "+clicks);
}

function enableButton(){
    clickButton.removeAttribute("disabled");
}

function disableButton(){
    clickButton.disabled = true;
    total = clicks/15;
    document.getElementById("clicks").innerHTML = ("CPS = "+total.toFixed(2));
}

clickButton.addEventListener("click", function(){
    
    setTimeout(disableButton, selectedValue);
  });
