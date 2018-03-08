/*global $ */
function loadUser(users) {//funzione invocata dalla chiamata get per l'acquisizione degli utenti
  "use strict";
  localStorage.setItem("id", "");
  localStorage.setItem("selector", "");
  loadTable(users);//instanza di caricamento tabella
  $('.loader').fadeOut();
}
function loadButton(id, btnId, text, name, classBtn) {//funzione di creazione bottoni 
  'use strict';
  var btn = $(document.createElement("button"));
  $(btn).attr("id", btnId);
  $(btn).text(text);
  $(btn).attr("value", id);
  $(btn).attr("name", name);
  $(btn).attr("class", classBtn);
  return btn;
}
function addRow(array, arrayValue) {//funzione creazione righe tabella
  "use strict";
  var tr = $(document.createElement("tr"));
  for (var i = 1; i < array.length; i++) {
    if (array[i].slice(0, 6) === "ficona") {
      $(tr).append(
        '<td class="text-center"><img id="' + array[i] + '"></img></td>'
      );
    } else {
      $(tr).append('<td id="' + array[i] + '" class="text-center"></td>');
    }
  }
  var buttonId = ["btnDetails" + arrayValue[0], "btnModify" + arrayValue[0], "btnDelete" + arrayValue[0]];
  var buttonText = ["Dettagli", "Modifica", "Elimina"];
  var buttonName = ["details", "modify", "delete"];
  var buttonClass = 'class="btn btn-primary"';//classe da modificare per stile bottone tabella
  for (var k = 0; k < buttonId.length; k++) {
    $(tr).append(loadButton(arrayValue[0], buttonId[k], buttonText[k], buttonName[k], buttonClass));
  }
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
function loadTable(users) {//funzione bindig tabella
  "use strict";
  var tr;
  var arrayValueTh = ["Nome", "Username", "Website", "Azioni"];
  var th = addRowTh(arrayValueTh);
  $("#userTable").append($(document.createElement("thead")).append(th));
  for (var j = 0; j < users.length; j++) {
    //ciclo creazione righe tabella
    var arrayId = ["id" + j, "name" + j, "username" + j, "website" + j];
    var arrayValue = [users[j].id,users[j].name,users[j].username,users[j].website];
    tr = addRow(arrayId, arrayValue);
    $("#userTable").append($(document.createElement("tbody")).append(tr));
    for (var i = 1; i < arrayId.length; i++) {
      load(arrayId[i], arrayValue[i]);
    }
  }
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
function load(id, value) {
  //funzione di binding
  "use strict";
  $('#'+id).text(value);
}
window.addEventListener("load", function () {
  //avvio funzione dopo il caricamento del DOM
  "use strict";
  $.getJSON("https://jsonplaceholder.typicode.com/users", loadUser);
});