// let box = document.getElementById('box');
// let btn = document.getElementById('btn');


// let number = function(){
//     let num = Math.floor(Math.random() * 5);
//     console.log(num)
// }

// let color = function(number){
//      console.log('check');
//      console.log(number);
//  }
let colorText = document.getElementById('color-text');
let randomcolor = function () {
    let colorRed = Math.floor(Math.random() * 256)
    let colorGreen = Math.floor(Math.random() * 256)
    let colorBlue = Math.floor(Math.random() * 256)

    let rgb = `rgb(${colorRed},${colorGreen},${colorBlue})`

    // let colorText = document.getElementById('color-text');
    let box = document.getElementById('box')

    box.style.backgroundColor = rgb;
    colorText.innerText = rgb;
}
setInterval(randomcolor,2000);

btn.addEventListener('click', randomcolor);

const colorCode = document.getElementById('copyCode');
const copyColorCode = () => {
    const inputTag = document.createElement('input');
    document.body.appendChild(inputTag);
    inputTag.value = colorText.innerText;
    inputTag.select();
    document.execCommand('copy');
    document.body.removeChild(inputTag);
}

copyColorCode();
document.getElementById('copyCode').addEventListener('click', () => {
    copyColorCode();
})




