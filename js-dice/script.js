// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// START
// Impostare due giocatori: giocatore vs computer
const playerDice = Math.floor((Math.random() * 6) + 1); // Far uscire un numero random da 1 a 6 per il giocatore
console.log(`Player ${playerDice}`);

const computerDice = Math.floor((Math.random() * 6) + 1); // Far uscire un numero random da 1 a 6 per il computer
console.log(`Computer ${computerDice}`);

let winOrLoseOrDraw;
if (playerDice > computerDice) { // Se il giocatore ha un numero maggiore del computer allora vince
    winOrLoseOrDraw = 'Hai vinto!'
} else if (computerDice > playerDice) { // Se il computer ha un numero maggiore del giocatore allora vince
    winOrLoseOrDraw = 'Hai perso!'
} else { // Se il giocatore e il computer hanno stesso numero è patta
    winOrLoseOrDraw = 'Pareggio'
};

console.log(winOrLoseOrDraw);