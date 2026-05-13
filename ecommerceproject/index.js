let add = document.getElementById('add');
let wishlist = document.getElementById('wishlist');
let count = 0;
let cart = document.getElementById('cart');
let list = document.getElementById('list');

// add.addEventListener('click',()=>{++count
//     console.log(count)

// })

function updatedButton() {
    if (count >= 10) {
        add.disabled = true;
        wishlist.disabled = true;
        console.log('button disable')
    } else {
        add.disabled = false;
        wishlist.disabled = false;
        console.log('button not disable')
    }
}

add.addEventListener('click', (e) => {
    e.preventDefault();
    count = count + 1;
    console.log(count);
    cart.innerText = count;
    updatedButton();
})

wishlist.addEventListener('click', (e) => {
    e.preventDefault();
    count = count + 1;
    console.log(count);
    list.innerText = count;
    updatedButton();
})