var mainDiv = document.getElementById("game");
var startDiv = document.getElementById("start");
var startButton = document.createElement("button");
var colors = ["#cd84f1","#ffcccc","#ff4d4d","#32ff7e","#7efff5","#18dcff"];
var interval;
var clickedButtonsIndex = new Array(6);
var sameColorSize = 0;
var previousColor = "#ffffff";

startDiv.appendChild(startButton);
setDivStyle(mainDiv,"480px", "330px", "fixed", "50%", "50%", "-100px", "-200px");
setDivStyle(startDiv, "150px", "75px", "fixed", "0px", "50%", "100px", "-35px");
setButtonStyle(startButton, "150px", "75px", "Start", "#95a5a6", "#ffffff", "20px", "none","0px"); 

for(count = 0 ; count < 6; count++){
    var button = document.createElement("button");
    button.setAttribute("id",count);
    button.addEventListener('click',function(e){
        buttonClick(e.path[0]);
    });
    setButtonStyle(button, "150px", "150px", "", colors[count], "#fffffff", "0px", "none", "5px");
    mainDiv.appendChild(button);
}

startButton.addEventListener("click",function(){
    if(interval == null){
        interval = setInterval(() => {
            for(var count = 0; count < buttons.length ; count++){
                if(clickedButtonsIndex[count] != count){
                    var randomNum = Math.floor(Math.random() * 6);
                    buttons[count].style.background = colors[randomNum];
                }
            }
            console.log(onMouseColor);
        }, 585);
    }
})

var buttons = mainDiv.children;

function buttonClick(button){
    if(clickedButtonsIndex[button.id] == null){
        sameColorSize++;
    }
    if(previousColor != button.style.background){
        previousColor = button.style.background;
        clickedButtonsIndex = [];
        sameColorSize = 1;
    }
    else{
        if(sameColorSize == 6){
            alert("BRAAAAAAAVO");
            clearInterval(interval);
            interval = null;
            clickedButtonsIndex = [];
            sameColorSize = 0;
        }
    }
    clickedButtonsIndex[button.id] = button.id;
}

function setButtonStyle(button, width, height, text, background, color, fontSize, border, margin){
    button.style.width = width; 
    button.style.height = height;
    button.innerHTML = text;
    button.style.background = background;
    button.style.color = color;
    button.style.fontSize = fontSize;
    button.style.border = border;
    button.style.margin = margin;
}

function setDivStyle(div, width, height, position, top, left, marginTop, marginLeft){
    div.style.width = width;
    div.style.height = height;
    div.style.position = position;
    div.style.top = top;
    div.style.left = left;
    div.style.marginTop = marginTop;
    div.style.marginLeft = marginLeft;
}