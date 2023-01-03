const button = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");


button.addEventListener('click', e => {
    sidebar.classList.toggle("show-sidebar");
})