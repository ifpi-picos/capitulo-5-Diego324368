function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

    if (numero < 0) {
        console.log("Fatorial não existe para números negativos.");
    } else {
        let fatorial = 1;

        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }

        console.log("O fatorial de " + numero + " é " + fatorial);
    }
}

calcularFatorial();
