let colorCode = document.querySelector(".text")
let btn = document.querySelector(".click")
let divColor = document.getElementById("div");

btn.addEventListener("click", function () {
    let color = hello();
    colorCode.innerText = color;
    divColor.style.backgroundColor = color;
    
})

function hello() {
    let red = Math.floor(Math.random()* 255)
    let green = Math.floor(Math.random()* 255)
    let black = Math.floor(Math.random()* 255)
    let color = `rgb(${green}, ${black}, ${red})`;
    // let color = `rgb(${green}, ${blue}, ${red})`;

    return color
    
    
}