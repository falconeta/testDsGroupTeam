/*global $*/
$(document).ready(function (){
    'use strict';
    /*jshint -W117 */
    service().getUser(function (data){
        loadTable("userTable",data);
        $('.loader').fadeOut();
    });
});