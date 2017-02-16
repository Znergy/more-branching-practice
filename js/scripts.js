$(document).ready(function() {
  var score = 0; // global
  $(".formOne").submit(function() {
    event.preventDefault();

    var choices = ["red", "blue", "green", "dog", "cat", "young", "middleAge", "old"];

    choices.forEach(function(info) {
      var userAnswer = $("#" + info).val();
      var value = parseInt($(userAnswer).attr("value"));

      if(userAnswer === true) {
        score = score + value;
      }

    });
  });
});
