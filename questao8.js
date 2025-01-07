function escolherPrato() {
    let escolha = prompt("Escolha um prato: Pizza, Hambúrguer, Salada ou Macarrão");

    switch (escolha.toLowerCase()) {
        case "pizza":
            console.log("Pizza: R$ 40,00\nDescrição: Pizza de frango com queijo.");
            break;
        case "hambúrguer":
        case "salada":
            console.log("Salada: R$ 15,00\nDescrição: Salada com alface e tomate.");
            break;
        case "macarrão":
            console.log("Macarrão: R$ 25,00\nDescrição: Macarrão ao molho branco.");
            break;
        default:
            console.log("Prato inválido! Escolha entre Pizza, Hambúrguer, Salada ou Macarrão.");
    }
}
escolherPrato();
