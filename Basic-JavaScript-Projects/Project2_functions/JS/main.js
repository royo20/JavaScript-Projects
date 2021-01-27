function myFunction() { //font color function
    var str = "This is green text"; //assigning a variable 
    var result = str.fontcolor("green"); //changing the font color of the string 
    document.getElementById("green-text").innerHTML = result;
}

function conFunction() { //concatenate function
    var sentence = "It is"; //assign a variable 
    sentence += " very cold"; //concatenate
    document.getElementById("concatenate").innerHTML = sentence;
}