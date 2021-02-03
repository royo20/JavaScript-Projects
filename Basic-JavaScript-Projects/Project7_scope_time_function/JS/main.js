//global variable
var x = 100
function gol_subtract() {
    document.write(x - 50);
}
gol_subtract();

//local function
function loc_subtract() {
    var x = 10;
    document.write(20 -x);
}
loc_subtract();

//function with an error and use console.log() method to debug
function error_function() {
    console.log(y + 1);
}
error_function();  //results within Chrome Dev Tools

// if statement that utilizes the new Date().getHours() method
function if_function() {
    if (new Date().getHours() > 12 ) {
        document.getElementById("my_func").innerHTML = "How are you?";
        }
}

// if statement to see if you're old enough to drive
function my_if_statement() { 
    var age = 20;
    if ( age > 16) {
         document.getElementById("driving_age").innerHTML = "You can drive";
    }
}

//vote function to see if you're old enough to vote
function vote_function() {
     var Age = document.getElementById("age").value;
    if(Age >= 18) {
        vote = "you're old enough to vote";
    }
    else {
        vote = "you're not old enough to vote";
    }
    document.getElementById("how_old_are_you?").innerHTML = vote;
}

//time function to get time 
function time_function() {
    var time = new Date().getHours();
    var reply;

    if (time < 12 == time > 0){
        reply = "It's the morning";
    }
    else if (time > 12 == time < 18) {
        reply = "It's afternoon";
    }
    else {
        reply = "It's evening time";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}