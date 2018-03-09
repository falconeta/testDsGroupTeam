/*global $ */
/*exported callRest*/
function callRest(url, type, typeCall, data, result) {// funzione di chiamata servizio rest 
    'use strict';
    $.ajax({
      url: url,
      type: type,
      data: data,
      success: function (data, textStatus) {
        $(result).text(typeCall + " " + textStatus);
        setTimeout(function () {
          window.open("index.html", "_self");
        }, 2000);
      },
      error: function (data, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }