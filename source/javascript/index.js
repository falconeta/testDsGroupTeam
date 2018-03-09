/*global $ */
function loadUser(users) {//funzione invocata dalla chiamata get per l'acquisizione degli utenti
  "use strict";
  localStorage.setItem("id", "");
  localStorage.setItem("selector", "");
  loadTable(users);//instanza di caricamento tabella
  $('.loader').fadeOut();
}
function loadTable(users) {//funzione bindig tabella
  "use strict";
  var tr;
  var arrayValueTh = ["Nome", "Username", "Website", "Azioni"];
  var th = addRowTh(arrayValueTh);
  $("#userTable").append($(document.createElement("thead")).append(th));
  var tbody=$(document.createElement("tbody"));
  $("#userTable").append(tbody);
  for (var j = 0; j < users.length; j++) {
    //ciclo creazione righe tabella
    var arrayId = ["id" + j, "name" + j, "username" + j, "website" + j];
    var arrayValue = [users[j].id,users[j].name,users[j].username,users[j].website];
    tr = addRow(arrayId, arrayValue);
    $(tbody).append(tr);
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