function nextMoveLogic(FieldNumber, FieldsToPlay) {
  if (FieldsToPlay === 0) {
    return;
  }
  else {
    if (FieldNumber >= 0 && FieldNumber < 10) {
      if (FieldNumber === 0) {
        figureRotation("0_cw");
        setTimeout(function () {
          movingUpAnimation(FieldNumber, FieldsToPlay);
        }, 2000);
      } else {
        movingUpAnimation(FieldNumber, FieldsToPlay);
      }
    } else if (FieldNumber >= 10 && FieldNumber < 20) {
      if (FieldNumber === 10) {
        figureRotation("90_cw");
        setTimeout(function () {
          movingRightAnimation(FieldNumber, FieldsToPlay);
        }, 2000);
      } else {
        movingRightAnimation(FieldNumber, FieldsToPlay);
      }
    } else if (FieldNumber >= 20 && FieldNumber < 30) {
      if (FieldNumber === 20) {
        figureRotation("180_cw");
        setTimeout(function () {
          movingDownAnimation(FieldNumber, FieldsToPlay);
        }, 2000);
      } else {
        movingDownAnimation(FieldNumber, FieldsToPlay);
      }
    } else if (FieldNumber >= 30 && FieldNumber < 40) {
      if (FieldNumber === 30) {
        figureRotation("270_cw");
        setTimeout(function () {
          movingLeftAnimation(FieldNumber, FieldsToPlay);
        }, 2000);
      } else {
        movingLeftAnimation(FieldNumber, FieldsToPlay);
      }
    }
  }
}

function figureRotation(degres) {
  TweenLite.to("#car", 2, { rotation: degres, transformOrigin: "43px 37px" });
}

function movingUpAnimation(FieldNumber, FieldsToPlay) {
  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  const distance = 75;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1] });

  tl.fromTo("#car", { y: -1 * (FieldNumber % 10) * distance }, { duration: delay, y: -1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo("#car", { y: -1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, y: -1 * ((FieldNumber % 10 + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}

function movingLeftAnimation(FieldNumber, FieldsToPlay) {
  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  const distance = 75;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [(FieldNumber + 1) % 40, FieldsToPlay - 1] });

  tl.fromTo("#car", { x: 1 * (10 - (FieldNumber % 10)) * distance }, { duration: delay, x: 1 * (10 - (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo("#car", { x: 1 * (10 - (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, x: 1 * ((/*breite-2*/8 - (FieldNumber % 10) + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();

}

function movingDownAnimation(FieldNumber, FieldsToPlay) {

  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  const distance = 75;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1] });

  tl.fromTo("#car", { y: 1 * (-10 + (FieldNumber % 10)) * distance }, { duration: delay, y: 1 * (-10 + (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo("#car", { y: 1 * (-10 + (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, y: 1 * ((-10 + (FieldNumber % 10) + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}

function movingRightAnimation(FieldNumber, FieldsToPlay) {

  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  const distance = 75;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1] });

  tl.fromTo("#car", { x: 1 * (FieldNumber % 10) * distance }, { duration: delay, x: 1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo("#car", { x: 1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, x: 1 * ((FieldNumber % 10 + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}


$(document).ready(function () {
  $("#moveMoreFields").click(function () {
    nextMoveLogic(0, 50);
  });

  var counter = 0;
  $("#nextField").click(function () {
    nextMoveLogic(counter, 1);
    counter++;
    if (counter == 40) {
      counter = 0;
    }
  });
  //start();
});
