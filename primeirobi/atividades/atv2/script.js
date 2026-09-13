const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let titular = "Gabriel Santos Inácio";
let agencia = "0001";
let numeroConta = "12345-6";
let saldo = 1000.00;

function perguntar(texto) {
  return new Promise(resolve => rl.question(texto, resolve));
}

async function menu() {
  let opcao = "";

  while (opcao !== "0") {
    opcao = await perguntar(
      "\n=== BANCO DIGITAL ===\n" +
      "1 - Consultar dados da conta\n" +
      "2 - Consultar saldo\n" +
      "3 - Realizar débito\n" +
      "4 - Realizar crédito\n" +
      "0 - Sair\n" +
      "Escolha uma opção: "
    );

    switch (opcao) {
      case "1":
        console.log("\n=== Dados da Conta ===");
        console.log(`Titular: ${titular}`);
        console.log(`Agência: ${agencia}`);
        console.log(`Conta: ${numeroConta}`);
        break;

      case "2":
        console.log(
          `\nSaldo atual: ${saldo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}`
        );
        break;

      case "3":
        let debito = parseFloat(await perguntar("Digite o valor do débito: "));

        if (isNaN(debito) || debito <= 0) {
          console.log("Valor inválido.");
        } else if (debito > saldo) {
          console.log("Saldo insuficiente.");
        } else {
          saldo -= debito;
          console.log("Débito realizado com sucesso!");
        }
        break;

      case "4":
        let credito = parseFloat(await perguntar("Digite o valor do crédito: "));

        if (isNaN(credito) || credito <= 0) {
          console.log("Valor inválido.");
        } else {
          saldo += credito;
          console.log("Crédito realizado com sucesso!");
        }
        break;

      case "0":
        console.log("\nObrigado por utilizar o Banco Digital!");
        rl.close();
        return;

      default:
        console.log("Opção inválida.");
    }
  }
}

menu();