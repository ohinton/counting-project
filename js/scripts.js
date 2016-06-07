$(document).ready(function() {
  $("form#count-up").submit(function(event) {

    var number1 = parseInt("input#number1").val();
    var number2 = parseInt("input#number2").val();
    // var total = [];
    // var outputList = ["#output-list"];
    for (var output = number2; output <= number1; output *= number2) {
    }

    alert(output);

   event.preventDefault();
  });
});
