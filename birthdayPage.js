var int = setInterval(changeColor,500);
var count = 0;

function changeColor() {
    if (count === 0){
        document.body.style.backgroundColor = "chartreuse";
    }
    else if (count === 1){
        document.body.style.backgroundColor = "yellow";
    }
    else if (count === 2){
        document.body.style.backgroundColor = "cyan";
    }    
    else if (count === 3){
        document.body.style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
        document.body.style.backgroundSize = "400% 400%";
        document.body.style.animation = "gradient 15s ease infinite"
        document.getElementById("all-contents").style.display = "block";
        document.getElementById("loading-screen").style.display = "none";
        clearInterval(int);
    }
    count ++;

}