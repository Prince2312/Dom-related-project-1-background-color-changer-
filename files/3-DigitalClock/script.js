const clock = document.getElementById('clock')

setInterval(function(){
    let date =  new Date()
    console.log(date.toLocaleString());
    clock.innerText = date.toLocaleString();
},1000)

