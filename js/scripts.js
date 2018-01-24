var array = [];


function inputtedNumber(num) {
  for(var i=0; i <= num; i++) {
    if (i % 3 == 0)
      array.push("sorry dave");
    else if (i.toString().includes("0"))
      array.push("beep");
    else if (i.toString().includes('1'))
      array.push("boop");
    else
      array.push(i)
  }

return array;
}



$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#user-inputNum").val();
    var result = inputtedNumber(userNumber);
    $("#result").text(result);
  });
});
