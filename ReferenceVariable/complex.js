//store a scalar primitive value through assign-by-reference

//wrapping the scalar primitive value in a compound value (Object, Array) as its property value.


var student ={
    name:"sunita",
    address:"Balaju",
}

changeName = (student) => {
    student.name ="Sunita Gajurel";
}

changeName(student);
console.log(student.name);

var  students = [
    {
      name: "sunita",
      address: "balaju",
      rollNo: 0
    },
    {
      name: "Sangita",
      address: "balaju",
      rollNo: 0
    },
    {
      name: "Indira",
      address: "balaju",
      rollNo: 0
    }
  ];

  
 changeRollNo = (students) => {
    for (let i=0; i<students.length; i+=1) {
        students[i].rollNo = i+1;
        console.log(students[i])
       }
 }

 changeRollNo(students)
   
 console.log(students);
   