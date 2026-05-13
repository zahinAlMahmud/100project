let  add =document.getElementById('add');
let  wishlist =document.getElementById('wishlist');
let count = 0;
let cart = document.getElementById('cart');
let list = document.getElementById('list');

// add.addEventListener('click',()=>{++count
//     console.log(count)
// })

add.addEventListener('click',(e)=>{
    e.preventDefault();
    count = count + 1;
    console.log(count); 
    cart.innerText =count;
})

wishlist.addEventListener('click',(e)=>{
    e.preventDefault();
    count = count + 1;
    console.log(count); 
    list.innerText =count;
})