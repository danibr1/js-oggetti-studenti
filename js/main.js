/**
    1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
        1.a Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
    2. Creare un array di oggetti di studenti. 
        2.a Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
    3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
        3.a Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.
 */


    // 1. Oggetto studente
    console.log(' --- OGGETTO STUDENTE ---')
    var studente = {
        nome: 'Daniele',
        cognome: 'Bruno',
        eta: 33,
    }

    // 1.a Stampa delle proprietà attraverso ciclo for
    for( key in studente ) {
        console.log(studente[key]);
    }

    // 2. Array di oggetti studente
    console.log(' --- ARRAY STUDENTI ---')

    var studenti = [
        {
            nome: 'Elisabetta',
            cognome: 'Degasperi',
            eta: 31,
        },
        {
            nome: 'Nino',
            cognome: 'Ciccio',
            eta: 28,
        },
        {
            nome: 'Anna',
            cognome: 'Nanna',
            eta: 30,
        },
    ];

    // 2.a Ciclo di studenti e stampa del nome e cognome
    for( var i = 0; i < studenti.length; i++) {
        console.log('Studente: ' + studenti[i].nome + ' ' + studenti[i].cognome);
    }

    // 3. Creazione oggetto Studente
    var newStudente = {
        nome: '',
        cognome: '',
        eta: 0,
    }

    // Inserimento nuovo studente tramite prompt ()
    var nome = prompt('Inserisci il NOME del nuovo studnete:');
    newStudente.nome = nome;

    var cognome = prompt('Inserisci il COGNOME del nuovo studnete:');
    newStudente.cognome = cognome;

    var eta = prompt('Inserisci l\'ETA\' del nuovo studnete:');
    newStudente.eta = eta;

    // 3.a Inserimento del nuovo oggetto nell'array punto 2
    // studenti.push(newStudente);
    
    // Stampa
    console.log(' --- ARRAY STUDENTI AGGIORNATO ---')
    console.log(studenti)
    for( var i = 0; i < studenti.length; i++) {
        console.log('Studente: ' + studenti[i].nome + ' ' + studenti[i].cognome);
    }

