let array = [1,2,3,4,5,2,3,1,4]
for(let i=0 ; i<array.length;i++){
    if(array.indexOf(array[i]) !==i){
        console.log(array[i]);
        
    }
}