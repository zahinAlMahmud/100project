console.log('loaded the page')

const inputtext = document.getElementById('inputText');
const btn = document.getElementById('addBtn');


btn.addEventListener('click',()=>{
    inputtext.value ="";
    console.log('click');
})


// localStorage example and Use

// const language = ['JavaScript','Python','HTML','Css'];

// localStorage.setItem("languages",JSON.stringify(language))

// const value = localStorage.getItem("languages");
// console.log(value)

// const parsedLanguages = JSON.parse(value);
// console.log(parsedLanguages)