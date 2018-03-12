/*global $*/
/*jshint expr: true*/
$(document).ready(function () {//Una volta che il DOM è caricato esegui la funzione
    'use strict';
    /*jshint -W117 */
    //loadModifyRemove e LoadCreate definite in view.js
    localStorage.getItem('selector')==='create'?loadCreate():loadModifyRemove();
    backButton(); //definita in service.js, associa al click del punsante indietro l'apertura della pagina index.html 
});