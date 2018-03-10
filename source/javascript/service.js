/*global $*/
/*exported service*/
/*exported clickBtnTable*/
/*exported backButton*/
/*exported callRest*/
/*exported submit*/
var url = "https://jsonplaceholder.typicode.com/users/";
function service() {
    'use strict';
    return {
        getUser: function (callback) {
            $.getJSON(url, callback);
        },
        getUserId: function (id, callback) {
            $.getJSON(url + id, callback);
        }
    };
}
function clickBtnTable(html, type, id) {
    'use strict';
    $('#' + type + id).click(function () {
        localStorage.setItem('id', id);
        localStorage.setItem('selector', type);
        window.open(html, "_self");
    });
}
function submit(id, type, data, result, typeCall) {
    'use strict';
    $('#submit').click(function () {
        /*jshint -W117 */
        callRest();
    });
    function callRest() {
        $.ajax({
            url: url + id,
            type: type,
            data: data,
            success: function (data, textStatus) {
                $('#' + result).text(typeCall + " " + textStatus);
                setTimeout(function () {
                    window.open("index.html", "_self");
                }, 2000);
            },
            error: function (data, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
}
function backButton() {
    'use strict';
    $('#back').click(function () {
        window.open('index.html', "_self");
    });
}