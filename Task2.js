/* Program for Task 2*/
// A program to understand string library functions

//getting firstname and lastname from user
var firstName = prompt("Enter the first Name : ")
var lastName = prompt("Enter Your Last name")

//adding firstname and lastname
var fullName = firstName + lastName;

//printing the full name
document.write("Fullname is : " + fullName + "<br/>")

//printing the length of full name
document.write("Length of full name : " + fullName.length + "<br/>")

//printing the full name in uppercase
document.write("Uppercase Full name : " + fullName.toUpperCase())