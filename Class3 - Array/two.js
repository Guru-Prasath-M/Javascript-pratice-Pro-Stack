var enames = ["Rahul" , "Priyanka" , "Sonia" , "Modi"]
//index value   0           1           2        3
console.log(enames[0])     //Rahul
console.log(enames[1])     //Priyanka
console.log(enames[2])     //Sonia
console.log(enames[3])     //Modi
console.log(enames[4])     //Undifined
console.log(enames[-5])    //Undifined

console.log(typeof enames) //Object


//UPDATEING - ARRAY ELEMENT :

enames[0] = "Rahul Gandhi"
console.log(enames)   //Rahul Gandhi

//DELETING - ARRAY ELEMENT USING DELETE KEYWORD

delete enames[3]
console.log(enames)

