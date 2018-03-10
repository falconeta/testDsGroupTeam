function createElement(t,e){"use strict";return"<"+t+">"+e+"</"+t+">"}function createBtn(t,e,o,i){"use strict";return'<button class="'+e+'" id="'+t+o+'" value="'+o+'" name="'+t+'">'+i+"</button>"}function load(t,e){"use strict";$("#"+t).text(e)}function loadForm(t,e){"use strict";$("#"+t).val(e)}function ObjectToString(t){"use strict";for(var e=Object.getOwnPropertyNames(t),o="",i=0;i<e.length;i++)"object"!=typeof t[e[i]]?o+=" "+t[e[i]]:o+=" "+ObjectToString(t[e[i]]);return o}function destructuringObject(t,e){"use strict";for(var o=Object.getOwnPropertyNames(t),i=0;i<o.length;i++)loadForm(e[i],t[o[i]])}$(document).ready(function(){"use strict";service().getUserId(localStorage.getItem("id"),function(t){loadDetails(t),backButton(),$(".loader").fadeOut()})}),$(document).ready(function(){"use strict";"create"===localStorage.getItem("selector")?loadCreate():loadModifyRemove(),backButton()}),$(document).ready(function(){"use strict";service().getUser(function(t){loadTable("userTable",t),clickBtnTable("form.html","create",""),$(".loader").fadeOut()})});var url="https://jsonplaceholder.typicode.com/users/";function service(){"use strict";return{getUser:function(t){$.getJSON(url,t)},getUserId:function(t,e){$.getJSON(url+t,e)}}}function clickBtnTable(t,e,o){"use strict";$("#"+e+o).click(function(){localStorage.setItem("id",o),localStorage.setItem("selector",e),window.open(t,"_self")})}function submit(t,e,o,i,r){"use strict";$("#submit").click(function(){$.ajax({url:url+t,type:e,data:o,success:function(t,e){$("#"+i).text(r+" "+e),setTimeout(function(){window.open("index.html","_self")},2e3)},error:function(t,e,o){console.log(o)}})})}function backButton(){"use strict";$("#back").click(function(){window.open("index.html","_self")})}function createTDS(t){"use strict";for(var e=Object.getOwnPropertyNames(t),o="",i=1;i<4;i++)o+=createElement("td",t[e[i]]);return o}function createTr(t){"use strict";var e=createTDS(t);return createElement("tr",e+=createElement("td",createBtn("details","btn btn-primary",t.id,"Dettagli")+createBtn("modify","btn btn-primary",t.id,"Modifica")+createBtn("remove","btn btn-primary",t.id,"Rimuovi")))}function loadRowTable(t,e){"use strict";var o=createTr(e);$("#"+t).append(o),clickBtnTable("details.html","details",e.id),clickBtnTable("form.html","modify",e.id),clickBtnTable("form.html","remove",e.id)}function loadTable(t,e){"use strict";for(var o=0;o<e.length;o++)loadRowTable(t,e[o])}function bindingDetails(t,e){"use strict";load(e,"object"!=typeof t?t:ObjectToString(t))}function loadDetails(t){"use strict";for(var e=Object.getOwnPropertyNames(t),o=["id","name","username","email","address","phone","website"],i=0;i<o.length;i++)bindingDetails(t[e[i]],o[i])}function loadCreate(){"use strict";$("#text").text("Crea"),$(".loader").fadeOut(),submit("","post",$("#contact").serialize,"result","Create")}function bindingForm(t,e){"use strict";"object"!=typeof t?loadForm(e,t):destructuringObject(t,["street","suite","city","zipcode"])}function bindForm(t){"use strict";for(var e=Object.getOwnPropertyNames(t),o=["id","name","username","email","","phone","website"],i=1;i<o.length;i++)bindingForm(t[e[i]],o[i])}function loadModify(){"use strict";$("#title").text("Modifica"),submit(localStorage.getItem("id"),"put",$("#contact").serialize,"result","modify")}function loadRemove(){"use strict";$("#title").text("Rimuovi"),$("#submit").val("Cancella"),submit(localStorage.getItem("id"),"delete",$("#contact").serialize,"result","delete")}function loadModifyRemove(){"use strict";service().getUserId(localStorage.getItem("id"),function(t){bindForm(t),"modify"===localStorage.getItem("selector")?loadModify():loadRemove(),$(".loader").fadeOut()})}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci5qcyIsImRldGFpbHMuanMiLCJmb3JtLmpzIiwiaW5kZXguanMiLCJzZXJ2aWNlLmpzIiwidmlldy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwidHlwZSIsImRhdGEiLCJjcmVhdGVCdG4iLCJuYW1lIiwiY2xhc3NCdG4iLCJpZCIsInZhbHVlIiwibG9hZCIsIiQiLCJ0ZXh0IiwibG9hZEZvcm0iLCJ2YWwiLCJPYmplY3RUb1N0cmluZyIsInByb3BlcnR5IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInN0cmluZyIsImkiLCJsZW5ndGgiLCJkZXN0cnVjdHVyaW5nT2JqZWN0IiwiYXJyYXkiLCJkb2N1bWVudCIsInJlYWR5Iiwic2VydmljZSIsImdldFVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkRGV0YWlscyIsImJhY2tCdXR0b24iLCJmYWRlT3V0IiwibG9hZENyZWF0ZSIsImxvYWRNb2RpZnlSZW1vdmUiLCJnZXRVc2VyIiwibG9hZFRhYmxlIiwiY2xpY2tCdG5UYWJsZSIsInVybCIsImNhbGxiYWNrIiwiZ2V0SlNPTiIsImh0bWwiLCJjbGljayIsInNldEl0ZW0iLCJ3aW5kb3ciLCJvcGVuIiwic3VibWl0IiwicmVzdWx0IiwidHlwZUNhbGwiLCJhamF4Iiwic3VjY2VzcyIsInRleHRTdGF0dXMiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJlcnJvclRocm93biIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVURFMiLCJ0ZHMiLCJjcmVhdGVUciIsInRyIiwibG9hZFJvd1RhYmxlIiwidGFibGUiLCJhcHBlbmQiLCJiaW5kaW5nRGV0YWlscyIsImFycmF5SWQiLCJzZXJpYWxpemUiLCJiaW5kaW5nRm9ybSIsImJpbmRGb3JtIiwibG9hZE1vZGlmeSIsImxvYWRSZW1vdmUiXSwibWFwcGluZ3MiOiJBQVFBLFNBQUFBLGNBQUFDLEVBQUFDLEdBQ0EsYUFDQSxNQUFBLElBQUFELEVBQUEsSUFBQUMsRUFB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QTVDLE9BQUFELElBQ0ErQyxZQUFBL0QsRUFBQVksRUFBQUksSUFBQTZDLEVBQUE3QyxJQUdBLFNBQUFpRCxhQUNBLGFBQ0ExRCxFQUFBLFVBQUFDLEtBQUEsWUFFQWtDLE9BQUFsQixhQUFBQyxRQUFBLE1BQUEsTUFBQWxCLEVBQUEsWUFBQXVELFVBQUEsU0FBQSxVQUVBLFNBQUFJLGFBQ0EsYUFDQTNELEVBQUEsVUFBQUMsS0FBQSxXQUNBRCxFQUFBLFdBQUFHLElBQUEsWUFFQWdDLE9BQUFsQixhQUFBQyxRQUFBLE1BQUEsU0FBQWxCLEVBQUEsWUFBQXVELFVBQUEsU0FBQSxVQUVBLFNBQUFoQyxtQkFDQSxhQUVBUixVQUFBQyxVQUFBQyxhQUFBQyxRQUFBLE1BQUEsU0FBQXpCLEdBQ0FnRSxTQUFBaEUsR0FDQSxXQUFBd0IsYUFBQUMsUUFBQSxZQUFBd0MsYUFBQUMsYUFDQTNELEVBQUEsV0FBQXFCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZXhwb3J0ZWQgY3JlYXRlRWxlbWVudCovXG4vKmV4cG9ydGVkIGNyZWF0ZUJ0biovXG4vKmV4cG9ydGVkIGxvYWQqL1xuLypleHBvcnRlZCBsb2FkRm9ybSovXG4vKmV4cG9ydGVkIE9iamVjdFRvU3RyaW5nKi9cbi8qZXhwb3J0ZWQgZGVzdHJ1Y3R1cmluZ09iamVjdCovXG4vKmdsb2JhbCAkKi9cbi8qanNoaW50IGV4cHI6IHRydWUqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHJldHVybiAnPCcgKyB0eXBlICsgJz4nICsgZGF0YSArICc8LycgKyB0eXBlICsgJz4nO1xufVxuZnVuY3Rpb24gY3JlYXRlQnRuKG5hbWUsIGNsYXNzQnRuLCBpZCwgdmFsdWUpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuICc8YnV0dG9uIGNsYXNzPVwiJyArIGNsYXNzQnRuICsgJ1wiIGlkPVwiJyArIG5hbWUgKyBpZCArICdcIiB2YWx1ZT1cIicgKyBpZCArICdcIiBuYW1lPVwiJyArIG5hbWUgKyAnXCI+JyArIHZhbHVlICsgJzwvYnV0dG9uPic7XG59XG5mdW5jdGlvbiBsb2FkKGlkLCB2YWx1ZSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkKCcjJyArIGlkKS50ZXh0KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGxvYWRGb3JtKGlkLCB2YWx1ZSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkKCcjJyArIGlkKS52YWwodmFsdWUpO1xufVxuZnVuY3Rpb24gT2JqZWN0VG9TdHJpbmcoZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKTtcbiAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0eXBlb2YgZGF0YVtwcm9wZXJ0eVtpXV0gIT09ICdvYmplY3QnID8gc3RyaW5nICs9IFwiIFwiICsgZGF0YVtwcm9wZXJ0eVtpXV0gOiBzdHJpbmcgKz0gXCIgXCIgKyBPYmplY3RUb1N0cmluZyhkYXRhW3Byb3BlcnR5W2ldXSk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59XG5mdW5jdGlvbiBkZXN0cnVjdHVyaW5nT2JqZWN0KGRhdGEsIGFycmF5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLypqc2hpbnQgLVcxMTcgKi9cbiAgICAgICAgbG9hZEZvcm0oYXJyYXlbaV0sIGRhdGFbcHJvcGVydHlbaV1dKTtcbiAgICB9XG59IiwiLypnbG9iYWwgJCovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8qanNoaW50IC1XMTE3ICovXG4gICAgc2VydmljZSgpLmdldFVzZXJJZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgbG9hZERldGFpbHMoZGF0YSk7XG4gICAgICAgIGJhY2tCdXR0b24oKTtcbiAgICAgICAgJCgnLmxvYWRlcicpLmZhZGVPdXQoKTtcbiAgICB9KTtcbn0pOyIsIi8qZ2xvYmFsICQqL1xuLypqc2hpbnQgZXhwcjogdHJ1ZSovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8qanNoaW50IC1XMTE3ICovXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdG9yJyk9PT0nY3JlYXRlJz9sb2FkQ3JlYXRlKCk6bG9hZE1vZGlmeVJlbW92ZSgpOyAgICAgICBcbiAgICBiYWNrQnV0dG9uKCk7XG59KTsiLCIvKmdsb2JhbCAkKi9cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8qanNoaW50IC1XMTE3ICovXG4gICAgc2VydmljZSgpLmdldFVzZXIoZnVuY3Rpb24gKGRhdGEpe1xuICAgICAgICBsb2FkVGFibGUoXCJ1c2VyVGFibGVcIixkYXRhKTtcbiAgICAgICAgY2xpY2tCdG5UYWJsZSgnZm9ybS5odG1sJywnY3JlYXRlJywnJyk7XG4gICAgICAgICQoJy5sb2FkZXInKS5mYWRlT3V0KCk7XG4gICAgfSk7XG59KTsiLCIvKmdsb2JhbCAkKi9cbi8qZXhwb3J0ZWQgc2VydmljZSovXG4vKmV4cG9ydGVkIGNsaWNrQnRuVGFibGUqL1xuLypleHBvcnRlZCBiYWNrQnV0dG9uKi9cbi8qZXhwb3J0ZWQgY2FsbFJlc3QqL1xuLypleHBvcnRlZCBzdWJtaXQqL1xudmFyIHVybCA9IFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzL1wiO1xuZnVuY3Rpb24gc2VydmljZSgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VXNlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAkLmdldEpTT04odXJsLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFVzZXJJZDogZnVuY3Rpb24gKGlkLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgJC5nZXRKU09OKHVybCArIGlkLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY2xpY2tCdG5UYWJsZShodG1sLCB0eXBlLCBpZCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkKCcjJyArIHR5cGUgKyBpZCkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCBpZCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RvcicsIHR5cGUpO1xuICAgICAgICB3aW5kb3cub3BlbihodG1sLCBcIl9zZWxmXCIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc3VibWl0KGlkLCB0eXBlLCBkYXRhLCByZXN1bHQsIHR5cGVDYWxsKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICQoJyNzdWJtaXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qanNoaW50IC1XMTE3ICovXG4gICAgICAgIGNhbGxSZXN0KCk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gY2FsbFJlc3QoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHVybCArIGlkLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgICQoJyMnICsgcmVzdWx0KS50ZXh0KHR5cGVDYWxsICsgXCIgXCIgKyB0ZXh0U3RhdHVzKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJpbmRleC5odG1sXCIsIFwiX3NlbGZcIik7XG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYmFja0J1dHRvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJCgnI2JhY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdpbmRleC5odG1sJywgXCJfc2VsZlwiKTtcbiAgICB9KTtcbn0iLCIvKmdsb2JhbCAkKi9cbi8qZXhwb3J0ZWQgbG9hZFRhYmxlKi9cbi8qZXhwb3J0ZWQgbG9hZERldGFpbHMqL1xuLypleHBvcnRlZCBsb2FkQ3JlYXRlKi9cbi8qZXhwb3J0ZWQgbG9hZE1vZGlmeVJlbW92ZSovXG4vKmpzaGludCBleHByOiB0cnVlKi9cbmZ1bmN0aW9uIGNyZWF0ZVREUyhkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpO1xuICAgIHZhciB0ZHMgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICAvKmpzaGludCAtVzExNyAqL1xuICAgICAgICB0ZHMgKz0gY3JlYXRlRWxlbWVudCgndGQnLCBkYXRhW3Byb3BlcnR5W2ldXSk7XG4gICAgfVxuICAgIHJldHVybiB0ZHM7XG59XG5mdW5jdGlvbiBjcmVhdGVUcihkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciB0ciA9IGNyZWF0ZVREUyhkYXRhKTtcbiAgICAvKmpzaGludCAtVzExNyAqL1xuICAgIHRyICs9IGNyZWF0ZUVsZW1lbnQoJ3RkJywgY3JlYXRlQnRuKCdkZXRhaWxzJywgJ2J0biBidG4tcHJpbWFyeScsIGRhdGEuaWQsICdEZXR0YWdsaScpICtcbiAgICAgICAgY3JlYXRlQnRuKCdtb2RpZnknLCAnYnRuIGJ0bi1wcmltYXJ5JywgZGF0YS5pZCwgJ01vZGlmaWNhJykgK1xuICAgICAgICBjcmVhdGVCdG4oJ3JlbW92ZScsICdidG4gYnRuLXByaW1hcnknLCBkYXRhLmlkLCAnUmltdW92aScpKTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgndHInLCB0cik7XG59XG5mdW5jdGlvbiBsb2FkUm93VGFibGUodGFibGUsIGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIHRyID0gY3JlYXRlVHIoZGF0YSk7XG4gICAgJCgnIycgKyB0YWJsZSkuYXBwZW5kKHRyKTtcbiAgICAvKmpzaGludCAtVzExNyAqL1xuICAgIGNsaWNrQnRuVGFibGUoJ2RldGFpbHMuaHRtbCcsICdkZXRhaWxzJywgZGF0YS5pZCk7XG4gICAgLypqc2hpbnQgLVcxMTcgKi9cbiAgICBjbGlja0J0blRhYmxlKCdmb3JtLmh0bWwnLCAnbW9kaWZ5JywgZGF0YS5pZCk7XG4gICAgLypqc2hpbnQgLVcxMTcgKi9cbiAgICBjbGlja0J0blRhYmxlKCdmb3JtLmh0bWwnLCAncmVtb3ZlJywgZGF0YS5pZCk7XG59XG5mdW5jdGlvbiBsb2FkVGFibGUodGFibGUsIGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxvYWRSb3dUYWJsZSh0YWJsZSwgZGF0YVtpXSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYmluZGluZ0RldGFpbHMoZGF0YSwgaWQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgLypqc2hpbnQgLVcxMTcgKi9cbiAgICB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgPyBsb2FkKGlkLCBkYXRhKSA6IGxvYWQoaWQsIE9iamVjdFRvU3RyaW5nKGRhdGEpKTtcbn1cbmZ1bmN0aW9uIGxvYWREZXRhaWxzKGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YSk7XG4gICAgdmFyIGFycmF5SWQgPSBbJ2lkJywgJ25hbWUnLCAndXNlcm5hbWUnLCAnZW1haWwnLCAnYWRkcmVzcycsICdwaG9uZScsICd3ZWJzaXRlJ107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheUlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJpbmRpbmdEZXRhaWxzKGRhdGFbcHJvcGVydHlbaV1dLCBhcnJheUlkW2ldKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb2FkQ3JlYXRlKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkKCcjdGV4dCcpLnRleHQoJ0NyZWEnKTtcbiAgICAkKCcubG9hZGVyJykuZmFkZU91dCgpO1xuICAgIC8qanNoaW50IC1XMTE3ICovXG4gICAgc3VibWl0KCcnLCAncG9zdCcsICQoJyNjb250YWN0Jykuc2VyaWFsaXplLCAncmVzdWx0JywgJ0NyZWF0ZScpO1xufVxuZnVuY3Rpb24gYmluZGluZ0Zvcm0oZGF0YSwgYXJyYXkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgLypqc2hpbnQgLVcxMTcgKi9cbiAgICB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgPyBsb2FkRm9ybShhcnJheSwgZGF0YSkgOiBkZXN0cnVjdHVyaW5nT2JqZWN0KGRhdGEsIFsnc3RyZWV0JywgJ3N1aXRlJywgJ2NpdHknLCAnemlwY29kZSddKTtcbn1cbmZ1bmN0aW9uIGJpbmRGb3JtKGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YSk7XG4gICAgdmFyIGFycmF5SWQgPSBbJ2lkJywgJ25hbWUnLCAndXNlcm5hbWUnLCAnZW1haWwnLCAnJywgJ3Bob25lJywgJ3dlYnNpdGUnXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFycmF5SWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmluZGluZ0Zvcm0oZGF0YVtwcm9wZXJ0eVtpXV0sIGFycmF5SWRbaV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWRNb2RpZnkoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICQoJyN0aXRsZScpLnRleHQoJ01vZGlmaWNhJyk7XG4gICAgLypqc2hpbnQgLVcxMTcgKi9cbiAgICBzdWJtaXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksICdwdXQnLCAkKCcjY29udGFjdCcpLnNlcmlhbGl6ZSwgJ3Jlc3VsdCcsICdtb2RpZnknKTtcbn1cbmZ1bmN0aW9uIGxvYWRSZW1vdmUoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICQoJyN0aXRsZScpLnRleHQoJ1JpbXVvdmknKTtcbiAgICAkKCcjc3VibWl0JykudmFsKCdDYW5jZWxsYScpO1xuICAgICAgICAvKmpzaGludCAtVzExNyAqL1xuICAgICAgICBzdWJtaXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksICdkZWxldGUnLCAkKCcjY29udGFjdCcpLnNlcmlhbGl6ZSwgJ3Jlc3VsdCcsICdkZWxldGUnKTsgXG59XG5mdW5jdGlvbiBsb2FkTW9kaWZ5UmVtb3ZlKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvKmpzaGludCAtVzExNyAqL1xuICAgIHNlcnZpY2UoKS5nZXRVc2VySWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGJpbmRGb3JtKGRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0b3InKSA9PT0gJ21vZGlmeScgPyBsb2FkTW9kaWZ5KCkgOiBsb2FkUmVtb3ZlKCk7XG4gICAgICAgICQoJy5sb2FkZXInKS5mYWRlT3V0KCk7XG4gICAgfSk7XG59Il19