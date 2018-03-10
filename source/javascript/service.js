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
function clickBtnTable(html,type, data) {
    'use strict';
    $('#'+type + data.id).click(function () {
        localStorage.setItem('id', data.id);
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