let container = document.getElementById('first_container')
let h1 = document.createElement('h1');
let image = document.getElementById('image');
image.style.width = "150px";
image.style.height = "150px";
h1.innerHTML = "Wireless Headphone";
container.appendChild(h1)


// ul section

let items = document.getElementById('items');
const itemlist = [
    {

        name: "Home", link: "#home"

    },
    {
        name: "Contact", link: "#contact"
    },
    {
        name:"About Us",link:"#about-us"
    }
]

const  liItem = itemlist;

for(let i = 0; i<liItem.length;i++){

    const li = document.createElement('li');
    const a = document.createElement('a');
    li.textContent = liItem[i].name;
    a.href =liItem[i].link;
    li.appendChild(a);
    items.appendChild(li);
    h1.appendChild(items);
    console.log(liItem[i]);

    li.style.listStyle ="none";
}