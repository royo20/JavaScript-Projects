//Uariety of different programs

//utilizing the ternaty operator
//function for height requirement
function Ride_Function() {
    var height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height<52)?"you're too short":"you're too tall"; 
    document.getElementById("Ride").innerHTML = can_ride + " to ride.";
} 

//vote function
//a function to see if someone is old enough to vote 
function voteFunction() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = ( age < 18) ? "you're too young to vote":"you're old enough to vote";
    document.getElementById("vote").innerHTML = can_vote;
}

//utilizing new keyword 
//creating a class
function phone(Brand, Modle, Color) {
    this.phone_Brand = Brand;
    this.phone_Modle = Modle;
    this.phone_Color = Color;
}
//creating constructors of the class phone
var Rojina = new phone("iphone", "XS Max", "white");
var Katlyn = new phone("Samsung", "Galaxy A71", "black");
//function new for printing results
function newFunction() {
    document.getElementById("New_and_This").innerHTML
    = "Rojina has an " + Rojina.phone_Brand + " " + Rojina.phone_Modle + " in the color " + Rojina.phone_Color + ".";
}

//nested function
function nestedFunction() {
    document.getElementById("nest").innerHTML = add();
    function add() {
        var number = 12;
        function results() {number += number;}
        results();
        return number; 
    }
}