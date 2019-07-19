/*global $*/
/*exported service*/
/*exported clickBtnTable*/
/*exported backButton*/
/*exported callRest*/
/*exported submit*/
/*exported submitModal*/
/*jshint expr: true*/

//funzione che ha come propietà funzioni di richiesta rest
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

//crea evento associato al click bottone
function clickBtnTable(html, type, id) {
    'use strict';
    $('#' + type + id).click(function () {
        localStorage.setItem('id', id);
        localStorage.setItem('selector', type);
        window.open(html, "_self");
    });
}

//crea evento associato al click bottone submit ed effettua la chiamata rest al server
//possibili chiamate: put, post, delete
function submit(id, type, data, result, typeCall) {
    'use strict';
    $('#submit').click(function () {
        /*jshint -W117 */
        type === 'delete' ? del() : callRest();
    });
    function del() {
        if (window.confirm("Vuoi veramente cancellare l'utente?")) {
            callRest();
        }
    }
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

//crea evento associato al click bottone insietro
function backButton() {
    'use strict';
    $('#back').click(function () {
        window.open('index.html', "_self");
    });
}

//crea evento associato al click bottone submit della modale
function submitModal() {
    'use strict';
    $('#submit').click(function () {
         $('#modalContact').modal('toggle');
    });
}
