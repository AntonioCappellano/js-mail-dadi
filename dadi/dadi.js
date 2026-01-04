// numero random per il giocatore

const dadoGiocatore = Math.floor(Math.random() * 6) + 1;

// numero random per il computer

const dadoComputer = Math.floor(Math.random() * 6) + 1;

// stampo i risultati

console.log("Giocatore", dadoGiocatore);
console.log("Computer", dadoComputer);

// confronto i risultati

if (dadoGiocatore > dadoComputer) {
  console.log("Vince il Giocatore");
} else if (dadoGiocatore < dadoComputer) {
  console.log("Vince il Computer");
} else {
  console.log("Pareggio");
}
