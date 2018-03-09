/*global $ */
function loadForm(user) {//binding form in modalità modify/delete
  "use strict";
  var arrayId = [
    "name",
    "username",
    "email",
    "street",
    "city",
    "zipcode",
    "phone",
    "website"
  ];
  var arrayValue = [
    user.name,
    user.username,
    user.email,
    user.address.street,
    user.address.city,
    user.address.zipcode,
    user.phone,
    user.website
  ];
  for (var i = 0; i < arrayId.length; i++) {
    /*jshint -W117 */loadVal(arrayId[i], arrayValue[i]);
  }
  $(".loader").fadeOut();
}
window.addEventListener("load", function () {//avvio funzione dopo il caricamento del DOM
  "use strict";
  $("#back").click(function () {
    window.open("index.html", "_self");
  });
  switch (this.localStorage.getItem("selector")) {//switch per selezionare operazione in base al pulsante premuto (selettore in localStorage)
    case "create":
      $("#title").text("Crea Utente");
      $(".loader").fadeOut();
      $("#submit").click(function () {
        /*jshint -W117 */ callRest("https://jsonplaceholder.typicode.com/users", "post", "create",$("#contact").serialize(),'#result');
      });
      break;
    case "modify": case "delete":
      $.getJSON("https://jsonplaceholder.typicode.com/users/" + localStorage.getItem("id"), loadForm);
      if (localStorage.selector === "modify") {
        $("#title").text("Modifica");
        $("#submit").click(function () {
          /*jshint -W117 */ callRest("https://jsonplaceholder.typicode.com/users/" +
            localStorage.getItem("id"), "put", "modify",$("#contact").serialize(),'#result');
        });
      } else {
        $("#submit").attr("value", "Cancella");
        $("#title").text("Elimina");
        $("#submit").click(function () {
          if (window.confirm("Vuoi veramente cancellare l'utente?")) {
            /*jshint -W117 */ callRest("https://jsonplaceholder.typicode.com/users/" +
              localStorage.getItem("id"), "delete", "delete",$("#contact").serialize(),'#result');
          }
        });
      }
      break;
    default:
  }
});