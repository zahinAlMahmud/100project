const h2 = document.getElementsByTagName('headerText');
const time= document.getElementById('time');
const start= document.getElementById('start-btn');
const pause= document.getElementById('pause-btn');
const stop = document.getElementById('stop-btn');



const timeStart = ()=>{
    console.log('hello')

}


start.addEventListener('click',()=>{
    click.preventDefault();
    setInterval(timeStart,2000)
})

pause.addEventListener('click',()=>{
    console.log('hello')
})


stop.addEventListener('click',()=>{
    console.log('hello')
})
