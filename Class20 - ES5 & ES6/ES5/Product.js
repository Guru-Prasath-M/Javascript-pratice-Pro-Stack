let pname = "Marker Pen"

class Product{
    constructor(){
        console.log("Product Class Constructor");       
    }
}

//default export
module.exports = pname;

//named export
// module.exports={pname,Product}