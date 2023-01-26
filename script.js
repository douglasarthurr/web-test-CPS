const btn = document.querySelector("#click")
let clicks = null

function button(){
    clicks++
    btn.setAttribute("class", "botaoClick")
    setInterval(trocarClass, 1000)
    console.log(clicks)

    if(clicks >= 1){
        setInterval(desativarBotao, 5000)  
    }

}

function buttonStart(){
    btn.removeAttribute("disabled")
    
    
}

function trocarClass(){
    btn.setAttribute("class", "botao")
}

function desativarBotao(){
    btn.setAttribute("disabled", "disabled")
    clicks = 0
    console.log("ola")
}

function informarClick(){
    
}


