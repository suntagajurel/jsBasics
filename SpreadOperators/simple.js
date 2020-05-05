
//spreadOperators are used to copy and merge arrays or objects .
//allows us the privilege to obtain a list of parameters from an array
var initialArr = [1,2,3,4]
var copyInitialArr = [...initialArr];
console.log("Copied Array" + copyInitialArr);



var x = [1,2,3,4];
var y = [5,6,7,8];
var m = x.concat(y);
var z = [...x,...y]; //works slower // not used for large datasets 
console.log("Merged Array" + z);
console.log("Merged Array" + m);

var student1 = { 
    name: "Sunita",
    address: "Balaju" 
};
    
var student2 = {
    name: "Sunit",
    address: "Nuwakot" ,
    contactNo:1234
}

var allStudents = {...student1,...student2};
console.log(allStudents); // object cannot have same key.






