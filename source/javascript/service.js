/*global $*/
/*exported service*/
var url= "https://jsonplaceholder.typicode.com/users";
function service() {
    'use strict';
    return {
        getUser: function (callback) {
            $.getJSON(url,callback);
        }
    };
}