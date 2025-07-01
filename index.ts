let x: number = 10
let y:number = 5

console.log(x + y)


const z:number = 15.4984949

console.log(z)


//estudando string
 
let nome:string = "juan";

console.log(nome.toLowerCase())


//valores boleans

let a: boolean = false

console.log(a)

console.log(typeof a)



//programar em ts é como um pair programming

//ele sempre vai falar oque está errado

// inference é quando o typescript define o tipo de dados para nó


let inf = "test"


console.log("tipos primitivos");
// 1- array

let numbers: number[] = [1,2,3]

numbers.push(5)

console.log(numbers[2])

// outro modo para declarar array em type script

const nums: Array<number> = [100,20,50,70]

nums.push(300)

console.log(nums)


// o uso de any posso receber diversos tipos de dados


const arr1: any = [1, "test", true, [], {nome:"juan"}]

console.log(arr1)









// vamos brincar um pouco com o tipo de função 

function falar(diz:string){

    console.log(diz + "isso")

}

falar("estou apenas escrevendo")


function greeting(name:string){
    return `Olá ${name}`
}

console.log(greeting('juan'))
console.log(greeting('Sthephani'))



//função anonima

setTimeout(function(){
    const sallary: number = 1000;

    console.log(sallary)
},2000)

//tipos de objeto

function passCoordinates(coord: {x: number, y:number}){
    console.log("X coordinates:" + coord.x)
    console.log("x coordinates" + coord.y)
}



// para propriedades opcionais

function showNumber(a:number, b:number, c?:number){
    console.log("a" + a)
    console.log("b" + b)
    console.log("c" + c)

}
// para informar que vai ser opcional eu vou adicionar ? na frente da variável e antes de :tipagem


showNumber(1,2,3)




