function inputtedNumber(num) {
if(num.includes(1)=== true) {
  return "  BEEP BEEP! ";
}
else if (num % 3 === 0) {
  return "  Im Sorry Dave Can't Do That  ";
}
else if (num.includes(2)=== true) {
  return "  Boop  ";
  }
  else {
    return "  ERROR!!!  ";
  }
}


$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#user-inputNum").val();
    result = inputtedNumber(userNumber);
    $("#result").append(result);
  });
});
