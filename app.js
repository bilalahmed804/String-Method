// //  Chapter 21-25
// //Q.1
// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your Last Name");

// alert("Asalam u alikum"+"\n"+ firstName + lastName);

// //Q.2
// var userInput = prompt("Your favorite Mobile phone")

// alert("My favorite phone is: " +userInput + "<br>" + "lenght of string: " + userInput.length )

// //Q.3
// var word = "Pakistani"
// document.write("string:" + word +"<br>")
// var word_1 = word.indexOf("n")

// document.write("Index Of 'n' "+ word_1 +"<br>");

// //Q.4
// var pharse_word = "Hello wOrld"
// document.write("string:" + pharse_word +"<br>")
// var word_$ = pharse_word.lastIndexOf("l")

// document.write("Index Of 'l' "+ word_$);
// //Q5
// var three_word = "Pakistani"
// document.write("<h3 style='color:blue; display:inline;'>String :</h3> " + three_word +"<br>")
// var word_$ = three_word.indexOf("i")

// document.write("<h3 style='color:blue; display:inline;'>Character at index 3 : </h3>"+" i");

// //Q6
// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your Last Name");

// var fullName = firstName.concat(" ", lastName)
// alert("Asalam u alikum"+"\n"+ fullName);

// //Q7
// var text = "Hyderabad"
// var indexNumber = text.indexOf("Hyderabad");

// var firstText = text.slice(0,indexNumber)
// var replace = "Islamabad"

// document.write(firstText + replace)

// //Q8

// var message = "Ali and Sami are best firends. The play circket and football together ";

// var indexNumber = message.replaceAll("and", "&")
// console.log(indexNumber);


// //Q.9

// var strNumber = "472";
// document.write("Value : "+strNumber + "<br>")
// document.write("type : "+typeof strNumber +"<br>"+"<br>")
// var number = parseInt(strNumber);
// document.write("Value : " + number + "<br>");
// document.write("Type : " + typeof(number));
// document.write("<br>"+"<br>")


// //Q10
// var userInput = "javascript"

// console.log(userInput.toUpperCase());

// var userInput = prompt("Enter first name:");
// document.write("Capitalized input: " + userInput.toUpperCase(),"<br>","<br>");

// var userInput = prompt("Enter second name:");
// var titleCase = userInput.toLowerCase().replace(/\b\w/g, function (char) {
//     return char.toUpperCase();
// });
// document.write("Title case input: " + titleCase);

// Q12
var num3 = 35.36
document.write("<h3 style='color:blue; display:inline;'>Number : </h3>"+num3);
document.write("<br />")
var num = 3536
document.write("<h3 style='color:blue; display:inline;'>Result : </h3>");
document.write(num);


