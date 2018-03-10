/*global $*/
/*exported loadTable*/
/*exported loadDetails*/
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
    tr += createElement('td', createBtn('details', 'btn btn-primary', data.id, 'Dettagli') +
        createBtn('modify', 'btn btn-primary', data.id, 'Modifica') +
        createBtn('remove', 'btn btn-primary', data.id, 'Rimuovi'));
    return createElement('tr', tr);
}
function loadRowTable(table, data) {
    'use strict';
    var tr = createTr(data);
    $('#' + table).append(tr);
    /*jshint -W117 */
    clickDetails(data);
    /*jshint -W117 */
    clickModify(data);
    /*jshint -W117 */
    clickRemove(data);
}
function loadTable(table, data) {
    'use strict';
    for (var i = 0; i < data.length; i++) {
        loadRowTable(table, data[i]);
    }
}
function loadDetails(data) {
    'use strict';
    console.log(data);
    var property = Object.getOwnPropertyNames(data);
    var arrayId = ['id', 'name', 'username', 'email', 'address', 'phone', 'website'];
    for (var i = 0; i < arrayId.length; i++) {
        
        bindingDetails(property, i, arrayId, data);
    }
}
function bindingDetails(property, i, arrayId, data) {
    'use strict';
    /*jshint -W117 */
    if (property[i] !== 'address') {
        load(arrayId[i], data[property[i]]);
    }
    else {
        load(arrayId[i], ObjectToString(data[property[i]]));
    }
}