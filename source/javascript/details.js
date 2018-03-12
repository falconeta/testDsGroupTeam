/*global $*/
$(document).ready(function() {
  //Una volta che il DOM è caricato esegui la funzione
  "use strict";
  /*jshint -W117 */
  service().getUserId(localStorage.getItem("id"), function(data) {
    loadDetails(data);//definita in view.js, effettua il binding del contenuto dell'ogetto 
    backButton();//definita in service.js, associa al click del punsante indietro l'apertura della pagina index.html
    $(".loader").fadeOut();//nasconde div loader
  });
});
