/*global $ */
window.addEventListener("load", function () {//avvio funzione dopo il caricamento del DOM
  "use strict";
  switch (this.localStorage.getItem("selector")) {//switch per selezionare operazione in base al pulsante premuto (selettore in localStorage)
    case "create":
      $("#title").text("Crea Utente");
      $(".loader").fadeOut();
      $("#submit").click(function () {
        /*jshint -W117 */ callRest("https://jsonplaceholder.typicode.com/users", "post", "create",$("#contact").serialize(),'#result');
      });
      break;
    case "modify": case "delete":
      /*jshint -W117 */ modifyDeleteForm();
      break;
    default:
  }
  $("#back").click(function () {
    window.open("index.html", "_self");
  });
});

function modifyDeleteForm() {
  'use strict';
  /*jshint -W117 */$.getJSON("https://jsonplaceholder.typicode.com/users/" + localStorage.getItem("id"), loadForm);
  if (localStorage.selector === "modify") {
    $("#title").text("Modifica");
    $("#submit").click(function () {
      /*jshint -W117 */ callRest("https://jsonplaceholder.typicode.com/users/" +
      localStorage.getItem("id"), "put", "modify", $("#contact").serialize(), '#result');
    });
  }
  else {
    $("#submit").attr("value", "Cancella");
    $("#title").text("Elimina");
    $("#submit").click(function () {
      if (window.confirm("Vuoi veramente cancellare l'utente?")) {
        /*jshint -W117 */ callRest("https://jsonplaceholder.typicode.com/users/" +
        localStorage.getItem("id"), "delete", "delete", $("#contact").serialize(), '#result');
      }
    });
  }
}