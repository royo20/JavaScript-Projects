//whlie loop function to count down from 10 to 1
function WhileloopFunction(){
    var digit = "";
    var x  = 10;
    while( x > -1) {
        digit += "<br>" +x;
        x--;
    }
    document.getElementById("loop").innerHTML = digit;
 }

 //string length property to count the number of characters in a string
 function countFunction() {
     var str = "Hello there!";
     var a = str.length;
     document.getElementById("count").innerHTML = a;
 }

 //for loop function 
 var animals = [ "Dog", "Zebra" ,"Lion" , "Frog", "Cow", "Mouse" ];
 var content = "";
 var x;

 function ForloopFunction() {
    for(x=0;x<animals.length;x++) {
        content += animals[x] + "<br>";
    }
    document.getElementById("list").innerHTML = content;
 }

 //array function 
 function arrayFunction(){
    var pic = []; //creating an array 
    pic [0] = "spring";
    pic [1] = "summer";
    pic [2] = "fall ";
    pic [3] = "winter";
   document.getElementById("pics").innerHTML = 
   "Here are some pictures of Oregon in " + pic[0] + ", " + pic[1] + ", " + pic[2] + "and " + pic[3] + ".";
 }

 //constant  
 const Car = {brand:"Tesla", color:"white", modle:"X"}; //creating an object

 //constant function 
 function constant_function(){
    //Change a property’s value
    Car.color = "Red";
    //Add a property with a value.
    Car.price = "free";
     document.getElementById("constant").innerHTML = 
      "This is a " + Car.brand + " modle " + Car.modle + " in " 
      + Car.color + ". This modle is currently " + Car.price + ".";
 }

//creating an object using the let keyword
let patient = {
    Name:"Katlyn", 
    LastName:"Smith", 
    Age:"25",
    MemberSince:"2015",
    description: function() {
        return this.Name + " " +this.LastName + 
        " is one of our patients and she's been a member since " 
        + this.MemberSince + ".";
    }
 };
 document.getElementById("patients").innerHTML = patient.description();

 //break statement loop
 var number = "";
 var i;
 for(i=0;i<20;i++){
     if(i===10){break;}
     number += "The number is " + i + "<br>";
 }
 document.getElementById("break").innerHTML = number;

 //continue statement loop 
 var not_this_number = "";
 var i;
 for(i=0;i<6;i++){
     if(i===2){continue;}
     not_this_number += "The number is " + i +"<br>";
 }
 document.getElementById("skip").innerHTML = not_this_number;