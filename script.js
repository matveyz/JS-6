var number = Math.round(Math.random() * 100);

var choice;

while (choice !== number) {

    choice = parseInt(prompt("Please enter the number from 0 to 100"));

    if (number < 0 || number > 100) {

         alert("Number should be from 0 to 100, please try again!")
    } else if (number == choice) {

         confirm("You are choose the win number! Do you want to play one more time or no ?");

    } else if (number < choice) {

         alert("The number is lower, please try again!");

    } else if (number > choice) {

         alert("The nubmer is higher, plaese try again!");
    } else {

        break;
    }

}
