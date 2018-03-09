/*global $ */
/*exported creaRiempiElemento*/
/*exported load*/
/*exported loadButton*/
/*exported loadVal*/
function creaRiempiElemento(nomeElemento, valore){
    'use strict';
    return '<' + nomeElemento + '>' + valore + '</' + nomeElemento + '>';
}
function loadButton(id, btnId, text, name, classBtn) {//funzione di creazione bottoni
    "use strict";
    return '<button id="' + btnId + '" value="' + id + '" name="' + name + '" class="'+classBtn+'">'+text+'</button>';
  }
function load(id, value) {//funzione di binding
    "use strict";
    $('#'+id).text(value);
  }
  function loadVal(arrayId, arrayValue) {
    "use strict";
    $("#" + arrayId).attr("value", arrayValue);
  }