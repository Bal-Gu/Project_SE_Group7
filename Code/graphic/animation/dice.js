var cube = document.getElementById('cube');
var cube2 = document.getElementById('cube2');
var rollButton = $("#rollButton");

function rolldices(numberDice1, numberDice2) {
  rollButton.prop("disabled", true);
  $("#dices").show();

  var xRand = getRandom(numberDice1)[0];
  var yRand = getRandom(numberDice1)[1];
  var xRand2 = getRandom(numberDice2)[0];
  var yRand2 = getRandom(numberDice2)[1];

  xRand = xRand + (Math.floor(Math.random() * 3) + 2) * 360;
  yRand = yRand + (Math.floor(Math.random() * 3) + 2) * 360;
  xRand2 = xRand2 + (Math.floor(Math.random() * 3) + 2) * 360;
  yRand2 = yRand2 + (Math.floor(Math.random() * 3) + 2) * 360;

  setTimeout(function () {
    cube.style = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    cube2.style = 'rotateX(' + xRand2 + 'deg) rotateY(' + yRand2 + 'deg)';
    cube2.style.transform = 'rotateX(' + xRand2 + 'deg) rotateY(' + yRand2 + 'deg)';
  }, 20);

  setTimeout(function () {
    $("#dices").hide();
    rollButton.prop("disabled", false);
  }, 7000);
}

function getRandom(max) {
  if (max == 6) {
    return [90, 90];
  } else if (max == 5) {
    return [270, 180];
  } else if (max == 4) {
    return [0, 90];
  } else if (max == 3) {
    return [0, 270]
  } else if (max == 2) {
    return [0, 180]
  } else if (max == 1) {
    return [0, 0]
  } else {
    return [0, 0]
  }
}
