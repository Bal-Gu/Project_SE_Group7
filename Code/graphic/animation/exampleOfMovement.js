var position = document.getElementsByClassName('figures');

function nextMoveLogic(FieldNumber, FieldsToPlay, position) {
  if (FieldsToPlay === 0) {
    return;
  }
  else {
    if (FieldNumber >= 0 && FieldNumber < 10) {
      if (FieldNumber === 0) {
        figureRotation("0_cw");
        setTimeout(function () {
          movingUpAnimation(FieldNumber, FieldsToPlay, 75);
        }, 2000);
      } else if (FieldNumber === 9){
          if(position === "#position1"){
            movingUpAnimation(FieldNumber, FieldsToPlay, 50);
          }
          if(position === "#position2"){
            movingUpAnimation(FieldNumber, FieldsToPlay, 65);
          }
          if(position === "#position3"){
            movingUpAnimation(FieldNumber, FieldsToPlay, 75);
          }
          if(position === "#position4"){
            movingUpAnimation(FieldNumber, FieldsToPlay, 79);
          }
      } else {
        movingUpAnimation(FieldNumber, FieldsToPlay, 75);
      }
    } else if (FieldNumber >= 10 && FieldNumber < 20) {
      if (FieldNumber === 10) {
        if(position === '#position1'){
          figureRotation("90_cw", "30px 25px");
          }
        if(position === '#position2'){
          figureRotation("90_cw", "43px 37px");
          }
        if(position === '#position3'){
          figureRotation("90_cw", "50px 40px");
          }
        if(position === '#position4'){
          figureRotation("90_cw", "60px 60px");
          }
        setTimeout(function () {
          movingRightAnimation(FieldNumber, FieldsToPlay, 75);
        }, 2000);
      } else {
        movingRightAnimation(FieldNumber, FieldsToPlay, 75);
      }
    } else if (FieldNumber >= 20 && FieldNumber < 30) {
      if (FieldNumber === 20) {
        figureRotation("180_cw");
        setTimeout(function () {
          movingDownAnimation(FieldNumber, FieldsToPlay, 75);
        }, 2000);
      } else {
        movingDownAnimation(FieldNumber, FieldsToPlay, 75);
      }
    } else if (FieldNumber >= 30 && FieldNumber < 40) {
      if (FieldNumber === 30) {
        figureRotation("270_cw");
        setTimeout(function () {
          movingLeftAnimation(FieldNumber, FieldsToPlay, 75);
        }, 2000);
      } else {
        movingLeftAnimation(FieldNumber, FieldsToPlay, 75);
      }
    }
  }
}

function figureRotation(degres, transformPixels) {

  TweenLite.to("#position1", 2, { rotation: degres, transformOrigin: transformPixels });
  TweenLite.to("#position2", 2, { rotation: degres, transformOrigin: transformPixels });
  TweenLite.to("#position3", 2, { rotation: degres, transformOrigin: transformPixels });
  TweenLite.to("#position4", 2, { rotation: degres, transformOrigin: transformPixels });
}

function movingUpAnimation(FieldNumber, FieldsToPlay, distance) {
  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  var distance;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1] });

  tl.fromTo(".figures", { y: -1 * (FieldNumber % 10) * distance }, { duration: delay, y: -1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo(".figures", { y: -1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, y: -1 * ((FieldNumber % 10 + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}

function movingLeftAnimation(FieldNumber, FieldsToPlay, distance) {
  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  var distance;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [(FieldNumber + 1) % 40, FieldsToPlay - 1] });

  tl.fromTo(".figures", { x: 1 * (10 - (FieldNumber % 10)) * distance }, { duration: delay, x: 1 * (10 - (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo(".figures", { x: 1 * (10 - (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, x: 1 * ((/*breite-2*/8 - (FieldNumber % 10) + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();

}

function movingDownAnimation(FieldNumber, FieldsToPlay, distance) {

  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  var distance;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1] });

  tl.fromTo(".figures", { y: 1 * (-10 + (FieldNumber % 10)) * distance }, { duration: delay, y: 1 * (-10 + (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo(".figures", { y: 1 * (-10 + (FieldNumber % 10)) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, y: 1 * ((-10 + (FieldNumber % 10) + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}

function movingRightAnimation(FieldNumber, FieldsToPlay, distance) {

  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  var distance;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1] });

  tl.fromTo(".figures", { x: 1 * (FieldNumber % 10) * distance }, { duration: delay, x: 1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo(".figures", { x: 1 * (FieldNumber % 10) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, x: 1 * ((FieldNumber % 10 + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}


$(document).ready(function () {
  $("#moveMoreFields").click(function () {
    nextMoveLogic(0, 50);
  });

  var counter = 0;
  $("#nextFieldP1").click(function () {
    nextMoveLogic(counter, 1, "position1");
    counter++;
    if (counter == 40) {
      counter = 0;
    }
  });

  var counter = 0;
  $("#nextFieldP2").click(function () {
    nextMoveLogic(counter, 1, this.position);
    counter++;
    if (counter == 40) {
      counter = 0;
    }
  });

  var counter = 0;
  $("#nextFieldP3").click(function () {
    nextMoveLogic(counter, 1, this.position);
    counter++;
    if (counter == 40) {
      counter = 0;
    }
  });

  var counter = 0;
  $("#nextFieldP4").click(function () {
    nextMoveLogic(counter, 1, this.position);
    counter++;
    if (counter == 40) {
      counter = 0;
    }
  });




  //start();
});
