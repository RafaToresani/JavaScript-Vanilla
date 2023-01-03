let contador = 0;
const value=document.getElementById("value");

document.addEventListener('click', e=>{

    if(e.target.matches(".decrease")){
        contador--;
    }

    if(e.target.matches(".increase")){
        contador++;
    }

    if(e.target.matches(".reset")){
        contador=0;
    }

    value.textContent=contador;

    if(contador===0){
        value.style.color="";
    }else if(contador > 0){
        value.style.color="green"
    }else if(contador <0){
        value.style.color="red";
    }
})