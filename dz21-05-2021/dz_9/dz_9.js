var x = +prompt("x", 0);
var error;

switch (x) {
    case 0: error = "Nein";
    break;
    case 1: error = "Waste";
    break;
}

if (error) {
    alert(error);
} else { 
    alert(100 / x);
}