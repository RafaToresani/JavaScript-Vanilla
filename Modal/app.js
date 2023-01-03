const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".modal-btn");

openBtn.addEventListener("click", e => {
    modalOverlay.classList.add("open-modal");
})

closeBtn.addEventListener("click", e => {
    modalOverlay.classList.remove("open-modal");
})

