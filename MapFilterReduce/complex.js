//.............using map filter to find the important tasks and days to finish them ......

let tasks = [{
    id: 1,
    duedate: 2,
    priority: "important",
},
{
    id: 2,
    duedate: 1,
    priority: "important"
},
{
    id: 3,
    duedate: 5,
    priority: "mild"
},

]


let importantTask = tasks.filter(tasks => tasks.priority === "important").map((tasks) => {
    return tasks.duedate;
}).reduce((totaldays, date) => {
    return totaldays + date;
})


if (importantTask > 5) {
    console.log(" the tasks need to analysed with due dates");
}

else {
    console.log("the important tasks  takes only " + importantTask + " days lets finish it ");
}