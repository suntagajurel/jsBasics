let addNo =(outer)=> {
    
    let addtwo = (inner) => {
        return (inner+outer)
    }

    return addtwo ;

}

console.log(addNo(2))

let addThree =  addNo(2);

console.log(addThree(3));