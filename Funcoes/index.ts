
function withOutReturn():void{
    console.log("Está função não tem retorno")
}

function greeting(name:string):string
{
    return `Olá ${name}`
}

function preGreeting(f: (name: string)=> string, username:string){
    console.log("Preparando a função");

    const great = f(username);

    console.log(great)
}

preGreeting(greeting, "juan")

// generic

function FirsElement<T>(arr:T[]):T{
    return arr[2];
}

console.log(FirsElement([1,2,3,4]))
console.log(FirsElement(["a","b","c","d"]))

//constraints




//rest operator

function sumALL(...n:number[]){
    return n.reduce((number, sum) => sum + number);
}