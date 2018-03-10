/*global $*/
/*exported loadTable*/
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
function createTr(data) {
    'use strict';
    var tr = createTDS(data);
    /*jshint -W117 */
    tr += createElement('td', createBtn('details', 'btn btn-primary', data.id, 'Dettagli')+
                                createBtn('modify', 'btn btn-primary', data.id, 'Modifica')+
                                createBtn('remove', 'btn btn-primary', data.id, 'Rimuovi'));
    return createElement('tr',tr);
}
function loadRowTable(table, data) {
    'use strict';
    var tr = createTr(data);
    $('#' + table).append(tr);
    $('#details'+data.id).click(function(){
        localStorage.setItem('id', data.id);
        localStorage.setItem('selector', 'details');
    });
    $('#modify'+data.id).click(function(){
        localStorage.setItem('id', data.id);
        localStorage.setItem('selector', 'modify');
    });
    $('#remove'+data.id).click(function(){
        localStorage.setItem('id', data.id);
        localStorage.setItem('selector', 'remove');
    });
}
function loadTable(table, data) {
    'use strict';
    for (var i = 0; i < data.length; i++) {
        loadRowTable(table, data[i]);
    }
}