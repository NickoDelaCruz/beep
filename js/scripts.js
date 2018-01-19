  function isZero(num) {
  if(num.includes(0)=== true) {
    return "BEEP BEEP!";
  }
  else if (num.includes(3) === true) {
    return "BOOP";
  }
  else {
    return "Error";
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
