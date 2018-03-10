/*global $*/

$(document).ready(function (){
    'use strict';
    service().getUser(function (data){
        loadTable("userTable",data);
    });
});