function clock(){
    // THE FOLLOWING IS THE CODE FOR THE CLOCK
    let clockDisplay = document.getElementById("time");
    let hiddenDisplay = document.getElementById("hidden");
    let hourOnClock = prompt("Please enter the hour (If it's 2:30, type 2");
    let tenMinOnClock = prompt("Please enter the ten's place digit of time (If 2:30, type 3");
    let minuteOnClock = prompt("Please enter the one's place digit of time (If 2:30, type 0");
    let amPm = prompt("Please type either 'AM' or 'PM' (uppercase, no spaces)");
  
    if(hourOnClock.localeCompare("0") === 0){
        hourOnClock = 0;
    }
    else{
        hourOnClock = parseFloat(hourOnClock) || "Oakes";
    }

    if(tenMinOnClock.localeCompare("0") === 0){
        tenMinOnClock = 0;
    }
    else{
        tenMinOnClock = parseFloat(tenMinOnClock) || "Oakes";
    }

    if(minuteOnClock.localeCompare("0") === 0){
        minuteOnClock = 0;
    }
    else{
        minuteOnClock = parseFloat(minuteOnClock) || "Oakes";
    }
    

    if(typeof hourOnClock === "number" && typeof tenMinOnClock === "number" //validation of inputs
        && typeof minuteOnClock === "number" &&
        typeof amPm === "string" && (amPm.localeCompare("AM") === 0 || amPm.localeCompare("PM") === 0) 
        && tenMinOnClock <= 5 && minuteOnClock <= 9 && hourOnClock <= 12
       ){
            hiddenDisplay.innerHTML = hourOnClock + ":" + tenMinOnClock + minuteOnClock + amPm;
            hiddenDisplay.className = "";
            clockDisplay.className = "hide";
            setInterval(incrementMin, 60000);
        }
    else{
        alert("You entered the time incorrectly!");
    }

    function incrementMin(){
        if(minuteOnClock < 9){
            minuteOnClock++;
        }
        else if(tenMinOnClock < 5){
            tenMinOnClock++;
            minuteOnClock = 0;
        }
        else{
            tenMinOnClock = 0;
            minuteOnClock = 0;
            hourOnClock++;
            if(hourOnClock == 13){
                hourOnClock = 1;
            }
            if(hourOnClock == 12 && amPm.localeCompare("AM") == 0){
                amPm = "PM";
            }
            else{
                amPm = "AM";
            }
        }
        hiddenDisplay.innerHTML = hourOnClock + ":" + tenMinOnClock + minuteOnClock + amPm;
        hiddenDisplay.className = "";
        clockDisplay.className = "hide";
    }
    // END OF CODE FOR CLOCK
}