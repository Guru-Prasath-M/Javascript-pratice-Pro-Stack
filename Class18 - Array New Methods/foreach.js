// let enames=["rahul","sonia","priyanka","modi"]
//create new employee array contain upper case names 
//using exting source - enames
// let new_enames=[]
// for(let ename of enames){
//     new_enames.push(ename.toUpperCase())
// }
// console.log(new_enames)



//USING NORMAL FUNCTION
//Foreach method is used to itreating the array and execute provided function but filter method will return UNDEFINED 

let enames=["rahul","sonia","priyanka","modi"]
enames.forEach(function enames(ename){
    console.log(ename.toUpperCase());
    
})