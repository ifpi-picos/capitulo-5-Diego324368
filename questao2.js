let num1 = parseInt(prompt("Digite o primeiro número: "))
let num2 = parseInt(prompt("Digite o segundo número: "))
let num3 = parseInt(prompt("Digite o terceiro número: "))
let numeroMaior

if (num1 > num2 && num1 > num3){
    console.log(`maior:${num1}`)
}else if (num1 > num2){
    console.log(`maior:${num2}`)
}else {
    console.log(`maior:${num3}`)
}