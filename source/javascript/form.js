/*global $ */
function load(arrayId, arrayValue) {
  "use strict";
  $("#" + arrayId).attr("value", arrayValue);
}
function loadForm(user) {//binding form in modalità modify
  "use strict";
  var arrayId = [
    "name",
    "username",
    "email",
    "street",
    "city",
    "zipcode",
    "phone",
    "website"];
  var arrayValue = [
    user.name, 
    user.username, 
    user.email, 
    user.address.street,
    user.address.city,
    user.address.zipcode,
    user.phone,
    user.website];
  for (var i = 0; i < arrayId.length; i++) {
    load(arrayId[i], arrayValue[i]);
  }
}
window.addEventListener("load", function() {
  //avvio funzione dopo il caricamento del DOM
  "use strict";
  switch (this.localStorage.getItem("selector")) {
    case "create":
      console.log("create");
      break;
    case "modify":
      $.getJSON(
        "https://jsonplaceholder.typicode.com/users/" +
          localStorage.getItem("id"),
        loadForm
      );
      break;
    case "delete":
      console.log("delete");
      break;
  }
});
