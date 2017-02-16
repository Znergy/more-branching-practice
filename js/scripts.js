$(document).ready(function() {
  var score = 0; // global
  $(".formOne").submit(function() {
    console.log("score is, " + score);
    event.preventDefault();

    var choices = ["red", "blue", "green", "dog", "cat", "young", "middleAge", "old"];

    choices.forEach(function(info) {
      var userAnswer = ("#" + info).toString();
      var value = parseInt($(userAnswer).val());

      // var value = $(userAnswer).attr("value");
      var name = $(userAnswer).attr("name");
      var isChecked = $(userAnswer).is(':checked');
      console.log(name +" is, " + isChecked);
      if (isChecked === true) {
        console.log("in the if loop, the score is " + score);
        score = score + value;
        console.log("new score is, " + score);
      }
      console.log("asdfnew score is, " + score);
    });
  });
});
