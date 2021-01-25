//addition function
function addFunction() {
    var addition = 1+1;
    document.getElementById("addition").innerHTML="1+1= " +addition;
}

//subtraction function
function subFunction() {
    var subtraction = 5-2;
    document.getElementById("subtraction").innerHTML= "5-2= " + subtraction;
}

//multiplication function
function multiplication() {
    var multiply = 2 *2;
    document.getElementById("math").innerHTML= "2*2=" + multiply;
}

//divition function
function division() {
    var divide = 4 / 2;
    document.getElementById("simple_math").innerHTML= "4/2=" +divide;
}

//multiple math operations function
function math() {
    var mathOperation = (10+5)*10/2-111;
    document.getElementById("operation").innerHTML="(10+5)*10/2-111=" +mathOperation;
}

//negation operator function
function negation_operator() {
    var x = 20;
    document.getElementById("negation").innerHTML= -x;
}

//increment & decrement 
var x = 20;
x++; //increment by 1
document.write(x);
x--; //decrement by 1, which will return to original value
document.write(x);

//random number
window.alert(Math.random()  * 5);

//JavaScript math object 
function power() {
    document.getElementById("pow").innerHTML = Math.pow(4, 2);
}