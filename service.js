// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request');

function ListerClient(){

    //var result;

    request('https://khalil-hotel-web-api.herokuapp.com/clients/pagination?start=0&size=3', { json: true }, function(err,
res, body) {
if (err) { return console.log('Erreur', err); }
// body contient les données récupérées
//result = res.request.body;
//result = JSON.stringify(result);
//result = JSON.parse(result);
console.log('Ok', body);
});

//return result;

}

exports.listerClient = ListerClient;

//a = ListerClient();

//console.log(a);

ListerClient();