// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// let num1 = +prompt("Enter Number 1")
// let num2 = +prompt("Enter number 2")

// if(num1 > num2){
//     console.log("Number 1 is greater")
// }
// else{
//     console.log("Number 2 is greater")
// }

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign

// let num1 = +prompt("Enter a Number");

// if(num1>0){
//     alert("The sign is +")
// }
// else{
//     alert("The sign is -")
// }

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let a = +prompt("Enter Number 1")
// let b = +prompt("Enter number 2")
// let c = +prompt("Enter number 3")
// let d = +prompt("Enter number 4")
// let f = +prompt("Enter number 5")

// if (a>b && a>c && a>d && a>f)
// {
//     console.log("A is the larger " + a);
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     console.log("B is the larger " +b);
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     console.log("C is the larger " +c);
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     console.log("D is the larger " +d);
// }
// else
// {
//     console.log("F is the larger " +f);
// }

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

// for (let x = 0; x <= 15; x++) {

//     if (x === 0) {
//         console.log(x + " is even")

//     }
//     else if (x % 2 === 0) {
//         console.log(x + "is even")

//     }
//     else{
//         console.log(x + "is odd")
//     }

// }

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

// let students = [["Furqain", 80], ["Rehan", 77], ["Areeb", 88], ["Asad", 95], ["Shahrez", 68]]

// let AvgMarks = 0;
// let avg = (AvgMarks / students.length)

// for (let i = 0; i < students.length; i++) {
//     AvgMarks += students[i][1]

// }
// console.log("Average grade: " + (AvgMarks) / students.length);
// if (avg < 60) {
//     console.log("Grade: F");
// }
// else if (avg < 70) {
//     console.log("Grade: D")
// }
// else if (avg < 80) {
//     console.log("Grade: C")
// }
// else if (avg < 90) {
//     console.log("Grade: B")
// }
// else if (avg < 100) {
//     console.log("Grade: A")
// }

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i+ "FizzBuzz")
//     }
//     else if(i % 3 === 0){
//         console.log(i + "Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log(i + "Buzz")
//     }
//     else{
//         console.log(i)
//     }
// }

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.

// let x, y, char;

// for (x = 1; x <= 6; x++) {
//     for (y = 1; y < x; y++){
//         char = char+("*")
//     }
//     console.log(char);
//     char = "";
// }
