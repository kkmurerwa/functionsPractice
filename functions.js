// Function declaration Syntax
// keyword functionName () body
// Function has to return something
function fun1 () {
    return "Hello, World"
}

// Function call syntax
// Function name()
console.log(fun1())


// Functions that accept arguments
// This function outputs the values passed to the function
function addTwoNumbers(num_one, num_two){
    return num_one +" and " +num_two
}

// This function adds two numbers, saves the result in variable sum and returns the variable
function addTwoNumbers1(num_one, num_two){
    let sum = num_one + num_two
    return sum
}

// Returns sum without var
function addTwoNumbers2(num_one, num_two){
    return num_one + num_two
}

console.log("Add two numbers: " +addTwoNumbers2(1, 4));

// curly braces = {},  parenthesis = (), square brackets = []
function evenNumber(number) {
    if(number % 2 === 0){
        return true
    } else {
        return false
    }
}

// using ternary operators
function evenNumber2(number) {
    // syntax of ternary operator : return (condition) ? operations if true : operations if false
    // Ternary operators don't use return keyword inside the operator
    // Have to call the return keyword before the condition statement
    return (number % 2 === 0) ? true : false
}

// MOST COST-EFFICIENCT METHOD EVER!!!!
// It is possible to return the result of a boolean expression if the expected result is also boolean
function evenNumber3(number) {
    // Only return the result of our if condition check
    return (number % 2 === 0)
}

console.log("Is even: " +evenNumber3(23))

// Create a function that accepts marks out of 100 and returns the grade
// The grading system is as follows: A - 70-100, B - 60-69, C - 50-59, D - 40-49 F - 0-39
// Method 1: Using if statements
function grade(marks){
    if (marks > 70 && marks < 100){
        return 'A'
    } else if (marks > 60 && marks < 69){
        return 'B'
    } else if (marks > 50 && marks < 59){
        return 'C'
    } else if (marks > 40 && marks < 49){
        return 'D'
    } else if ((marks > 0 && marks < 39)) {
        return 'F'
    } else {
        return "Not within range"
    }
}

// using switch statement
function grade2(marks){
    // Switch statetement syntax: switch(variable){case 1, case 2...case n, default}
    switch(Math.floor(marks / 10)){
        case 9:
        case 8:
        case 7:
            return 'A'
            break
        case 6:
            return 'B'
            break
        case 5:
            return 'C'
            break
        case 4:
            return 'D'
            break
        case 3:
        case 2:
        case 1:
        case 0:
            return 'F'
            break
        default:
            if(marks > 100 || marks < 0){
                return 'Beyond Range'
            } else {
                return 'A'
            }
            break        
    }
}

console.log("Grade: " +grade2('-1'));


// Other function types in JS
// Hoisted function
// Syntax of hoisted function: variableDeclaration variableName = function keyword body
// Hoisted functions use function expressions in place of function declaration
// Function declarations have a function name eg. function fun1(param1, ){body}
// Function expression has no function name eg. function (param1, param2){body}
// Function expression cannot stand on its own

// Function declaration
function funDec(){
    return 0
}

// Function expression attached to a variable == hoisted function
let hoistedFunc = function (){
    return 'Hello, hoisted function'
}

console.log(hoistedFunc());

// ARROW FUNCTIONS
// Syntax (parameters) => body
// Like function expressions, arrow functions cannot stand on their own

// Example of arrow function inside map
[1, 2, 3, 4, 5].map(a => a+2)

// Using a varible to hold the results of an arrow function
// This is also an example of a hoisted function

// The hoisted function below return true if a passed number is even and false if its odd
let evenArrow = a => a % 2 === 0

console.log("Even arrow: " +evenArrow(4));


// Higher Order Functions (HOFs)
// The make performing operations easier
// Examples include map(), filter(), reduce(), reverse(), sort(), slice(), splice() etc.
// Mainly used to manipulate arrays
let arr = [1, 2, 3, 4, 5, 6]


console.log("Map results: " +arr.map(function (elem){return  " " +elem * elem}))

// Discuss constructors, Data structures(basics of OOP), Methods, in-built methods and HOF


