function nextMoveLogic(FieldNumber, FieldsToPlay, position) {
  console.log(FieldsToPlay);
  console.log(FieldNumber);
  if (FieldsToPlay === 0) {
    return;
  }
  else {
    if (FieldNumber >= 0 && FieldNumber < 10) {
      if (FieldNumber === 0) {
        figureRotation("0_cw", "0px 0px", position);
        setTimeout(function () {
          movingUpAnimation(FieldNumber, FieldsToPlay, 75, position);
        }, 2000);
      } else {
        movingUpAnimation(FieldNumber, FieldsToPlay, 75, position);
      }
    } else if (FieldNumber >= 10 && FieldNumber < 20) {
      if (FieldNumber === 10) {
        if (position === '#position1') {
          figureRotation("90_cw", "35px -12px", position);
        }
        if (position === '#position2') {
          figureRotation("90_cw", "45px 17px", position);
        }
        if (position === '#position3') {
          figureRotation("90_cw", "35px 50px", position);
        }
        if (position === '#position4') {
          figureRotation("90_cw", "35px 85px", position);
        }
        if (position === '.figures') {
          figureRotation("90_cw", "35px -12px", '#position1');
          figureRotation("90_cw", "45px 17px", '#position2');
          figureRotation("90_cw", "35px 50px", '#position3');
          figureRotation("90_cw", "35px 85px", '#position4');
        }
        setTimeout(function () {
          movingRightAnimation(FieldNumber, FieldsToPlay, 75, position);
        }, 2000);
      } else {
        movingRightAnimation(FieldNumber, FieldsToPlay, 75, position);
      }
    } else if (FieldNumber >= 20 && FieldNumber < 30) {
      if (FieldNumber === 20) {
        if (position === '#position1') {
          figureRotation("180_cw", "35px 38px", position);
        }
        if (position === '#position2') {
          figureRotation("180_cw", "39px 38px", position);
        }
        if (position === '#position3') {
          figureRotation("180_cw", "32px 38px", position);
        }
        if (position === '#position4') {
          figureRotation("180_cw", "35px 38px", position);
        }
        if (position === '.figures') {
          figureRotation("180_cw", "35px 38px", '#position1');
          figureRotation("180_cw", "39px 38px", '#position2');
          figureRotation("180_cw", "32px 38px", '#position3');
          figureRotation("180_cw", "35px 38px", '#position4');
        }
        setTimeout(function () {
          movingDownAnimation(FieldNumber, FieldsToPlay, 75, position);
        }, 2000);
      } else {
        movingDownAnimation(FieldNumber, FieldsToPlay, 75, position);
      }
    } else if (FieldNumber >= 30 && FieldNumber < 40) {
      if (FieldNumber === 30) {
        if (position === '#position1') {
          figureRotation("270_cw", "-15px 38px", position);
        }
        if (position === '#position2') {
          figureRotation("270_cw", "20px 38px", position);
        }
        if (position === '#position3') {
          figureRotation("270_cw", "50px 38px", position);
        }
        if (position === '#position4') {
          figureRotation("270_cw", "81px 38px", position);
        }
        if (position === '.figures') {
          figureRotation("270_cw", "-15px 37px", '#position1');
          figureRotation("270_cw", "20px 36px", '#position2');
          figureRotation("270_cw", "50px 38px", '#position3');
          figureRotation("270_cw", "80px 37px", '#position4');
        }
        setTimeout(function () {
          movingLeftAnimation(FieldNumber, FieldsToPlay, 75, position);
        }, 2000);
      } else {
        movingLeftAnimation(FieldNumber, FieldsToPlay, 75, position);
      }
    }
  }
}

function figureRotation(degres, transformPixels, position) {
  TweenLite.to(position, 2, { rotation: degres, transformOrigin: transformPixels });
}

function movingUpAnimation(FieldNumber, FieldsToPlay, distance, position) {
  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;

  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1, position] });

  tl.fromTo(position, { y: -1 * (FieldNumber % 10) * distance }, { duration: delay, y: -1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo(position, { y: -1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, y: -1 * ((FieldNumber % 10 + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}

function movingLeftAnimation(FieldNumber, FieldsToPlay, distance, position) {
  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [(FieldNumber + 1) % 40, FieldsToPlay - 1, position] });

  tl.fromTo(position, { x: 1 * (10 - (FieldNumber % 10)) * distance }, { duration: delay, x: 1 * (10 - (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo(position, { x: 1 * (10 - (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, x: 1 * ((/*breite-2*/8 - (FieldNumber % 10) + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();

}

function movingDownAnimation(FieldNumber, FieldsToPlay, distance, position) {

  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1, position] });

  tl.fromTo(position, { y: 1 * (-10 + (FieldNumber % 10)) * distance }, { duration: delay, y: 1 * (-10 + (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo(position, { y: 1 * (-10 + (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, y: 1 * ((-10 + (FieldNumber % 10) + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}

function movingRightAnimation(FieldNumber, FieldsToPlay, distance, position) {

  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1, position] });

  tl.fromTo(position, { x: 1 * (FieldNumber % 10) * distance }, { duration: delay, x: 1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo(position, { x: 1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, x: 1 * ((FieldNumber % 10 + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}


$(document).ready(function () {
  $("#moveMoreFields").click(function () {
    nextMoveLogic(0, 50, ".figures");
  });

  var counter1 = 0;
  $("#nextFieldP1").click(function () {
    nextMoveLogic(counter1, 1, "#position1");
    counter1++;
    if (counter1 == 40) {
      counter1 = 0;
    }
  });

  var counter2 = 0;
  $("#nextFieldP2").click(function () {
    nextMoveLogic(counter2, 1, "#position2");
    counter2++;
    if (counter2 == 40) {
      counter2 = 0;
    }
  });

  var counter3 = 0;
  $("#nextFieldP3").click(function () {
    nextMoveLogic(counter3, 1, "#position3");
    counter3++;
    if (counter3 == 40) {
      counter3 = 0;
    }
  });

  var counter4 = 0;
  $("#nextFieldP4").click(function () {
    nextMoveLogic(counter4, 1, "#position4");
    counter4++;
    if (counter4 == 40) {
      counter4 = 0;
    }
  });




  //start();
});
