// Task 1 
document.getElementById("hello").textContent = "Hello, World!";

//task 3
function calculateSquareRoot() {
    var num = document.getElementById("num").value;
    var squareRoot = Math.sqrt(num);
    document.getElementById("output0").innerHTML = "Square Root: " + squareRoot;
}
//Task 4
function checkEvenOrOdd() {
    var number = document.getElementById("numIn").value;
    var result = document.getElementById("result3");
    
    if (number % 2 === 0) {
        result.textContent = number + " is even.";
    } else {
        result.textContent = number + " is odd.";
    }
}

//Task 5
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").textContent = "Random Number: " + randomNumber;
}

//task 6
function findLargest() {
    var num1 = parseFloat(document.getElementById("largenum1").value);
    var num2 = parseFloat(document.getElementById("largenum2").value);
    var num3 = parseFloat(document.getElementById("largenum3").value);
    var result = document.getElementById("large");
    var largest = Math.max(num1, num2, num3);
            result.textContent = "The largest number is " + largest + ".";
        }


//task 7
     function myname(){
        var name = document.getElementById("nameContainer").value;
        var times = 20;

        document.getElementById("output").innerHTML = (name + "<br>").repeat(times);
     }
            
//task 8
function checksamedigits() {
    var num1 = document.getElementById("val1").value;
    var num2 = document.getElementById("val2").value;
    var num1Digits = num1.split('').sort().join('');
    var num2Digits = num2.split('').sort().join('');
    if (num1Digits === num2Digits) {
        document.getElementById("output2").innerHTML = "Yes, they have the same digits!";
    } else {
        document.getElementById("output2").innerHTML = "No, they don't have the same digits.";
    }
   
}

//taks 9
function replaceChar() {
    var str = document.getElementById("input").value;
    var oldChar = document.getElementById("oldChar").value;
    var newChar = document.getElementById("newChar").value;
    var replaced = str.split(oldChar).join(newChar);
    document.getElementById("output3").innerHTML = replaced;
}

//task 10
function appendArrays() {
    var a = document.getElementById("a").value.split(",");
    var b = document.getElementById("b").value.split(",");
    var c = a.concat(b);
    document.getElementById("output4").innerHTML = "Array c: " + c.join(", ");
}

