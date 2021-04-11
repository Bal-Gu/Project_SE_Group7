const delay = 0.5;

function nextMoveLogic(FieldNumber, FieldsToPlay, position) {
    console.log(FieldsToPlay);
    if (FieldsToPlay === 0) {
        return;
    } else {
        if (FieldNumber >= 0 && FieldNumber < 10) {
            if (FieldNumber === 9) {
                movingUpAnimation(FieldNumber, FieldsToPlay, 75, position);
                if (position === '#position1') {
                    figureRotation("90_cw", "-15px 36px", position);
                }
                if (position === '#position2') {
                    figureRotation("90_cw", "25px 35px", position);
                }
                if (position === '#position3') {
                    figureRotation("90_cw", "50px 35px", position);
                }
                if (position === '#position4') {
                    figureRotation("90_cw", "82px 37px", position);
                }
                if (position === '.figures') {
                    figureRotation("90_cw", "-15px 35px", '#position1');
                    figureRotation("90_cw", "25px 35px", '#position2');
                    figureRotation("90_cw", "50px 35px", '#position3');
                    figureRotation("90_cw", "82px 37px", '#position4');
                }
            } else {
                movingUpAnimation(FieldNumber, FieldsToPlay, 75, position);
            }
        } else if (FieldNumber >= 10 && FieldNumber < 20) {
            if (FieldNumber === 19) {
                movingRightAnimation(FieldNumber, FieldsToPlay, 75, position);
                if (position === '#position1') {
                    figureRotation("180_cw", "-15px 37px", position);
                }
                if (position === '#position2') {
                    figureRotation("180_cw", "25px 37px", position);
                }
                if (position === '#position3') {
                    figureRotation("180_cw", "50px 37px", position);
                }
                if (position === '#position4') {
                    figureRotation("180_cw", "82px 37px", position);
                }
                if (position === '.figures') {
                    figureRotation("180_cw", "-15px 37px", '#position1');
                    figureRotation("180_cw", "25px 37px", '#position2');
                    figureRotation("180_cw", "50px 37px", '#position3');
                    figureRotation("180_cw", "82px 37px", '#position4');
                }
            } else {
                movingRightAnimation(FieldNumber, FieldsToPlay, 75, position);
            }
        } else if (FieldNumber >= 20 && FieldNumber < 30) {
            if (FieldNumber === 29) {
                movingDownAnimation(FieldNumber, FieldsToPlay, 75, position);
                if (position === '#position1') {
                    figureRotation("270_cw", "-15px 38px", position);
                }
                if (position === '#position2') {
                    figureRotation("270_cw", "22px 36px", position);
                }
                if (position === '#position3') {
                    figureRotation("270_cw", "50px 39px", position);
                }
                if (position === '#position4') {
                    figureRotation("270_cw", "83px 37px", position);
                }
                if (position === '.figures') {
                    figureRotation("270_cw", "-15px 38px", '#position1');
                    figureRotation("270_cw", "22px 36px", '#position2');
                    figureRotation("270_cw", "50px 39px", '#position3');
                    figureRotation("270_cw", "83px 37px", '#position4');
                }
            } else {
                movingDownAnimation(FieldNumber, FieldsToPlay, 75, position);
            }
        } else if (FieldNumber >= 30 && FieldNumber < 40) {
            if (FieldNumber === 39) {
                movingLeftAnimation(FieldNumber, FieldsToPlay, 75, position);
                if (position === '#position1') {
                    figureRotation("0_cw", "-15px 38px", position);
                }
                if (position === '#position2') {
                    figureRotation("0_cw", "22px 36px", position);
                }
                if (position === '#position3') {
                    figureRotation("0_cw", "50px 39px", position);
                }
                if (position === '#position4') {
                    figureRotation("0_cw", "83px 37px", position);
                }
                if (position === '.figures') {
                    figureRotation("0_cw", "-15px 38px", '#position1');
                    figureRotation("0_cw", "22px 36px", '#position2');
                    figureRotation("0_cw", "50px 39px", '#position3');
                    figureRotation("0_cw", "83px 37px", '#position4');
                }
            } else {
                movingLeftAnimation(FieldNumber, FieldsToPlay, 75, position);
            }
        }
    }
}

