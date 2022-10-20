const rainy = document.getElementById("rain")
const sunny = document.getElementById("sun")
const response = document.getElementById("wedd")

rainy.addEventListener("mouseover", ()=>{
    response.innerText = "Grab your umbrella"
})

sunny.addEventListener("mouseover", ()=>{
    response.innerText = "Wear your sunglasses"
})