var number = Math.round(Math.random() * 100);

var choice = prompt("Hello, if you want to play the game please click OK!");

while (choice !== number) {

    choice = prompt("Plaease enter the number from 0 to 100", "0");

    if (number == choice) {

        choice = prompt("You are choose the win number!");
    } 

    if (number < choice) {

        choice = prompt("The number is lower, please try again!");

    } else if (number > choice) {

        choice = prompt("The nubmer is higher, plaese try again!");
    } else {
        
        break
    }

    }
