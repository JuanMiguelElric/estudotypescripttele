var x = 10;
var y = 5;
console.log(x + y);
var z = 15.4984949;
console.log(z);
//estudando string
var nome = "juan";
console.log(nome.toLowerCase());
//valores boleans
var a = false;
console.log(a);
console.log(typeof a);
//programar em ts é como um pair programming
//ele sempre vai falar oque está errado
// inference é quando o typescript define o tipo de dados para nó
var inf = "test";
console.log("tipos primitivos");
// 1- array
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// outro modo para declarar array em type script
var nums = [100, 20, 50, 70];
nums.push(300);
console.log(nums);
// o uso de any posso receber diversos tipos de dados
var arr1 = [1, "test", true, [], { nome: "juan" }];
console.log(arr1);
// vamos brincar um pouco com o tipo de função 
function falar(diz) {
    console.log(diz + "isso");
}
falar("estou apenas escrevendo");
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting('juan'));
console.log(greeting('Sthephani'));
