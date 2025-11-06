// let current_Time = new Date().toLocaleTimeString()
// document.getElementsByTagName('p')[0].innerHTML = current_Time

//Inbuilt Function

setInterval(()=>{
    document.getElementsByTagName('p')[0].innerHTML = new Date().toLocaleTimeString()
})