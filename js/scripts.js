$(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});

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

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, (number2);
alert(result);
