//Variables declared within a JavaScript function, become LOCAL to the function.
//Local variables have Function scope: They can only be accessed from within the function.
//Local variables are deleted when the function is completed.

y = 10;
displayVariables = () => {
  var x = 5;
  z = 20;
  console.log("X: " + x); // code here CAN use both x and y 
  console.log("y: " + y);
  console.log("Z: " + z);//assigning value to a variable that has not been declared, will automatically become a GLOBAL variable.

}

displayVariables();
// console.log(x); // code here canot use x
console.log("y: " + y); // code here CAN use y due to globalScope
console.log("Z: " + z); //undeclared Variable




//In "Strict Mode", undeclared variables are not supported 

checkStrictMode = () => {
  "use strict";
  var x = 5;
  p = 20;
  console.log("P:" + p);

}

checkStrictMode();



