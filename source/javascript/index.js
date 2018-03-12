/*global $*/

$(document).ready(function (){//Una volta che il DOM è caricato esegui la funzione
    'use strict';
    /*jshint -W117 */
    service().getUser(function (data){
        loadTable("userTable",data); //funzione definita in view.js, crea la tabella passando l'oggetto data ricevuto 
        clickBtnTable('form.html','create',''); //funzione definita in service.js
        submitModal();//funzione definita in service.js
        $('.loader').fadeOut(); //nasconde div loader
    });
});

