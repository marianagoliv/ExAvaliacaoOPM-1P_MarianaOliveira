let popuptexto = "Olá Mundo! Vamos fazer contas simples. "
alert(popuptexto)


let operacao = prompt("Insere qualquer tipo de operação! (Soma,subtração, multiplicação ou divisão!")

if (operacao === "soma" || operacao === "SOMA" || operacao === "Soma" || operacao === "Divisão" || operacao === "divisão" || operacao === "DIVISÃO" || operacao === "multiplicação" || operacao === "Multiplicação" || operacao === "MULTIPLICAÇÃO" || operacao === "SUBTRAÇÃO" || operacao === "Subtração" || operacao === "subtração") {
    alert("Operação inválida!!!")
} else {

    let simbolo
    let numeroEsquerda = Number(prompt("Insere um número à esquerda do sinal da operação"))
    let numeroDireita = Number(prompt("Insere um número à direita do sinal da operação"))

    let resultado
    if (operacao) {
        "soma"
        simbolo = "+"
        resultado = numeroEsquerda + numeroDireita
    } else if (operacao) {
        "subtração"
        simbolo = "-"
        resultado = numeroEsquerda - numeroDireita
    } else if (operacao) {
        "multiplicação"
        simbolo = "x"
        resultado = numeroEsquerda * numeroDireita
    } else if (operacao) {
        "divisão"
        simbolo = "/"
        resultado = numeroEsquerda / numeroDireita
    }

}
let resolucao = `${numeroDireita} ${simbolo} ${numeroEsquerda} = ${resultado}`

console.log(resolucao)
alert(resolucao)






