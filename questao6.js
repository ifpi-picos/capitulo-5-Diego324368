function verificarMultiplos() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));

    if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
        alert("Pelo menos um dos números é múltiplo do outro");
    } else {
        alert("Nenhum dos números é múltiplo do outro");
    }
}
verificarMultiplos();