(function () {
  // "use strict";
  try {
    testVar = "hello undeclared function";
    alert("With strict mode ::: " + testVar);
  } catch (ex) {
    alert("Strict mode Exception ::: " + ex);
  } 
})(); 
$( document ).ready( function(){
   $.ajax({
      url:"https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA",
      type:"Get",
      datatype:"json",
      success:function( data ) {
         $.each( data.results, function( index, ele ) {
              $("#body_events").append('<tr> <td>'+ele.formatted_address+'<td>'+ele.geometry.location.lat+'<td>'+
                             ele.geometry.location.lng+'<td><button class="btn btn-danger" onclick="del(this)"><span class="glyphicon glyphicon-trash"></span> Delete </button></tr>');
         });
       }
  });
  del = function(ele){
    $(ele).parent().parent().remove();
   }
});