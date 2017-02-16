$(document).ready(function() {
  var score = 0; // global
  $(".formOne").submit(function() {
    event.preventDefault();

    var choices = ["red", "blue", "green", "dog", "cat", "young", "middleAge", "old"];

    choices.forEach(function(info) {
      console.log("start of foreach loop");
      var userAnswer = $("#" + info).val();
      console.log("this is user answer, " + userAnswer);
      var value = parseInt($(userAnswer).attr("value"));
      console.log("this is user value, " + value);
      if(userAnswer === true) {
        console.log("in the if loop, the score is " + score);
        score = score + value;
        console.log("new score is, " + score);
      }

    });
  });
});
