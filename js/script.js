// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Impostare due giocatori: giocatore vs computer
const playerDice = Math.floor((Math.random() * 6) + 1); // Far uscire un numero random da 1 a 6 per il giocatore
console.log(`Player ${playerDice}`);

const computerDice = Math.floor((Math.random() * 6) + 1); // Far uscire un numero random da 1 a 6 per il computer
console.log(`Computer ${computerDice}`);

let winOrLoseOrDraw;
if (playerDice > computerDice) {
    winOrLoseOrDraw = 'Hai vinto!'
} else if (computerDice > playerDice) {
    winOrLoseOrDraw = 'Hai perso!'
} else {
    winOrLoseOrDraw = 'Pareggio'
};

console.log(winOrLoseOrDraw);

// Se il giocatore ha un numero maggiore del computer allora vince
// Se il computer ha un numero maggiore del giocatore allora vince
// Se il giocatore e il computer hanno stesso numero è patta





// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
