  function isZero(num) {
  if(num.includes("3")=== true) {
  return "BEEP BEEP!";
  }else{
    return "ERROR";
  }
 }


$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#user-inputNum").val();
    result = isZero(userNumber);
    $("#result").text(result);
  });
});
