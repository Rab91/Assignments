var number1 = 50;
var number2 = 50;
var sum, sub, mul, division;

document.getElementById("n1").innerHTML = "Number 1 &nbsp:&nbsp" + number1;
document.getElementById("n2").innerHTML = "Number 2 &nbsp:&nbsp" + number2;

//add
if (number1 > number2 || number1 < number2) {
    sum = number1 + number2;
    console.log(sum);
    document.getElementById("add").innerHTML =
        "<b>Sum</b> of two numbers is &nbsp:&nbsp" + sum;
} else if (number1 == number2) {
    sum = number1 + number2;
    console.log(sum);
    document.getElementById("add").innerHTML =
        "<b>Sum</b> of two equal numbers &nbsp:&nbsp" + sum;
} else {
    console.log("can't perform addition");
}

//sub
if (number1 > number2) {
    sub = number1 - number2;
    document.getElementById("sub").innerHTML =
        "<b>Subtraction</b> of number 1 and number 2 &nbsp:&nbsp" + sub;
} else if (number1 < number2) {
    sub = number2 - number1;
    document.getElementById("sub").innerHTML =
        "<b>Subtraction</b>  of number 2 and number 1 &nbsp:&nbsp" + sub;
} else {
    document.getElementById("sub").innerHTML="<p>When two numbers are same, value is zero for subtraction</p>";
    console.log("can't perform subtraction");
}

//multiplication
if (number1 == number2 || number1 > number2 || number1 < number2) {
    mul = number1 * number2;
    document.getElementById("mul").innerHTML =
        "<b>Multiplication</b> of number 1 and number 2 is &nbsp:&nbsp" + mul;
}  
else {
    console.log("can't perform multiplication");
}
// division
if (number1 > number2) {
    division = parseInt(number1) / parseInt(number2);
    document.getElementById("division").innerHTML =
        "<b>Division</b> of number 1 and number 2 &nbsp:&nbsp" + division;
} else if (number1 < number2) {
    division = parseInt(number2) / parseInt(number1);
    document.getElementById("division").innerHTML =
        "<b>Division</b> of number 2 and number 1 &nbsp:&nbsp" + division;
} else {
    document.getElementById("division").innerHTML="<p>undefined when two numbers are same for division</p>";
    console.log("can't perform division");
}
