/*global $ */
function loadButton(id, btnId, text, name, classBtn) {
  //funzione di creazione bottoni
  "use strict";
  return '<button id="' + btnId + '" value="' + id + '" name="' + name + '" class="'+classBtn+'">'+text+'</button>';
}


function addRow(array, arrayValue) {//funzione creazione righe tabella
    "use strict";
    var tr = $(document.createElement("tr"));
    for (var i = 1; i < array.length; i++) {
        $(tr).append('<td id="' + array[i] + '" class="text-center"></td>');
    }
    var buttonId = ["btnDetails" + arrayValue[0], "btnModify" + arrayValue[0], "btnDelete" + arrayValue[0]];
    var buttonText = ["Dettagli", "Modifica", "Elimina"];
    var buttonName = ["details", "modify", "delete"];
    var buttonClass = 'btn btn-primary';//classe da modificare per stile bottone tabella
    var buttons='';
    for (var k = 0; k < buttonId.length; k++) {
        buttons += loadButton(arrayValue[0], buttonId[k], buttonText[k], buttonName[k], buttonClass);
    }
    $(tr).append($(document.createElement('td')).append(buttons));
    return tr;
  }
  function addRowTh(array) {//funzione creazione testa tabella
    "use strict";
    var tr = $(document.createElement("tr"));
    $(tr).addClass("forecast bg-inverse text-white");
    for (var i = 0; i < array.length; i++) {
      $(tr).append(
        '<th id="' + array[i] + '" class="text-center">' + array[i] + "</th>"
      );
    }
    return tr;
  }