/*global $*/
/*exported service*/
/*exported clickBtnTable*/
/*exported backButton*/
var url= "https://jsonplaceholder.typicode.com/users/";
function service() {
    'use strict';
    return {
        getUser: function (callback) {
            $.getJSON(url,callback);
        },
        getUserId: function (id, callback){
            $.getJSON(url+id,callback);
        }
    };
}
function clickBtnTable(html,type, id) {
    'use strict';
    $('#'+type + id).click(function () {
        localStorage.setItem('id', id);
        localStorage.setItem('selector', type);
        window.open(html, "_self");
    });
}
function backButton() {
    'use strict';
    $('#back').click(function () {
        window.open('index.html', "_self");
    });
}