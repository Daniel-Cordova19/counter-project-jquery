let counter = 0;

$(document).ready(function() {
    var numero = 0;
    $(".prevBtn").click(function() {
      numero--;
      $("#counter").text(numero);
    });
  });

  $(document).ready(function() {
    var numero = 0;
    $(".nextBtn").click(function() {
      numero++;
      $("#counter").text(numero);
    });
  });

$(document).ready(function () {
    $(document).ready(() =>{
        $(".prevBtn").click(() =>{
        $('#counter').css("color", "red");
        });
    });
});

$(document).ready(function () {
    $(document).ready(() =>{
        $(".nextBtn").click(() =>{
        $('#counter').css("color", "green");
        });
    });
});
