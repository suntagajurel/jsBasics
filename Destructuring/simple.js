
let a, b, rest;
[a, b] = [10, 20];

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

let tasks = {
    id: 1,
    duedate: 2,
    priority: "important",

}

var { id, duedate, priority } = tasks;
console.log(priority);