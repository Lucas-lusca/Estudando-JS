
// Uma função serve para executar micro-funções no seu código


// Essa função apenas recebe, soma e retorna um valor.
function somandoValores(varloA, valorB) {
    var soma = varloA + valorB;

    return soma;
}

// Criando uma variavel(que não é a mesma da função) valorA
var valorA = parseFloat(prompt("Digite o primeiro valor para a soma: "));
var valorB = parseFloat(prompt("Digite o segundo valor para a soma: "));

document.write("O resultado da soma é: " + somandoValores(valorA, valorB));
                                            // Passa o valor digitado pelo usuario 
                                            // para a função que soma esses valores