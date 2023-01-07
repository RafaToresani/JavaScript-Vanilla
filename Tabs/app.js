const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', e => {
    if(e.target.dataset.id){
        btns.forEach((btn)=>{
            btn.classList.remove("active");
        });
    e.target.classList.add("active");
    articles.forEach((art)=>{
        art.classList.remove('active');
    })
    const element = document.getElementById(e.target.dataset.id);
    element.classList.add('active');
    }
})
