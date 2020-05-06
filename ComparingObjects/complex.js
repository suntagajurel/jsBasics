//......checking value of two objects ......................
isequal = (student1, student2) => {
    const student1Keys = Object.keys(student1);
    const student2Keys = Object.keys(student2);

    if (student1Keys.length !== student2Keys.length) {
        console.log("the  objects cannot be compared");
        return false;
    }

    for (let studentKey of student1Keys) {
        if (student1Keys[studentKey] !== student2Keys[studentKey]) {
            console.log("the object cannot be compared");
            return false;
        }
    }

    const student1Values = Object.getOwnPropertyNames(student1);
    const student2Values = Object.getOwnPropertyNames(student2);

    for (let studentValue of student1Keys) {
        if (student1Values[studentValue] !== student2Values[studentValue]) {
            console.log(student1Values[studentValue], student1Values[studentValue]);
            return false;
        }
    }

    console.log('the objects are equal');
    return true;

}

isequal(student1, student2);