function figureRotation(degrees, transformPixels, position) {
    TweenLite.to(position, 1, {rotation: degrees, transformOrigin: transformPixels});
}

function movingUpAnimation(FieldNumber, FieldsToPlay, distance, position) {
    if (FieldsToPlay <= 0) {
        return;
    }

    var tl = gsap.timeline({
        onComplete: nextMoveLogic,
        onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1, position]
    });

    tl.fromTo(position, {y: -1 * (FieldNumber % 10) * distance}, {
        duration: delay,
        y: -1 * (FieldNumber % 10) * distance + (distance / 2),
        scaleX: 2,
        scaleY: 2,
        ease: "expoScale(1,2,power1.out)"
    })
        .fromTo(position, {
            y: -1 * (FieldNumber % 10) * distance + (distance / 2),
            scaleX: 2,
            scaleY: 2
        }, {
            duration: delay,
            y: -1 * ((FieldNumber % 10 + 1)) * distance,
            scaleX: 1,
            scaleY: 1,
            ease: "expoScale(2,1,power4.out)"
        }, "<");
    tl.play();
}

function movingLeftAnimation(FieldNumber, FieldsToPlay, distance, position) {
    if (FieldsToPlay <= 0) {
        return;
    }

    var tl = gsap.timeline({
        onComplete: nextMoveLogic,
        onCompleteParams: [(FieldNumber + 1) % 40, FieldsToPlay - 1, position]
    });

    tl.fromTo(position, {x: 1 * (10 - (FieldNumber % 10)) * distance}, {
        duration: delay,
        x: 1 * (10 - (FieldNumber % 10)) * distance + (distance / 2),
        scaleX: 2,
        scaleY: 2,
        ease: "expoScale(1,2,power1.out)"
    })
        .fromTo(position, {
            x: 1 * (10 - (FieldNumber % 10)) * distance + (distance / 2),
            scaleX: 2,
            scaleY: 2
        }, {
            duration: delay,
            x: 1 * ((/*breite-2*/8 - (FieldNumber % 10) + 1)) * distance,
            scaleX: 1,
            scaleY: 1,
            ease: "expoScale(2,1,power4.out)"
        }, "<");
    tl.play();

}

function movingDownAnimation(FieldNumber, FieldsToPlay, distance, position) {

    if (FieldsToPlay <= 0) {
        return;
    }

    var tl = gsap.timeline({
        onComplete: nextMoveLogic,
        onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1, position]
    });

    tl.fromTo(position, {y: 1 * (-10 + (FieldNumber % 10)) * distance}, {
        duration: delay,
        y: 1 * (-10 + (FieldNumber % 10)) * distance + (distance / 2),
        scaleX: 2,
        scaleY: 2,
        ease: "expoScale(1,2,power1.out)"
    })
        .fromTo(position, {
            y: 1 * (-10 + (FieldNumber % 10)) * distance + (distance / 2),
            scaleX: 2,
            scaleY: 2
        }, {
            duration: delay,
            y: 1 * ((-10 + (FieldNumber % 10) + 1)) * distance,
            scaleX: 1,
            scaleY: 1,
            ease: "expoScale(2,1,power4.out)"
        }, "<");
    tl.play();
}

function movingRightAnimation(FieldNumber, FieldsToPlay, distance, position) {

    if (FieldsToPlay <= 0) {
        return;
    }

    var tl = gsap.timeline({
        onComplete: nextMoveLogic,
        onCompleteParams: [FieldNumber + 1, FieldsToPlay - 1, position]
    });

    tl.fromTo(position, {x: 1 * (FieldNumber % 10) * distance}, {
        duration: delay,
        x: 1 * (FieldNumber % 10) * distance + (distance / 2),
        scaleX: 2,
        scaleY: 2,
        ease: "expoScale(1,2,power1.out)"
    })
        .fromTo(position, {
            x: 1 * (FieldNumber % 10) * distance + (distance / 2),
            scaleX: 2,
            scaleY: 2
        }, {
            duration: delay,
            x: 1 * ((FieldNumber % 10 + 1)) * distance,
            scaleX: 1,
            scaleY: 1,
            ease: "expoScale(2,1,power4.out)"
        }, "<");
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
