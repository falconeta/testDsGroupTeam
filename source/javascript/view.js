/*global $ */
/*exported loadTable*/
/*imported load*/
function loadTable(users) {//funzione bindig tabella
  "use strict";
  var arrayValueTh = ["Nome", "Username", "Website", "Azioni"];
  $("#userTable").append($(document.createElement("thead")).append(addRowTh(arrayValueTh)));
  loadTbody(users);
  $("button").click(function (data) {
    localStorage.setItem('id', data.currentTarget.value);
    localStorage.setItem('selector', data.currentTarget.name);
    if (data.currentTarget.name === 'details') {
      window.open('details.html', "_self");
    }
    else {
      window.open('form.html', "_self");
    }
  });
}
function loadTbody(users) {
  "use strict";
  var tbody = $(document.createElement("tbody"));
  $("#userTable").append(tbody);
  for (var j = 0; j < users.length; j++) {//ciclo creazione righe tabella
    var arrayId = ["id" + j, "name" + j, "username" + j, "website" + j];
    var arrayValue = [users[j].id, users[j].name, users[j].username, users[j].website];
    $(tbody).append(addRow(arrayId, arrayValue));
  }
}

function addRow(array, arrayValue) {//funzione creazione righe tabella
    "use strict";
    var tr = $(document.createElement("tr"));
    for (var i = 1; i < array.length; i++) {
        $(tr).append('<td id="' + array[i] + '" class="text-center">'+arrayValue[i]+'</td>');
    }
    var buttons = generateButton(arrayValue);
    $(tr).append($(document.createElement('td')).append(buttons));
    return tr;
  }

function generateButton(arrayValue) {//funzione che genera 3 bottoni
  'use strict';
  var buttonId = ["btnDetails" + arrayValue[0], "btnModify" + arrayValue[0], "btnDelete" + arrayValue[0]];
  var buttonText = ["Dettagli", "Modifica", "Elimina"];
  var buttonName = ["details", "modify", "delete"];
  var buttonClass = 'btn btn-primary'; //classe da modificare per stile bottone tabella
  var buttons = '';
  for (var k = 0; k < buttonId.length; k++) {
    /*jshint -W117 */buttons += loadButton(arrayValue[0], buttonId[k], buttonText[k], buttonName[k], buttonClass);
  }
  return buttons;
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