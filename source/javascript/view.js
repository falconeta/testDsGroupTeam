/*global $*/
/*exported loadTable*/
/*exported loadDetails*/
/*exported loadCreate*/
/*exported loadModifyRemove*/
/*jshint expr: true*/
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
    clickBtnTable('details.html', 'details', data.id);
    /*jshint -W117 */
    clickBtnTable('form.html', 'modify', data.id);
    /*jshint -W117 */
    clickBtnTable('form.html', 'remove', data.id);
}
function loadTable(table, data) {
    'use strict';
    for (var i = 0; i < data.length; i++) {
        loadRowTable(table, data[i]);
    }
}
function bindingDetails(data, id) {
    'use strict';
    /*jshint -W117 */
    typeof data !== 'object' ? load(id, data) : load(id, ObjectToString(data));
}
function loadDetails(data) {
    'use strict';
    var property = Object.getOwnPropertyNames(data);
    var arrayId = ['id', 'name', 'username', 'email', 'address', 'phone', 'website'];
    for (var i = 0; i < arrayId.length; i++) {
        bindingDetails(data[property[i]], arrayId[i]);
    }
}
function loadCreate() {
    'use strict';
    $('#text').text('Crea');
}
function bindingForm(data, array) {
    'use strict';
    /*jshint -W117 */
    typeof data !== 'object' ? loadForm(array, data) : destructuringObject(data, ['street', 'suite', 'city', 'zipcode']);
}
function bindForm(data) {
    'use strict';
    var property = Object.getOwnPropertyNames(data);
    var arrayId = ['id', 'name', 'username', 'email', '', 'phone', 'website'];
    for (var i = 1; i < arrayId.length; i++) {
        bindingForm(data[property[i]], arrayId[i]);
    }
}
function loadModify() {
    'use strict';
    $('#title').text('Modifica');
    $('#submit').click(function (){
        $.ajax({
            type: 'put',
            data: 
        });
    });
}
function loadModifyRemove() {
    'use strict';
    /*jshint -W117 */
    service().getUserId(localStorage.getItem('id'), function (data) {
        bindForm(data);
        localStorage.getItem('selector') === 'modify' ? loadModify() : loadRemove();
        $('.loader').fadeOut();
    });
}