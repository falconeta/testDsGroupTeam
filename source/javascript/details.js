/*global $*/
$(document).ready(function () {//Una volta che il DOM è caricato esegui la funzione
    'use strict';
    /*jshint -W117 */
    service().getUserId(localStorage.getItem('id'), function (data) {
        loadDetails(data);
        backButton();
        $('.loader').fadeOut();
    });
});