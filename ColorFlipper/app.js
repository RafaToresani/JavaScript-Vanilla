const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "black", "pink"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

document.addEventListener("click", (e) => {
    if(e.target.matches("#btn")){
        const nRandom=parseInt(getRandomInt(0,colors.length));
        document.body.style.backgroundColor = colors[nRandom];
        color.textContent=colors[nRandom];
    }
})

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}