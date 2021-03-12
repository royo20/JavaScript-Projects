function getReceipt() {
    //this initializes our string so it can get passed from 
    //function to function, growing line by line intoa full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //here we're checking to see which size have been selected
    for (var i=0;i<sizeArray.length;i++) {
        //the checked roperty sets or returns the checked state of a checkbox
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: "+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

//vegi toppings

function getVegi(runningTotal,text1) {
    var vegiTotal = 0;
    var selectedVegi = [];
    var vegiArray = document.getElementsByClassName("vegi");
    //loop to check which vegi items are selected
    for ( var a=0;a<vegiArray.length;a++) {
        if (vegiArray[a].checked) {
            selectedVegi.push(vegiArray[a].value);
            console.log("Selected vegetable item: ("+vegiArray[a].value+")");
            text1 = text1+vegiArray[a].value+"<br>";
        }
    }
    var vegiCount = selectedVegi.length;
    if(vegiCount > 1) {
        vegiTotal = (vegiCount -1);
    } else {
        vegiTotal = 0;
    }
    runningTotal = (runningTotal + vegiTotal);
    console.log("total selected topping items: "+vegiCount);
    console.log(vegiCount+" topping -1 free topping = "+"$"+vegiTotal+".00");
    console.log("Vegi text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    
    document.getElementById("ShowText").innerHTML= text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
    runningTotal+".00"+"</strong></h3>";
    
};

//toppings

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j=0;j<toppingArray.length;j++) {
        if (toppingArray[j].checked) {
            //.push() method adds new items to the end of an array and returns the new length
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
var toppingCount = selectedTopping.length;
if (toppingCount > 1) {
    toppingTotal = (toppingCount -1);
} else {
    toppingTotal = 0;
}
runningTotal += toppingTotal;
//calling to add getVegi function
getVegi(runningTotal,text1);
runningTotal = (runningTotal + toppingTotal +vegiTotal);

console.log("total selected topping items: "+toppingCount);
console.log(toppingCount+" topping -1 free topping = "+"$"+toppingTotal+".00");
console.log("topping text1: "+text1);
console.log("Purchase Total: "+"$"+runningTotal+".00");
document.getElementById("ShowText").innerHTML= text1;
document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
    runningTotal+".00"+"</strong></h3>";
};

