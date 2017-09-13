/* Business / backend logic: */

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var modular = function(number1, number2) {
  return number1 % number2;
};

/* Front end interface logic: */

$(document).ready(function() {
  $("button#add").click(function(){
    $("form#numSubmit").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#num1").val());
    var number2 = parseFloat($("#num2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    });
  });

  $("button#sub").click(function(){
    $("form#numSubmit").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#num1").val());
    var number2 = parseFloat($("#num2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
    });
  });

  $("button#multi").click(function(){
    $("form#numSubmit").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#num1").val());
    var number2 = parseFloat($("#num2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
    });
  });

  $("button#divi").click(function(){
    $("form#numSubmit").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#num1").val());
    var number2 = parseFloat($("#num2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
    });
  });

  $("button#modu").click(function(){
    $("form#numSubmit").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = modular(number1, number2);
    $("#output").text(result);
    });
  });
});
