const button = document.querySelectorAll(".question-btn");

button.forEach( e => {
    e.addEventListener('click', e=>{
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})