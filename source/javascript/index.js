/*global $*/

$(document).ready(function (){//Una volta che il DOM è caricato esegui la funzione
    'use strict';
    /*jshint -W117 */
    service().getUser(function (data){
        loadTable("userTable",data); //funzione dichiarata in view.js, crea la tabella passando l'oggetto data ricevuto 
        clickBtnTable('form.html','create',''); //
        submitModal();
        $('.loader').fadeOut();
    });
});