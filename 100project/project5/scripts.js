let number = [];
console.log(number);

let checkBtn = document.getElementById('check-btn');
let navMenu = document.getElementById('navmenu')
checkBtn.addEventListener('click',()=>{
    navMenu.classList.add('active');
})

document.querySelectorAll('#nav-link').forEach(n=>n.addEventListener("click",()=>{
    navMenu.classList.remove("active");
    console.log('click')
}))