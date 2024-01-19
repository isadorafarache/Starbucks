let circulo = document.querySelector(".circulo")
let imgCopo = document.querySelector(".starbucks")
let verde = document.querySelector(".verde")
let rosa = document.querySelector(".rosa")
let azul = document.querySelector(".azul")

verde.addEventListener("click", () => {
    imgCopo.src = "./img/img1.png"
    circulo.style.background = "#017143"
})

rosa.addEventListener("click", () => {
    imgCopo.src = "./img/img2.png"
    circulo.style.background = "#eb7495"
})

azul.addEventListener("click", () => {
    imgCopo.src = "./img/img3.png"
    circulo.style.background = "#00BFFF"
})
