/*global $*/
$(document).ready(function (){
    'use strict';
    /*jshint -W117 */
    service().getUser(function (data){
        switch (localStorage.getItem('selector')){
            case 'create':
                loadCreate(data);
            break;
            case 'modify':
            break;
            case 'remove':
        }
        
        backButton();
        $('.loader').fadeOut();
    });
});