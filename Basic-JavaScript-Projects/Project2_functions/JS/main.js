function myFunction() {
    var str = "This is green text";
    var result = str.fontcolor("green");
    document.getElementById("green-text").innerHTML = result;
}

function conFunction() {
    var sentence = "It is";
    sentence += " very cold";
    document.getElementById("concatenate").innerHTML = sentence;
}