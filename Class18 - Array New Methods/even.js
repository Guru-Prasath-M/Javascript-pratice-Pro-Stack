//PRINT ALL EVEN NUMBERS USING WITHOUT FILTER

let numbers = [1,2,3,4,5,20,13]
let even_num = []
for(let num of numbers){
    if(num %2 === 0){
        even_num.push(num);
    }
}
console.log(even_num);
