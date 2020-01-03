let headerText = document.getElementById("header");

headerText.innerHTML = "S";

let toggled = false;

let count = 0;

setInterval(addDisplay, 500);

function addDisplay(){
    switch(headerText.innerHTML){
        case "S":
            count = 0;
            headerText.innerHTML += "e";
            break;
        case "Se":
            headerText.innerHTML += "b";
            break;
        case "Seb":
            headerText.innerHTML += " S";
            break;
        case "Seb S":
            headerText.innerHTML += "e";
            break;
        case "Seb Se":
            headerText.innerHTML += "l";
            break;
        case "Seb Sel":
            headerText.innerHTML += "l";
            break;
        case "Seb Sell":
            headerText.innerHTML += "s";
            break;
        case "Seb Sells":
            if(count <= 4){
               blink();
            }
            else{
                headerText.innerHTML = "S";
                headerText.style.color = "white";
            }
            count++;
            break;
    }
}

function blink(){
    if(headerText.style.color == "white"){
        headerText.style.color = "black";
    }
    else{
        headerText.style.color = "white";
    }
}

function toggleEffect(){
    if(toggled){
        headerText.innerHTML = "S";
        toggled = false;
    }
    else{
        toggled = true;
        headerText.innerHTML = "Seb Sells ";
    }
}