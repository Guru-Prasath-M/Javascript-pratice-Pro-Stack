//USING ASYNC AND AWAIT

async function display_users(){

     await fetch("https://dummyjson.com/products")
    .then((resp)=> {return resp.json()})
    .then((data)=>{
        let rows = ''
        console.log("GM");
        let product = data.products
        for(let user of product){
            console.log("GA");
            
              rows = rows + `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.category}</td>
                            <td>${user.price}</td>
                        </tr>`
        }
        document.getElementById("tb_body").innerHTML = rows
    })
   .catch((err)=>{console.log(err);
   })
}