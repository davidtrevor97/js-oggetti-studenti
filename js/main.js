// Descrizione
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.

// ES 1
var studente1 = {
  "nome" : "David",
  "cognome" : "Cortesi",
  "eta" : "23",
}

for ( var key in studente1 ){
  console.log(key);
};

// ES 2
studenti = [
   {
    "nome" : "David",
    "cognome" : "Cortesi",
    "eta" : "23",
  },
  {
   "nome" : "Andrea",
   "cognome" : "Zaccaro",
   "eta" : "22",
 },
 {
  "nome" : "Achraf",
  "cognome" : "Belouaer",
  "eta" : "19",
},
studentex = {},
];

for (var i = 0; i < studenti.length; i++) {
  console.log( (studenti[i].nome) + "  " + (studenti[i].cognome) );
};

// ES 3

studentex.nome = prompt("Nuovo studente: Nome = ");
studentex.cognome = prompt("Nuovo studente: Cognome = ");
studenteAge =  parseInt( prompt("Nuovo studente: Età = ") );
while ( isNaN(studenteAge) || ( studenteAge < 0 ) || ( studenteAge > 120 ) ) {
  studenteAge =  parseInt( prompt("Prego inserire un età valida \n Nuovo studente: Età = ") );
}
studentex.eta = studenteAge;
//SCRITTURA HTML DEI DATI STUDENTE ISCRItti
 for (var i = 0; i < studenti.length; i++) {
  $("#studenti").text( "Nuovo studente iscritto:  " + (studenti[i].nome) + "  " + (studenti[i].cognome) + "  " + (studenti[i].eta) + " anni di età" );
};
