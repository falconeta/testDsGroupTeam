/*exported createElement*/
/*exported createBtn*/
/*exported load*/
/*exported loadForm*/
/*exported ObjectToString*/
/*exported destructuringObject*/
/*global $*/
/*jshint expr: true*/
function createElement(type, data) {
    'use strict';
    return '<' + type + '>' + data + '</' + type + '>';
}
function createBtn(name, classBtn, id, value) {
    'use strict';
    return '<button class="' + classBtn + '" id="' + name + id + '" value="' + id + '" name="' + name + '">' + value + '</button>';
}
function load(id, value) {
    'use strict';
    $('#' + id).text(value);
}
function loadForm(id, value) {
    'use strict';
    $('#' + id).val(value);
}
function ObjectToString(data) {
    'use strict';
    var property = Object.getOwnPropertyNames(data);
    var string = '';
    for (var i = 0; i < property.length; i++) {
        typeof data[property[i]] !== 'object' ? string += " " + data[property[i]] : string += " " + ObjectToString(data[property[i]]);
    }
    return string;
}
function destructuringObject(data, array) {
    'use strict';
    var property = Object.getOwnPropertyNames(data);
    for (var i = 0; i < property.length; i++) {
        /*jshint -W117 */
        loadForm(array[i], data[property[i]]);
    }
}