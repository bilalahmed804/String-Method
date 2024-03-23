//  Chapter 21-25
//Q.1
var firstName = prompt("Enter your first Name");
var lastName = prompt("Enter your Last Name");

alert("Asalam u alikum"+"\n"+ firstName + lastName);

//Q.2
var userInput = prompt("Your favorite Mobile phone")

alert("My favorite phone is: " +userInput + "<br>" + "lenght of string: " + userInput.length )

//Q.3
var word = "Pakistani"
document.write("string:" + word +"<br>")
var word_1 = word.indexOf("n")

document.write("Index Of 'n' "+ word_1 +"<br>");

//Q.4
var pharse_word = "Hello wOrld"
document.write("string:" + pharse_word +"<br>")
var word_$ = pharse_word.lastIndexOf("l")

document.write("Index Of 'l' "+ word_$);
//Q5


//Q6
var firstName = prompt("Enter your first Name");
var lastName = prompt("Enter your Last Name");

var fullName = firstName.concat(" ", lastName)
alert("Asalam u alikum"+"\n"+ fullName);

//Q7
var text = "Hyderabad"
var indexNumber = text.indexOf("Hyderabad");

var firstText = text.slice(0,indexNumber)
var replace = "Islamabad"

document.write(firstText + replace)

//Q8

var strNumber = "472";
document.write("Value:"+strNumber + "<br>")
document.write("type:"+typeof strNumber +"<br>"+"<br>")
var number = parseInt(strNumber);
document.write("Value: " + number + "<br>");
document.write("Type: " + typeof(number));
document.write("<br>"+"<br>")
//Q10
var userInput = "javascript"

console.log(userInput.toUpperCase());

var userInput = prompt("Enter first name:");
document.write("Capitalized input: " + userInput.toUpperCase(),"<br>","<br>");

var userInput = prompt("Enter second name:");
var titleCase = userInput.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
document.write("Title case input: " + titleCase);

