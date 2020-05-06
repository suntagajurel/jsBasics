let taskss = [
    {
        id: 1,
        duedate: 2,
        priority: "important",
        employees: {
            name: "sunita",
            address: "Balaju"
        },
    },
    {
        id: 2,
        duedate: 2,
        priority: "important",
        employees: {
            name: "sunita",
            address: "Balaju"
        }
    }

]

getTasks = () => {
    for (task of taskss) {
        var { duedate, employees } = task;
        var { name } = employees;
        console.log(duedate);
        console.log(name);

    }
}

getTasks();