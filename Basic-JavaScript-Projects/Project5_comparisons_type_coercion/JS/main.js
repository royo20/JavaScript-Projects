//typeof will give the type of a variable 
document.write(typeof 30); 

//infinity and negative infinity
document.write(3E310); //infinity
document.write(-4E310) //negative infinity

//boolean logic 
document.write(200 > 100);
document.write(34 > 1234);

//using console.log method to display math operation results
console.log(3 + 2);
//boolean logic that is false using the console.log() method
console.log(10>11);

//type coercion
document.write(20 + "21"); 

//true and false with double equal signs
document.write(10==(5+5));
document.write(20==1);

///triple equal sign 
//Return true by ensuring to match the data type and value
x = "Hi";
y = "Hi";
document.write(x===y);
//Return false by writing a different data type and different value
x = 15;
y = "cat";
document.write(x===y);
//Return false by writing a different data type but the same value for both
x = 3;
y = "three";
document.write(x===y);
//Return false by writing the same data type but a different value for both
x = 9;
y = 11;
document.write(x===y);

//logical operators
//utilize the AND operator to display true and false
document.write(11 > 5 && 12 > 1);
document.write(5 > 11 && 12 > 1);
//utilize the OR operator to display true and false
document.write(134 > 13 || 1 > 2);
document.write(13 > 134 || 1 > 2); 

//Not function true ans false
function notFunction() {
    document.getElementById("Not").innerHTML = !(11 > 1);
}

function not_function() {
    document.getElementById("not").innerHTML = !( 2 > 10);
}