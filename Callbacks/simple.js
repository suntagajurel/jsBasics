//callback
//passing function as parameter to ensure that program behaves in asynchronous way ;

let add = (a, b) => {
    return a + b;
}

let multiply = (a, b) => {
    return a * b;
}

let calculate = (num1, num2, callback) => {
    return callback(num1, num2);

}

console.log("the sum is " + calculate(10, 20, add));
console.log("the product is" + calculate(5, 6, multiply));