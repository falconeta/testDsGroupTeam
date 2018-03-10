/*global $*/
/*exported loadTable*/
function createTDS(data) {
    'use strict';
    var property=Object.getOwnPropertyNames(data);
    var tds='';
    for (var i = 1; i < 4; i++) {
        tds += createElement('td',property[i]);
    }
    console.log(tds);
}

function createTr(data) {
    'use strict';
    var td = createTDS(data);
}

function loadRowTable(table, data) {
    'use strict';
    var tr = createTr(data);
}

function loadTable(table, data) {
    'use strict';
    for (var i = 0; i < data.length; i++) {
        loadRowTable(table, data[i]);
    }
}