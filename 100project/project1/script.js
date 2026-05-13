const container = document.getElementsByClassName('container');
const  start = document.getElementById('start');
const question=document.getElementById('question')
const answer=document.getElementById('answer')
const progress =document.getElementById('progress')
const restart = document.getElementById('restart')
const btn=document.getElementById('btn')

function startQuiz (){
    btn.addEventListener('click',()=>{
        start.classList.remove('active');
        question.classList.add('active');
        console.log('click')

    })
}