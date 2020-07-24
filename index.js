// Import du menu principal
var presentation = require('./presentation.js');
// récupération du module `readline`
var readline = require('readline');
// Récupération de la fonction qui récupère la saisie utilisateur
//var saisie = require('./presentation.js');
//var saisie = require('prompt-sync')({sigint: true});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

var application = function(){
    
    presentation.menu();

    rl.question('Quel action choisissez-vous ? : ', function(saisie){

        choix = parseInt(saisie);

        presentation.affichageResultat(choix);

        // Sortie de l'application 
        if (choix == 99){return rl.close()};

        application();  

    });

}

application();