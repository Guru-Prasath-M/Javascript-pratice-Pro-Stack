//USING SPREAD OPERATOR

let numbers = [1,2,3,4,5]
let num_numbers = [...numbers]
console.log(num_numbers);


//NORMAL FUNCTION

let numbers1 = [10,20,30,40,50,10]
//create new array based on existing array?
let new_eids = []
for (let num of numbers1){
    new_eids.push(num);
}
console.log(new_eids);

