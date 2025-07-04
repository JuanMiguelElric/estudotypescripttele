
// criando interface com type

interface Product {
    name: string,
    price: number,
    isAvaliable:true
}


function showProductDetails(product: Product){

    console.log(`o nome do produto é ${product.name} o seu preço é R$ ${product.price}`)

}


const shirt:Product = {
    name:"camisa",
    price:19,
    isAvaliable: true
   
}


// propriedades opcionais em interface

interface User{
    email:String,
    role?:string,

}

function showUserDetails(user:User){

}