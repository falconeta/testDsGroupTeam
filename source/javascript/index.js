/*global $ */
var n = 1;
var pos = 1;
function loadUser(user) {
  //funzione caricamento homepage con binding e popolazione localStorage se disponibile
  "use strict";
  // if (localStorage && localStorage.ultimoaccesso) {
  //     oldDate = localStorage.ultimoaccesso;
  // } else {
  //     oldDate = "MAI";
  // }
  localStorage.setItem("id", "");
  localStorage.setItem("selector", "");
  loadTable(user);
}
function addRow(array, arrayValue) {
  //funzione creazione righe tabella
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
  var btnDetails = $(document.createElement("button"));
  $(btnDetails).attr("id", "btnDetails" + arrayValue[0]);
  $(btnDetails).text("Dettagli");
  $(btnDetails).attr("value", arrayValue[0]);
  $(btnDetails).attr("name", "details");
  $(tr).append(btnDetails);
  var btnModify = $(document.createElement("button"));
  $(btnModify).attr("id", "btnModify" + arrayValue[0]);
  $(btnModify).text("Modifica");
  $(btnModify).attr("value", arrayValue[0]);
  $(btnModify).attr("name", "modify");
  $(tr).append(btnModify);
  var btnDelete = $(document.createElement("button"));
  $(btnDelete).attr("id", "btnDelete" + arrayValue[0]);
  $(btnDelete).text("Elimina");
  $(btnDelete).attr("value", arrayValue[0]);
  $(btnDelete).attr("name", "delete");
  $(tr).append(btnDelete);
  return tr;
}
function addRowTh(array) {
  //funzione creazione testa tabella
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
function loadTable(users) {
  "use strict";
  n = 1;
  pos = 1;
  var tr;
  console.log(users[5]);
  var arrayValueTh = ["Nome", "Username", "Website", "Azioni"];
  var th = addRowTh(arrayValueTh);
  $("#userTable").append(th);
  for (var j = 0; j < users.length; j++) {
    //ciclo creazione righe tabella
    var arrayId = ["id" + j, "name" + j, "username" + j, "website" + j];
    var arrayValue = [
      users[j].id,
      users[j].name,
      users[j].username,
      users[j].website
    ];
    tr = addRow(arrayId, arrayValue);
    $("#userTable").append(tr);
    for (var i = 1; i < arrayId.length; i++) {
      load(arrayId[i], arrayValue[i]);
    }
  }
  $("button").click(function(data) {
      console.log(data.currentTarget.name);
      localStorage.setItem('id', data.currentTarget.value);
      localStorage.setItem('selector', data.currentTarget.name);
  });
}

function load(id, value) {
  //funzione di binding
  "use strict";
  var name = document.getElementById(id);
  name.innerText = value;
}

window.addEventListener("load", function() {
  //avvio funzione dopo il caricamento del DOM
  "use strict";
  $.getJSON("https://jsonplaceholder.typicode.com/users", loadUser);
  
});
