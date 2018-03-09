/*global $ */
function loadDetails(user) {
  "use strict";
  var arrayId = ["name", "username", "email", "address", "phone", "website"];
  var arrayValue = [user.name,user.username,user.email,user.address.street + " " + user.address.city + " " + user.address.zipcode,user.phone,user.website];
  for (var i = 0; i < arrayId.length; i++) {
    /*jshint -W117 */ load(arrayId[i], arrayValue[i]);
  }
  $(".loader").fadeOut();
}
window.addEventListener("load", function() {
  //avvio funzione dopo il caricamento del DOM
  "use strict";
  $.getJSON("https://jsonplaceholder.typicode.com/users/" + localStorage.getItem("id"),loadDetails);
  $("#back").click(function() {
    window.open("index.html", "_self");
  });
});
