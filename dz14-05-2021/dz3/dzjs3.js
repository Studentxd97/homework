var firstName=prompt("Enter firstname");
var lastName=prompt("Enter lastname");

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

alert('What\'s up ' + capitalizeFirstLetter(firstName) + ' ' + capitalizeFirstLetter(lastName));