/*global $*/
/*exported loadTable*/
/*exported loadDetails*/
/*exported loadCreate*/
/*exported loadModifyRemove*/
/*jshint expr: true*/

//crea tutti i td necessari e li restituisce in stringa
function createTDS(data) {
    'use strict';
    var property = Object.getOwnPropertyNames(data);
    var tds = '';
    for (var i = 1; i < 4; i++) {
        /*jshint -W117 */
        tds += createElement('td', data[property[i]]);
    }
    return tds;
}

//crea riga tabella, restituisce una stringa
function createTr(data) {
    'use strict';
    var tr = createTDS(data);
    /*jshint -W117 */
    tr += createElement('td', createBtn('details', 'btn btn-primary', data.id, 'Dettagli') +
        createBtn('modify', 'btn btn-primary', data.id, 'Modifica') +
        createBtn('remove', 'btn btn-primary', data.id, 'Rimuovi'));
    return createElement('tr', tr);
}

//appende la riga alla tabella e aggiunge l'event click ai bottoni
function loadRowTable(table, data) {
    'use strict';
    var tr = createTr(data);
    $('#' + table).append(tr);
    /*jshint -W117 */
    clickBtnTable('details.html', 'details', data.id);
    /*jshint -W117 */
    clickBtnTable('form.html', 'modify', data.id);
    /*jshint -W117 */
    clickBtnTable('form.html', 'remove', data.id);
}

//crea tabella con l'oggetto passato
function loadTable(table, data) {
    'use strict';
    for (var i = 0; i < data.length; i++) {
        loadRowTable(table, data[i]);
    }
}

//effettua il binding dei dettagli
function bindingDetails(data, id) {
    'use strict';
    /*jshint -W117 */
    //se una proprietà è associata ad un oggetto lo destrutturizza con ObjectToString
    typeof data !== 'object' ? load(id, data) : load(id, ObjectToString(data));
}

//funzione iniziale, effettuerà il binding con la funzione binding detail
function loadDetails(data) {
    'use strict';
    var property = Object.getOwnPropertyNames(data);
    var arrayId = ['id', 'name', 'username', 'email', 'address', 'phone', 'website'];
    for (var i = 0; i < arrayId.length; i++) {
        bindingDetails(data[property[i]], arrayId[i]);
    }
}

//rende form.html in modalità crea
function loadCreate() {
    'use strict';
    $('#title').text('Crea');
    $('.loader').fadeOut();
    /*jshint -W117 */
    submit('', 'post', $('#contact').serialize, 'result', 'Create');//chiamata rest al servizio (post)
}

// effettua il binding della form
function bindingForm(data, array) {
    'use strict';
    /*jshint -W117 */
    typeof data !== 'object' ? loadForm(array, data) : destructuringObject(data, ['street', 'suite', 'city', 'zipcode']);
}

//funzione iniziale, effettuerà il binding con la funzione bindingForm
function bindForm(data) {
    'use strict';
    var property = Object.getOwnPropertyNames(data);
    var arrayId = ['id', 'name', 'username', 'email', '', 'phone', 'website'];
    for (var i = 1; i < arrayId.length; i++) {
        bindingForm(data[property[i]], arrayId[i]);
    }
}

//rende form.html in modalità modifica
function loadModify() {
    'use strict';
    $('#title').text('Modifica');
    /*jshint -W117 */
    submit(localStorage.getItem('id'), 'put', $('#contact').serialize, 'result', 'modify');
}

//rende form.html in modalità cancella
function loadRemove() {
    'use strict';
    $('#title').text('Rimuovi');
    $('#submit').val('Cancella');//assegna valore cancella al bottone
        /*jshint -W117 */
        submit(localStorage.getItem('id'), 'delete', $('#contact').serialize, 'result', 'delete'); 
}

/* effettua chiamata rest, prende un singolo user con id, e avvia loadModify 
o loadRemove in base al selettore */
function loadModifyRemove() {
    'use strict';
    /*jshint -W117 */
    service().getUserId(localStorage.getItem('id'), function (data) {
        bindForm(data);
        localStorage.getItem('selector') === 'modify' ? loadModify() : loadRemove();
        $('.loader').fadeOut();
    });
}