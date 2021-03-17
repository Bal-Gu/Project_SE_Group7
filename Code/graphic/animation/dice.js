var cube = document.getElementById('cube');
var rollButton = document.getElementById('rollButton');

var number = 6;

rollButton.onclick = function () {
  var xRand = getRandom(number)[0];
  var yRand = getRandom(number)[1];

  xRand = xRand + (Math.floor(Math.random() * 3) + 1) * 360;
  yRand = yRand + (Math.floor(Math.random() * 3) + 1) * 360;

  cube.style = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
  cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';

  // console.log(xRand % 360 + " " + yRand % 360);

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
