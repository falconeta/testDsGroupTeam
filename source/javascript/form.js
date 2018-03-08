/*global $ */
function load(arrayId, arrayValue) {
  "use strict";
  $("#" + arrayId).attr("value", arrayValue);
}
function loadForm(user) {
  //binding form in modalità modify/delete
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
  $('.loader').fadeOut();
}
window.addEventListener("load", function() {
  //avvio funzione dopo il caricamento del DOM
  "use strict";
  $("#back").click(function() {
    window.open("index.html", "_self");
  });
  switch (this.localStorage.getItem("selector")) {
    case "create":
      $('.loader').fadeOut();
      $("#submit").click(function() {
        $.ajax({
          url: "https://jsonplaceholder.typicode.com/users",
          type: "post",
          data: $("#contact").serialize(),
          success: function(data, textStatus) {
            $("#result").text("create " + textStatus);
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
      $.getJSON(
        "https://jsonplaceholder.typicode.com/users/" +
          localStorage.getItem("id"),
        loadForm
      );
      if (localStorage.selector === "modify") {
        $('#title').text('Modifica');
        $("#submit").click(function() {
          $.ajax({
            url:
              "https://jsonplaceholder.typicode.com/users/" +
              localStorage.getItem("id"),
            type: "put",
            data: $("#contact").serialize(),
            success: function(data, textStatus) {
              $("#result").text("modify " + textStatus);
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
          $('#title').text('Elimina');
        $("#submit").click(function() {
          if (window.confirm("Vuoi veramente cancellare l'utente?")) {
            $.ajax({
              url:
                "https://jsonplaceholder.typicode.com/users/" +
                localStorage.getItem("id"),
              type: "delete",
              data: $("#contact").serialize(),
              success: function(data, textStatus) {
                $("#result").text("delete " + textStatus);
                setTimeout(function() {
                  window.open("index.html", "_self");
                }, 2000);
              },
              error: function(data, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });
          }
        });
      }
      break;
    default:
  }
});
