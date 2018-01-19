  function isZero(num) {
  if(num.includes("0")=== true) {
  return "BEEP BEEP!";
  }else{
    return "ERROR";
  }
   if(num.includes("3")=== true) {
    return "BOOP";  //This code is not working i don't know why will look it up.
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
