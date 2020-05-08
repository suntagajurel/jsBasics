// ES2015 introduced two important new JavaScript keywords: let and const 
//BlockScope

displayValue = () => {
    let x = 20;
    console.log("X: " + x);
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // console.log(i); //i IS ONLY DEFINED INSIDE THE BLOCK
}

displayValue();

// checking the value of redeclared variable
checkReDeclarationUsingVar = () => {
    var x = 2;
    console.log("X: " + x);
    {
        var x = 5;
    }

    console.log(`using  var : ${x}`); // value of x changes outside block i.e x = 5;
}

checkReDeclarationUsingVar();

checkReDeclarationUsingLet = () => {
    let x = 2;
    console.log("X: " + x);
    {
        let x = 5;
    }

    console.log(`using  let : ${x}`);// value of x doesnot changes outside block x =2
}

checkReDeclarationUsingLet();

checkReDeclarationUsingConst = () => {
    const x = 2;
    console.log("X: " + x);
    {
        const x = 5;

    }

    console.log("X: " + x);// since x is const its value is static it cannot be changed.
}

checkReDeclarationUsingConst();

//const does NOT define a constant value. It defines a constant reference to a value.
const student = { name: "Sunita", address: "Balaju" };

// You can change a property:
student.name = "Sangita";

// You can add a property:
student.address = "Nuwakot";

console.log("Student:" + student)

// WE can NOT reassign a constant object

student = { name: "Sunit", address: "Balaju" }; //error
