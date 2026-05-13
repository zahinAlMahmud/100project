let add = document.querySelectorAll('#add');
let wishlist = document.querySelectorAll('#wishlist');
let listCount = 0;
let cartCount = 0 ;
let cart = document.getElementById('cart');
let list = document.getElementById('list');

// add.addEventListener('click',()=>{++count
//     console.log(count)

// })

// function updatedButton() {
//     if (count >= 50) {
//         add.disabled = true;
//         wishlist.disabled = true;
//         console.log('button disable')
//         alert('You can add 10 items at a time');
//     } else {
//         add.disabled = false;
//         wishlist.disabled = false;
        
//         console.log('button not disable')
//     }
// }

add.forEach(btn =>{
    btn.addEventListener('click', (e) => {
    e.preventDefault();
    cartCount++;
    console.log(cartCount);
    cart.innerText = cartCount;
    if(cartCount >= 5){
        add.forEach(b=>b.disabled =true)
        alert('You add Maximun 5  items')
    }
})
})

wishlist.forEach(btn=>{
btn.addEventListener('click', (e) => {
    e.preventDefault();
    listCount++ ;
    console.log(listCount);
    list.innerText =listCount;
    if(listCount >=30){
        wishlist.forEach(b=>b.disabled=true)
        alert(`You can add ${listCount} wishlist  for next 24hours`)
    }
  
})
})