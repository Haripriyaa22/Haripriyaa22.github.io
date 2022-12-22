document.addEventListener("DOMContentLoaded", function () {
    var Days = document.getElementById("days");
    var Hours = document.getElementById("hours");
    var Minutes = document.getElementById("minutes");
    var Seconds = document.getElementById("seconds");
    var giftbox = document.getElementById("giftbox");

    let currentTime = new Date();
    let yearOfTheEvent = currentTime.getFullYear();
    let eventDate = new Date(yearOfTheEvent, 11, 22);
    const isDecember22th =
        currentTime.getMonth() === 11 && currentTime.getDate() === 22;

    function countdown() {
        const now = new Date();

        if (now > eventDate) {
            eventDate = new Date(yearOfTheEvent + 1, 11, 22);
        } 
        else if (now.getFullYear() === eventDate.getFullYear() + 1) {
            eventDate = new Date(now.getFullYear(), 11, 22);
        }

        const currentTime = now.getTime();
        const eventTime = eventDate.getTime();
        const remainingTime = eventTime - currentTime;

        let seconds = Math.floor(remainingTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        if (days < 10){
            days = "0"+days;
        }
        if (hours < 10){
            hours = "0"+hours;
        }
        if (minutes < 10){
            minutes = "0"+minutes;
        }
        if (seconds < 10){
            seconds = "0"+seconds;
        }

        if (isDecember22th) {
            document.getElementById("lockedgift").style.display = "none";
            giftbox.style.display = "block";
        } else {
            // giftbox.style.display = "none";
            Days.innerHTML = days;
            Hours.innerHTML = hours;
            Minutes.innerHTML = minutes;
            Seconds.innerHTML = seconds;

            setTimeout(countdown, 1000);
        }
    }
    countdown();
});

document.getElementById("lockedgift").addEventListener('click',()=>{
    alert("Wait pannu girl birthday varaikum💘.\nAdvance Happy Birthday Girl💝");
})