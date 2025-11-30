let numbers = [2,5,3,7,9,40];

function myFunction(num) {
    return num * 10;
}
let newNumbers = numbers.map(myFunction)
document.getElementById("result").innerHTML = newNumbers;