// var contact = ["firstName", "lastName", "addressStreet", "addressCity", "addressState", "addressZip","email", "phoneNumber"];
//
//      contact.forEach(function(info) {
//      if (contact != null)
//        var userAddress = $("input#" + info).val();
//        $("." + info).text(userAddress).val();
//        }
//        else
//        {
//        forEach(function(info){
//         $("."+info).addClass("whateverclassitwas");
//        })
//        }
$(document).ready(function() {
  $(".formOne").submit(function() {
    event.preventDefault();
    alert("hwhwwj");
    var checkBoxes = ["red", "blue", "green", "dog", "cat", "young", "middleAge", "old"];
    checkBoxes.forEach(function(answer) {
      var userChoice = $("#" + answer).val();
      if ((".formOne"*:checked) {
      console.log(userChoice + " user choice");
      console.log(answer + " answer");
    }

    });
  });
});

  // userChoice.forEach(function(){
  //   if (answer === $("input:checkbox[name=flavor]:checked"))
  // })
