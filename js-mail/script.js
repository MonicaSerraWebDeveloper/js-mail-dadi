// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

// START 

// Chiediamo all'utente la sua email 
const userEmail = prompt('Scrivi qui la tua email per accedere')

const listEmailUsers = ['topolino@mail.it', 'pippo@mail.it', 'paperino@mail.it', 'pluto@mail.it', 'minnie@mail.it'];

// Creiamo la nostra lista di email 
// Controlliamo se nella nostra lista è presente quella email
// Se la troviamo salviamo l'informazione che è vera
// Altrimenti l'informazione rimane falsa
// Nel primo caso che la mail è presente in lista allora diremo all'utente che può accedere
// Nel caso in cui l'email non è presente gli diremo che non può accedere