// lista invitati festa

const invitati = [
  "invitato1@email.com",
  "invitato2@email.com",
  "invitato3@email.com",
  "invitato4@email.com",
  "invitato5@email.com",
  "invitato6@email.com",
];

// chiedo email all'utente

const emailUtente = prompt("Inserisci la tua email");

// let per verificare utente

let accessoConsentito = false;

// ciclo per verificare utente

for (let i = 0; i < invitati.lenght; i++) {
  if (emailUtente === invitati[i]) {
    accessoConsentito = true;
  }
}

// Stampo messaggio

if (accessoConsentito) {
  console.log("Accesso Consentito");
} else {
  console.log("Accesso Negato");
}
