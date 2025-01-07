function exibirNumerosImpares() {
    let numero = parseInt(prompt("Digite um número positivo:"));

    if (numero <= 0) {
        console.log("Por favor, digite um número positivo.");
    } else {
        for (let i = 1; i <= numero; i += 2) {
            console.log(i); 
        }
    }
}
exibirNumerosImpares();
