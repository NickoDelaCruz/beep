
  function isZero(num) {
  if (num.includes("3") === true) {
    return "BEEP BEEP!";
  } else {
    return "SORRY DAVE, CANT DO THAT";
  }
    return "boop";
}

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#user-inputNum").val();
    var result = "";


    result = isZero(userNumber);
    $("#result").text(result);


  });
});
