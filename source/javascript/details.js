/*global $*/
$(document).ready(function () {
    'use strict';
    /*jshint -W117 */
    service().getUserId(localStorage.getItem('id'), function (data) {
        loadDetails(data);
        $('#back').click(function () {
            window.open('index.html', "_self");
        });
        $('.loader').fadeOut();
    });
});