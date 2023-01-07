// ********** set date ************
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', e => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height= 0;
    }

})
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
document.addEventListener('scroll', e=>{
    const scrollHide= window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHide>navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav")
    }

    if(scrollHide>500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let posicion = element.offsetTop-navHeight;

        if(!fixedNav){
            posicion=posicion- navHeight;
        }

        window.scrollTo({
            left:0, 
            top: posicion,
        });
        linksContainer.style.height= 0;
    })
})