/* 
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?


Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" 
*/

const btnEmail = document.getElementById('email');
const btnDice = document.getElementById('dice');
const btnSubmit = document.getElementById('submit');
let emailAllowed = [
    'cleliafradella@gmail.com',
    'marcoacciari@gmail.com',
    'samuelpanicucci@gmail.com',
    'bryanlucchetta@gmail',
    'adrianogrimaldi@gmail.com',
    'eugeniafaiola@gmail.com'
]

if (btnEmail !== null){
    btnEmail.addEventListener('click', function(){
    window.open("email.html");
})
}

if (btnDice !== null){
    btnDice.addEventListener('click', function(){
    window.open("dice.html");
})
}

if(btnSubmit !== null){
    btnSubmit.addEventListener('click', function(reload){
    reload.preventDefault()
})
} 

btnSubmit.addEventListener('click', function(){
    emailBox = document.getElementById('emailBox').value;
    emailResult = document.getElementById('emailResult');
    for (i = 0; i < emailAllowed.length; i++){
        if (emailBox === emailAllowed[i]){
            console.log('accettato');
            emailResult.innerHTML = `<h2 class="text-success"> L'email è accettata </h2>`
        } else{
            emailResult.innerHTML = `<h2 class="text-danger"> L'email non è accettata </h2>`;
            console.log('non accettato');
        }
    }
})