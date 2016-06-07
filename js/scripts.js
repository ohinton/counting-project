$(document).ready(function() {
  $("form#count-up").submit(function(event) {
    // debugger;

    var numberOne = parseInt($("input#number1").val());
    var numberTwo = parseInt($("input#number2").val());

    var output = [];
    for (var index = numberTwo; index <= numberOne; index += numberTwo ) {
      output.push(index);
    }

    alert(output);

   event.preventDefault();
  });
});
