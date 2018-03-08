/*global $ */
function load(arrayId, arrayValue) {
  "use strict";
  $("#" + arrayId).attr("value", arrayValue);
}
function loadForm(user) {
  //binding form in modalità modify
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
    load(arrayId[i], arrayValue[i]);
  }
}
window.addEventListener("load", function() {
  //avvio funzione dopo il caricamento del DOM
  "use strict";
  switch (this.localStorage.getItem("selector")) {
    case "create":
      console.log("create");
      $("#submit").click(function() {
        $.ajax({
          url: "https://jsonplaceholder.typicode.com/users",
          type: "post",
          data: $("#contact").serialize(),
          success: function(data, textStatus) {
            $("#result").text('create '+textStatus);
            setTimeout(function() {
              window.open("index.html", "_self");
            }, 2000);
          },
          error: function(data, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
      });
      break;
    case "modify":
    case "delete":
      console.log("modify");
      $.getJSON(
        "https://jsonplaceholder.typicode.com/users/" +
          localStorage.getItem("id"),
        loadForm
      );
      if (localStorage.selector === "modify") {
        $("#submit").click(function() {
          $.ajax({
            url:
              "https://jsonplaceholder.typicode.com/users/" +
              localStorage.getItem("id"),
            type: "put",
            data: $("#contact").serialize(),
            success: function(data, textStatus) {
              $("#result").text('modify '+ textStatus);
              setTimeout(function() {
                window.open("index.html", "_self");
              }, 2000);
            },
            error: function(data, textStatus, errorThrown) {
              console.log(errorThrown);
            }
          });
        });
      } else {
        $("#submit").click(function() {
          $.ajax({
            url:
              "https://jsonplaceholder.typicode.com/users/" +
              localStorage.getItem("id"),
            type: "delete",
            data: $("#contact").serialize(),
            success: function(data, textStatus) {
              $("#result").text('delete '+textStatus);
              setTimeout(function() {
                window.open("index.html", "_self");
              }, 2000);
            },
            error: function(data, textStatus, errorThrown) {
              console.log(errorThrown);
            }
          });
        });
      }
      break;
    default:
  }
});
