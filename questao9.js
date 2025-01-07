function calcularIMC() {
    let peso = parseFloat(prompt("Digite seu peso (em kg):"));
    let altura = parseFloat(prompt("Digite sua altura (em metros):"));

    let imc = peso / (altura * altura);

    console.log("Seu IMC é: " + imc.toFixed(2));

    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    console.log("Classificação: " + classificacao);
}

calcularIMC();
