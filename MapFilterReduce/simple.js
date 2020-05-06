//......map,reduce and filter on array ..................

let arr = [1,2,3,4]

let arrMap = 
    arr.map(values =>  values+2
    );

let arrFilter = 
    arr.filter(arr => arr %2 ==0)

let arrReduce = arr.reduce((num1,num2)=>
{
    return num1+num2;
})

console.log(arrMap);
console.log(arrReduce);
console.log(arrFilter);