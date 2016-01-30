/*var greeting = "Hello,";
var first_name = "Seth";
var last_name = "McOmber!";
var message1 = "Hey buddy, it's going to rain tomorrow.";
var message2 = "Don't forget to bring your rain pants.";
var goodbye = "Stay dry out there.";
var favorite_quote = "\"Four score...\"";//escape cahracter (backslash) adds literal character
var my_image1 = "<img src=\"images/image.jpg\" />";
var my_image2 = '<img src="images/image.jpg" />'; //use single quotes if you have a lot of single characters*/

// bad variable names (errors!!!)
//var first name = ""; //space
//var 2first_name = ""; //starts with number
//var math = ""; //js reserved keyword

//operators
//"=" asigns values
//"+=" adds to whatever the varaible currently has (concatenation assignment operator, with strings)

//output variables to the console
/* console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(goodbye);
console.log(favorite_quote); */

//console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + goodbye + " " + favorite_quote);//forcing spaces when concatenating

//The slogan of *progress* is changing from the *full* *dinner pail* to the *full* *garage*. - Herbert Hoover

var static_words1 = "The slogan of";
var static_words2 = "is changing from the";
var static_words3 = "to the";
var static_words4 = ". - Herbert Hoover";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)
{
    evt.preventDefault(evt);
  
    var element1 = document.getElementById("form1").elements.item(0).value;
    var element2 = document.getElementById("form1").elements.item(1).value;
    var element3 = document.getElementById("form1").elements.item(2).value;
    var element4 = document.getElementById("form1").elements.item(3).value;
    var element5 = document.getElementById("form1").elements.item(4).value;
    console.log(static_words1 + " " + element1 + " " + static_words2 + " " + element2 + " " + element3 + " " + static_words3 + " " + element4 + " " + element5 + static_words4);
}




