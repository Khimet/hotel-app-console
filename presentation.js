// Récupération des fonctions de service
var service = require('./service.js')


function Start(){
    console.log('** Administration Hotel **' + '\n' + 
    '1. Lister les clients' + '\n' +
    '99. Sortir')
}



function AffichageResultat(choix){

    switch(choix){

        case 1:
            console.log('>> Liste des clients');
            //setTimeout(() => {service.listerClient();}, 10000);
            //service.listerClient();

            //console.log(result);

            break;

        case 99:
            console.log('Au revoir');
    }

};



exports.menu = Start;
//exports.saisieUtilisateur = SaisieUtilisateur;
exports.affichageResultat = AffichageResultat;


/*function SaisieUtilisateur(readline){

    var SaisieUtilisateur;

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

       

    rl.question('Quelle action choisissez-vous ? :', function(saisie){

        SaisieUtilisateur = saisie;

        rl.close();

        return SaisieUtilisateur;

        

    });

}*/