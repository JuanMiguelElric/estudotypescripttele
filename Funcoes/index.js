function withOutReturn() {
    console.log("Está função não tem retorno");
}
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(f, username) {
    console.log("Preparando a função");
    var great = f(username);
    console.log(great);
}
preGreeting(greeting, "juan");
// generic
function FirsElement(arr) {
    return arr[2];
}
console.log(FirsElement([1, 2, 3, 4]));
console.log(FirsElement(["a", "b", "c", "d"]));
