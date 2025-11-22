function updateClock(){
    let now = new Date();
    let time = now.toLocaleString();
    document.getElementById("clock").innerText = time;

}

setInterval(updateClock,100);
updateClock();