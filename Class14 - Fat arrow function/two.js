let fullname  = (fname , lname) =>{
    return fname+lname;
}

let name1 = fullname("Guru","Prasath")
console.log(name1); //GuruPrasath

console.log(fullname("Har","ish")); //Harish
console.log(fullname(10,20)); //30