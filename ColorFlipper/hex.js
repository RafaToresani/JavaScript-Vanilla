const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

document.addEventListener("click", e => {
    if(e.target.matches("#btn")){
        const nRandom=generateRandomHex();
        document.body.style.backgroundColor = nRandom;
        color.textContent=nRandom;
    }
})

function generateRandomHex(){
    let hexColor = '#';

    for(let i=0; i<6; i++){
        hexColor+=hex[parseInt(getRandomInt(0, hex.length))];
    }
    return hexColor;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}