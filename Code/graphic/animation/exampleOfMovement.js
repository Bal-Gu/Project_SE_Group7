function nextMoveLogic(FieldNumber, FieldsToPlay) {
  if (FieldsToPlay === 1) {
    return;
  }
  else {
    if (FieldNumber === 10) {
      movingRightAnimation();
    }
    else {
      movingUpAnimation(FieldNumber + 1, FieldsToPlay - 1);
    }
  }
}

function movingUpAnimation(FieldNumber, FieldsToPlay) {
  if (FieldsToPlay <= 0) {
    return;
  }
  const delay = 0.7;
  const distance = 100;
  var tl = gsap.timeline({ onComplete: nextMoveLogic, onCompleteParams: [FieldNumber, FieldsToPlay] });

  tl.fromTo("#car", { y: -1 * (FieldNumber) * distance }, { duration: delay, y: -1 * (FieldNumber) * distance + (distance / 2), scaleX: 2, scaleY: 2, ease: "expoScale(1,2,power1.out)" })
    .fromTo("#car", { y: -1 * (FieldNumber) * distance + (distance / 2), scaleX: 2, scaleY: 2 }, { duration: delay, y: -1 * ((FieldNumber + 1)) * distance, scaleX: 1, scaleY: 1, ease: "expoScale(2,1,power4.out)" }, "<");
  tl.play();
}



//TODO
function movingRightAnimation() {

}


$(document).ready(function () {
  /*movingUpAnimation(1,2);
  $("#mybutton").click(function(){
    movingUpAnimation(1,2);
  });*/
  //start();
});
