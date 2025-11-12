//OBJECT DESTRUCTURING:

let emp = {
    eid:101,
    ename:"Rahul",
    details:{
        email:"rahul@gmail.com",
        loc:"Delhi"
    }
}

// console.log(ename);  //Reference error
console.log(emp.ename); //Rahul

// console.log(loc);  //Reference error
console.log(emp.details.loc) //Delhi



