/*global $*/
/*jshint expr: true*/
$(document).ready(function () {//Una volta che il DOM è caricato esegui la funzione
    'use strict';
    /*jshint -W117 */
    localStorage.getItem('selector')==='create'?loadCreate():loadModifyRemove();       
    backButton();
});