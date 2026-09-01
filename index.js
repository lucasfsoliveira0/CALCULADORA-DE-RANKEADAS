//CALCULADORA DE RANKEADAS 
let numeroVitorias = (25)
let numeroDerrotas = (5)
let saldo = (numeroVitorias - numeroDerrotas)

console.log(saldo)

function calcularRank(saldo) {
    if (saldo >= 20) {
        console.log("Você está no rank Diamante")
    } else if (saldo >= 15) {
        console.log("Você está no rank Ouro")
    } else if (saldo >= 10) {
        console.log("Você está no rank Prata")
    } else {
        console.log("Você está no rank Bronze")
    }
}
calcularRank(saldo)