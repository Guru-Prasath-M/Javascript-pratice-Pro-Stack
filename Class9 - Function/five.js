//The BREAK statement ends of the loop where it appears and jump of it

let numbers = [10,20,25,40,50]
for(let num of numbers){
    if(num %2 !==0){
        break;
    }
    console.log(num); //10 20
    
}