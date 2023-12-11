const circulo=document.getElementById("circulo")
const branco=document.getElementById("branco")
const btn_comecar=document.getElementById("btn_comecar")
const gameCampo=document.getElementById("gameCampo")
const preto = document.getElementById("preto");
const tempo = document.getElementById("tempo");
let comecar=null
let n=0

btn_comecar.addEventListener("click",()=>{
    setInterval(segundo,1000,1)
    gameCampo.classList.remove("ocultar")
    comecar=setInterval(moveCirculo,350)
    setTimeout(parar,6000)
    setTimeout(som,5600)
    setTimeout(piscar,3000)
    setTimeout(paraPiscar,10000)
    
})
const segundo=(a)=>{
    n=n+a
    let seg=(n<10)?"0"+n:n
    tempo.innerHTML=`${seg} segundo`
}

const som=()=>{
    let grito=new Audio("fotos/grito.m4a")
    grito.play()
}
const parar=()=>{
    branco.classList.add("ocultar")
    clearInterval(comecar) 
}

const paraPiscar=()=>{
    location.reload()
}

const moveCirculo=()=>{
    circulo.classList.remove("ocultar")
    let comprimento=branco.offsetHeight-20
    let largura=branco.offsetWidth-20
    
    let cor=["red","black","blue"]
    let cores=Math.floor(Math.random()*cor.length)
    let moveTop=Math.floor(Math.random()*comprimento)
    let moveLeft=Math.floor(Math.random()*largura)
    
    circulo.style=`position:absolute;top:${moveTop}px;left:${moveLeft}px;background-color:${cor[cores]}`
}

function piscar() {
    preto.classList.remove("ocultar")
    setInterval(function() {
        preto.style.visibility = (preto.style.visibility == "hidden") ? "visible" : "hidden";
    }, 10);
    
}

 