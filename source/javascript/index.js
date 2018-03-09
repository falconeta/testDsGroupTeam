/*global $ */
/*exported addRow */
function loadUser(users) {//funzione invocata dalla chiamata get per l'acquisizione degli utenti
  "use strict";
  localStorage.setItem("id", "");
  localStorage.setItem("selector", "");
  /*jshint -W117 */loadTable(users);//instanza di caricamento tabella
  $('.loader').fadeOut();
}

window.addEventListener("load", function () {
  //avvio funzione dopo il caricamento del DOM
  "use strict";
  $.getJSON("https://jsonplaceholder.typicode.com/users", loadUser);
});