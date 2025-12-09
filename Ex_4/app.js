
let numeroSorte = Math.random() * 10 + 1
numeroSorte = Math.floor(numeroSorte)

let popup = "Olá Mundo! Adivinha o número em que estou a pensar."
alert(popup)

let inserir = prompt("Insere um número entre 1 e 100")

inserir = Math.floor(Number(inserir))

let acertou = false

if (inserir > 100 || inserir <= 0) {
    alert("Esse número não é válido, recomeça.")
} else {
    while (!acertou) {

        if (numeroSorte === inserir) {
            alert("Certo!!!")
            acertou = true
        } else if (numeroSorte > inserir && numeroSorte - inserir <= 13 || numeroSorte < inserir && inserir - numeroSorte <= 13) {
            alert("Quase lá!!!")
            inserir = prompt("Adivinha o número da sorte, entre 1 e 100:")
            inserir = Math.floor(Number(inserir))
        } else if (numeroSorte > inserir) {
            alert("Muito abaixo!!!")
            inserir = prompt("Adivinha o número da sorte, entre 1 e 100:")
            inserir = Math.floor(Number(inserir))
        } else if (numeroSorte < inserir) {
            alert("Muito acima!!!")
            inserir = prompt("Adivinha o número da sorte, entre 1 e 100:")
            inserir = Math.floor(Number(inserir))
        }
    }
}


