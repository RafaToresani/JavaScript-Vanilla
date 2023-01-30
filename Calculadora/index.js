const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual= document.getElementById('valor-actual');
const btnNumeros = document.querySelectorAll('.numero');
const btnOperador = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

btnNumeros.forEach(btn => {
    btn.addEventListener('click', ()=>{display.agregarNum(btn.textContent);})
})

btnOperador.forEach(btn => {
    btn.addEventListener('click', () => {display.computar(btn.value)})
})