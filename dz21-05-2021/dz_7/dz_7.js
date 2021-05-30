var date = new Date();
var month = date.getMonth();
// let c = +prompt()
switch (month) {
    case 0: case 1: case 11:
        alert("Winter");
        break;
    case 2: case 3: case 4:
        alert ("Spring");
        break;
    case 5: case 6: case 7:
        alert("Summer");
        break;
    case 8: case 9: case 10:
        alert("Atumn");
        break;
};