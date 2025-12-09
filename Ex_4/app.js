let numeroSorte = Math.random()
numeroSorte = Math.floor(numeroSorte)

alert("Olá Mundo! Adivinha o número em que estou a pensar.")

let inserir = prompt("Insere um numero de 1 a 100!")
inserir = Math.floor(Number(inserir))

let acertou = false

if (inserir > 100 || inserir <= 0) {
    alert("Esse número não é válido, recomeça.")
} else {
    while (!ganhou) {

        if (numeroSorte === inserir) {
            alert(" Está certo!!!")
            ganhou = true
        } else if (numeroSorte > inserir && numeroSorte - inserir <= 17 || numeroSorte < inserir && inserir - numeroSorte <= 17) {
            alert("Estás quase lá!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100:")
            adivinhar = Math.floor(Number(inserir))
        } else if (numeroSorte > inserir) {
            alert("Muito abaixo!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100:")
            adivinhar = Math.floor(Number(inserir))
        } else if (numeroSorte > inserir) {
            alert("Muito acima!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100:")
            adivinhar = Math.floor(Number(inserir))
        }
    }
}


