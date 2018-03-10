/*exported createElement*/
/*exported createBtn*/
function createElement(type, data) {
    'use strict';
    return '<' + type + '>' + data + '</' + type + '>';
}

function createBtn(name, classBtn, id, value) {
    'use strict';
    return '<button class="'+classBtn+'" id="'+name+id+'" value="'+id+'" name="'+name+'">'+value+'</button>';
}