const btn = document.querySelector("#click")
let clicks = null
function button(){
    clicks++
    btn.setAttribute("class", "botaoClick")
    setInterval(trocarClass, 800)
    if(clicks >= 1){
        setInterval(desativarBotao, 5000)
        console.log(clicks)
    }
}



function buttonStart(){
    clicks = 0
    btn.removeAttribute("disabled",)
    console.log(clicks)

}

function trocarClass(){
    btn.setAttribute("class", "botao")
}

function desativarBotao(){
    if(clicks >= 1){
        btn.setAttribute("disabled", "disabled")
        clicks = 0
    }
}

function informarClick(){
    if(clicks === 0) {
        console.log("test")
    }
}


