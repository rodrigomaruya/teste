const circulo=document.getElementById("circulo")
const branco=document.getElementById("branco")
const btn_comecar=document.getElementById("btn_comecar")
const gameCampo=document.getElementById("gameCampo")
const preto = document.getElementById("preto");
const tempo = document.getElementById("tempo");
let grito=new Audio("./fotos/grito.mp3")
let comecar=null
let cores=null
let moveTop=0
let moveLeft=0
let i=0
let n=0


const segundo=(a)=>{
    n=n+a
    let seg=(n<10)?"0"+n:n
    tempo.innerHTML=`${seg} segundo`
}

const paraPiscar=()=>{
    location.reload()
}

function piscar() {
    preto.classList.remove("ocultar")
    setInterval(function() {
        preto.style.visibility = (preto.style.visibility == "hidden") ? "visible" : "hidden";
    }, 10);
    
}

btn_comecar.addEventListener("click",()=>{
    setInterval(segundo,1000,1)
    gameCampo.classList.remove("ocultar")
    circulo.classList.remove("ocultar")
    let comprimento=branco.offsetHeight-20
    let largura=branco.offsetWidth-20
    let cor=["red","black","blue"]
    const fMover=setInterval(function(){
        cores=Math.floor(Math.random()*cor.length)
        moveTop=Math.floor(Math.random()*comprimento)
        moveLeft=Math.floor(Math.random()*largura)
        circulo.style=`position:absolute;top:${moveTop}px;left:${moveLeft}px;background-color:${cor[cores]}`
        if(circulo.style.backgroundColor=="red"){
            i++
            console.log(i)
        }
        if(i>=7){
            clearInterval(fMover)
            tempo.classList.add("ocultar")
            grito.play()
            console.log("ok")
            branco.style.visibility="hidden"
            piscar()
            setTimeout(paraPiscar,3000)
        }
    }, 400);
})

 