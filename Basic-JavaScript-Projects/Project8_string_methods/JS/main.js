//concatenate function to connect srtings 
function concatenate() {
    var part_1 = "Hello, ";
    var part_2 = "how is ";
    var part_3 = "it going?"
    var addup_string = part_1.concat(part_2, part_3);
    document.getElementById("connect").innerHTML = addup_string;
}

//slice method to cut out and display from a string
function slice_function() {
    var string = "Today is sunny!"
    var cut_out = string.slice(0, 5);
    document.getElementById("slice").innerHTML = cut_out;
}

//uppercase method to convert a string into uppercase letters
function uppercase_letters() {
    var word = "Hello";
    var result = word.toUpperCase();
    document.getElementById("uppercase").innerHTML = result;
}

//search method to find and print the position of a specified
// value in a string
function search_method() {
    var sentence = "Today is crazy!";
    var x = sentence.search("crazy");
    document.getElementById("search").innerHTML = x;
}

//String method to return a number as a string
function string_function() {
    var x = 12;
    document.getElementById("number_to_string").innerHTML = x.toString();
}

//precision method to specifie the length of a number
function precision_function() {
    var a = 1234567.89876543210;
    document.getElementById("precision").innerHTML = a.toPrecision(10);
}

//fixed function to display string in teletype text
function fixed_function() {
    var str = "Hello! How are you today?";
    var teletype_text = str.fixed();
    document.getElementById("fixed").innerHTML = teletype_text;
}

//valueOf method to return primitive value of a string object
function valueOf_function() {
    var str = "We are in the second month of 2021";
    var res = str.valueOf();
    document.getElementById("valueOf").innerHTML = res;
}