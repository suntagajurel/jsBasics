
let student1 = {
    name: "Sunita",
    address: "Balaju"
};

let student2 = {
    name: "Sunita",
    address: "Balaju",
    // contactNo: 9840567890
}

//easiest method
console.log(JSON.stringify(student1) === JSON.stringify(student2));

// objects to be compared have properties entered in the same order, comparison will work just fine, 
// where the order has changed, the equality fails.



