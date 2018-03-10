/*global $*/
$(document).ready(function () {
    'use strict';
    /*jshint -W117 */
    service().getUserId(localStorage.getItem('id'), function (data) {
        loadDetails(data);
        backButton();
        $('.loader').fadeOut();
    });
});