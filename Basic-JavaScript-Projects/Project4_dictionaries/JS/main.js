//kvp dictionary
function myDictionary() {
    var car = {               //start of kvp dictionary 
        brand: "tesla",         
        model: "model X",
        color: "white"
    };
    delete car.color;           //delete color kvp
    document.getElementById("dictionary").innerHTML = car.color;
}