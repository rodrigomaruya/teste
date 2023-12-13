const circulo=document.getElementById("circulo")
const branco=document.getElementById("branco")
const btn_comecar=document.getElementById("btn_comecar")
const gameCampo=document.getElementById("gameCampo")
const preto = document.getElementById("preto");
const tempo = document.getElementById("tempo");
let grito=new Audio("./fotos/grito.mp3")
let comecar=null
let i=0
let n=0


const segundo=(a)=>{
    n=n+a
    let seg=(n<10)?"0"+n:n
    tempo.innerHTML=`${seg} segundo`
}

// const som=()=>{
//     grito.play();
// }

// const parar=()=>{
//     branco.style.visibility="hidden"
//     clearInterval(comecar) 
// }

const paraPiscar=()=>{
    location.reload()
}

// const moveCirculo=()=>{
//     gameCampo.classList.remove("ocultar")
//     circulo.classList.remove("ocultar")
//     let comprimento=branco.offsetHeight-20
//     let largura=branco.offsetWidth-20
    
//     let cor=["red","black","blue"]
//     let cores=Math.floor(Math.random()*cor.length)
//     let moveTop=Math.floor(Math.random()*comprimento)
//     let moveLeft=Math.floor(Math.random()*largura)
    
//     circulo.style=`position:absolute;top:${moveTop}px;left:${moveLeft}px;background-color:${cor[cores]}`

//     if(circulo.style.backgroundColor=="red"){
//         i++
//         console.log(i)
//     }
//     if(i>=7){
//         grito.play()
//         parar()
//         // piscar()
//         // tempo.classList.add("ocultar")
//         // setTimeout(paraPiscar,3000)
//     }
// }

function piscar() {
    preto.classList.remove("ocultar")
    setInterval(function() {
        preto.style.visibility = (preto.style.visibility == "hidden") ? "visible" : "hidden";
    }, 10);
    
}

btn_comecar.addEventListener("click",()=>{
    gameCampo.classList.remove("ocultar")
    circulo.classList.remove("ocultar")
    let comprimento=branco.offsetHeight-20
    let largura=branco.offsetWidth-20
    
    let cor=["red","black","blue"]
    let cores=Math.floor(Math.random()*cor.length)
    let moveTop=Math.floor(Math.random()*comprimento)
    let moveLeft=Math.floor(Math.random()*largura)
    
    circulo.style=`position:absolute;top:${moveTop}px;left:${moveLeft}px;background-color:${cor[cores]}`

    if(circulo.style.backgroundColor=="red"){
        i++
        console.log(i)
    }
    if(i>=7){
        grito.play()
        branco.style.visibility="hidden"
        // parar()
        // piscar()
        // tempo.classList.add("ocultar")
        // setTimeout(paraPiscar,3000)
    }
    // setInterval(segundo,1000,1)
    // comecar=setInterval(moveCirculo,350)
    // setTimeout(parar,6000)
    // setTimeout(som,960)
    // setTimeout(piscar,3000)
    // setTimeout(paraPiscar,10000)
    
})

 