//On variable assignment, the scalar primitive values (Number, String, Boolean, undefined, null, Symbol) are assigned-by-value and 

var initialValue = 10;
var finalValue  = initialValue;
console.log("initialValue:"+initialValue);
console.log("finalValue:"+finalValue);

initialValue = 20;

console.log("initialValue:"+initialValue);
console.log("finalValue:"+finalValue);




//compound values (Object, Array) are assigned-by-reference
console.log("Pass By reference in Array");
var initialArr = [1,2,3,4];
var finalArr = initialArr;

initialArr.push(5);
console.log("initialArr: " +initialArr);
console.log("finalArr: " +finalArr);

finalArr = [2,3,4]; //value is reassigned (create new reference)
console.log("finalArr: " +finalArr);
console.log("initialArr: " +initialArr);