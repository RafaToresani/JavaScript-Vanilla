const btn =document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

btn.addEventListener('click', e => {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }else{
        btn.classList.remove('slide');
        video.play();
    }
})

document.addEventListener('DOMContentLoaded', e => {
    preloader.classList.add('hide-preloader');
})