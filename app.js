// inquirer(questions, callback);


var inquirer = require("inquirer");
console.log(inquirer);

funtion basic (front, back)
// var fs = require('fs');;
this.front = front;
this.back = back;
this.error= "Wrong action here";

//stuff on flashcards
var questions ="";
var answers ="";
var qasked = 0;

var askQ = function(question)
{
  if (question < 2)
    { inquirer.prompt({
      "What?"
    })}
}





// if (input1 === "basic") {

//   var basic = require("./basicCard");
//   basic();


// } else if (input1 === "cloze") {

//   var cloze = require("./clozeCard");
//   cloze();

// } else {

//   console.log("This is not a function of this app!");
// };
