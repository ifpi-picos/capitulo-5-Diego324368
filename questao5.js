function main() {
    let escolha = prompt("Escolha a conversão:\n1. Celsius para Fahrenheit\n2. Fahrenheit para Celsius");

    if (escolha == 1) {
        let celsius = parseFloat(prompt("Temperatura em Celsius:"));
        alert(`${celsius}°C = ${(celsius * 9/5) + 32}°F`);
    } else if (escolha == 2) {
        let fahrenheit = parseFloat(prompt("Temperatura em Fahrenheit:"));
        alert(`${fahrenheit}°F = ${(fahrenheit - 32) * 5/9}°C`);
    } else {
        alert("Opção inválida.");
    }
}

main();
