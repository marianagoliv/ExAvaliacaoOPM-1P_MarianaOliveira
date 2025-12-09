let popuptexto = 'Olá Mundo'
alert(popuptexto)

let nome = prompt("Insere o teu nome!")
alert("Olá " + nome)

let escolhaUtilizador = prompt("Quem é o teu artista de multimédia de eleição??")
Number(escolhaUtilizador)
alert("Não conheço a/o nome! Eu gosto muito da Mileece: https:www.mileece.is/bio")

let continuar = prompt("Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não")
Number(continuar)

if (continuar === " 1 ") {
    alert("Fico feliz que ainda continues aqui! Vamos falar sobre mais assuntos :)")
} else if (continuar === "0") {
    alert('Oh não :(!! Acho que a nossa diversão acabou aqui. ')
}
