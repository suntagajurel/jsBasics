
//.....displays first student by merging objects .......

let studentF = { 
    name: "Sunita",
    address: "Balaju" ,
    roll: 1
};
let studentS = { 
    name: "Sunit",
    address: "Nuwakot" ,
    roll: 2
};

const merge = ( ...students ) => ( { ...students } );//it spreads an array of arguments into the object literal

let mergedStudent1 = merge (studentF, studentS);
console.log(mergedStudent1)

let mergedStudent2 = merge ({}, studentF, studentS);
console.log(mergedStudent2)

displayFirstStudent =(...args) => {
    for (student of args ){
        if (student.roll =1 ){
            console.log(student)
        }
        break;
       
    }
}

displayFirstStudent(studentF,studentS);