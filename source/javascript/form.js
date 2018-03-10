/*global $*/
$(document).ready(function () {
    'use strict';
    /*jshint -W117 */
    localStorage.getItem('selector')==='create'?loadCreate():loadModifyRemove();       
    backButton();
});