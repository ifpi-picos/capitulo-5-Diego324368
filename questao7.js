function classificarTriangulo() {
    let lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
    let lado2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
    let lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Os lados devem ser maiores que zero.");
    } else if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            alert("O triângulo é equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            alert("O triângulo é isósceles.");
        } else {
            alert("O triângulo é escaleno.");
        }
    } else {
        alert("Os valores não formam um triângulo válido.");
    }
}
classificarTriangulo();