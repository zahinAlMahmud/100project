const link = document.getElementById('link');
const nav = document.getElementById('navitemid');

link.addEventListener('click', () => {
    nav.classList.toggle('active');
});