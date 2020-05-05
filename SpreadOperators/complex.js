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

let arr1 = [1,2,3,4];
let min = Math.min(...x) ;
console.log(min);


displayFirstStudent =(...args) => {
    for (student of args ){
        if (student.roll =1 ){
            console.log(student)
        }
        break;
       
    }
}

displayFirstStudent(studentF,studentS);