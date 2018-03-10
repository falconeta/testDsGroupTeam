/*global $*/
/*exported service*/
/*exported clickDetails*/
/*exported clickModify*/
/*exported clickRemove*/
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

function clickDetails(data) {
    'use strict';
    $('#details' + data.id).click(function () {
        localStorage.setItem('id', data.id);
        localStorage.setItem('selector', 'details');
        window.open('details.html', "_self");
    });
}
function clickRemove(data) {
    'use strict';
    $('#remove' + data.id).click(function () {
        localStorage.setItem('id', data.id);
        localStorage.setItem('selector', 'remove');
        window.open('form.html', "_self");
    });
}

function clickModify(data) {
    'use strict';
    $('#modify' + data.id).click(function () {
        localStorage.setItem('id', data.id);
        localStorage.setItem('selector', 'modify');
        window.open('form.html', "_self");
    });
}