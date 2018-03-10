/*exported createElement*/
/*exported createBtn*/
/*exported load*/
/*exported ObjectToString*/
/*global $*/
function createElement(type, data) {
    'use strict';
    return '<' + type + '>' + data + '</' + type + '>';
}
function createBtn(name, classBtn, id, value) {
    'use strict';
    return '<button class="'+classBtn+'" id="'+name+id+'" value="'+id+'" name="'+name+'">'+value+'</button>';
}
function load(id, value){
    'use strict';
    $('#'+id).text(value);
}
function ObjectToString(data){
    'use strict';
    var property = Object.getOwnPropertyNames(data);
    var string='';
    for(var i=0;i<property.length;i++){
        if(typeof data[property[i]]!=='object'){
            string+=" "+data[property[i]];
        }else{
            string+=" "+ObjectToString(data[property[i]]);
        }
    }
    return string;
}