const delay = 0.5;
let boardSize = 0;
let fieldNumbers = 10;

function setBoardSize(size){
    // mediumboard
    if (size === 1){
        boardSize = size;
        fieldNumbers = 8;
    }
    // smallboard
    else if (size === 2){
        boardSize = size;
        fieldNumbers = 5;
    }
    // bigboard
    else if (size === 0){
        boardSize = size;
        fieldNumbers = 10;
    }else{
        boardSize = 0;
        fieldNumbers = 10;
    }
}

function nextMoveLogic(FieldNumber, FieldsToPlay, position) {

    if (FieldsToPlay === 0) {
        return;
    } else {
        if (FieldNumber >= 0 && FieldNumber < fieldNumbers) {
            if (FieldNumber === (fieldNumbers-1)) {
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
        } else if (FieldNumber >= fieldNumbers && FieldNumber < (fieldNumbers*2)) {
            if (FieldNumber === ((fieldNumbers*2)-1)) {
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
        } else if (FieldNumber >= (fieldNumbers*2) && FieldNumber < (fieldNumbers*3)) {
            if (FieldNumber === ((fieldNumbers*3)-1)) {
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
        } else if (FieldNumber >= (fieldNumbers*3) && FieldNumber < (fieldNumbers*4)) {
            if (FieldNumber === ((fieldNumbers*4)-1)) {
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

    tl.fromTo(position, {y: -1 * (FieldNumber % fieldNumbers) * distance}, {
        duration: delay,
        y: -1 * (FieldNumber % fieldNumbers) * distance + (distance / 2),
        scaleX: 2,
        scaleY: 2,
        ease: "expoScale(1,2,power1.out)"
    })
        .fromTo(position, {
            y: -1 * (FieldNumber % fieldNumbers) * distance + (distance / 2),
            scaleX: 2,
            scaleY: 2
        }, {
            duration: delay,
            y: -1 * ((FieldNumber % fieldNumbers + 1)) * distance,
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
        onCompleteParams: [(FieldNumber + 1) % (fieldNumbers*4), FieldsToPlay - 1, position]
    });

    tl.fromTo(position, {x: 1 * (fieldNumbers - (FieldNumber % fieldNumbers)) * distance}, {
        duration: delay,
        x: 1 * (fieldNumbers - (FieldNumber % fieldNumbers)) * distance + (distance / 2),
        scaleX: 2,
        scaleY: 2,
        ease: "expoScale(1,2,power1.out)"
    })
        .fromTo(position, {
            x: 1 * (fieldNumbers - (FieldNumber % fieldNumbers)) * distance + (distance / 2),
            scaleX: 2,
            scaleY: 2
        }, {
            duration: delay,
            x: 1 * (((fieldNumbers-2) - (FieldNumber % fieldNumbers) + 1)) * distance,
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

    tl.fromTo(position, {y: 1 * ((fieldNumbers*-1) + (FieldNumber % fieldNumbers)) * distance}, {
        duration: delay,
        y: 1 * ((fieldNumbers*-1) + (FieldNumber % fieldNumbers)) * distance + (distance / 2),
        scaleX: 2,
        scaleY: 2,
        ease: "expoScale(1,2,power1.out)"
    })
        .fromTo(position, {
            y: 1 * ((fieldNumbers*-1) + (FieldNumber % fieldNumbers)) * distance + (distance / 2),
            scaleX: 2,
            scaleY: 2
        }, {
            duration: delay,
            y: 1 * (((fieldNumbers*-1) + (FieldNumber % fieldNumbers) + 1)) * distance,
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

    tl.fromTo(position, {x: 1 * (FieldNumber % fieldNumbers) * distance}, {
        duration: delay,
        x: 1 * (FieldNumber % fieldNumbers) * distance + (distance / 2),
        scaleX: 2,
        scaleY: 2,
        ease: "expoScale(1,2,power1.out)"
    })
        .fromTo(position, {
            x: 1 * (FieldNumber % fieldNumbers) * distance + (distance / 2),
            scaleX: 2,
            scaleY: 2
        }, {
            duration: delay,
            x: 1 * ((FieldNumber % fieldNumbers + 1)) * distance,
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
        if (counter1 == (fieldNumbers*4)) {
            counter1 = 0;
        }
    });

    var counter2 = 0;
    $("#nextFieldP2").click(function () {
        nextMoveLogic(counter2, 1, "#position2");
        counter2++;
        if (counter2 == (fieldNumbers*4)) {
            counter2 = 0;
        }
    });

    var counter3 = 0;
    $("#nextFieldP3").click(function () {
        nextMoveLogic(counter3, 1, "#position3");
        counter3++;
        if (counter3 == (fieldNumbers*4)) {
            counter3 = 0;
        }
    });

    var counter4 = 0;
    $("#nextFieldP4").click(function () {
        nextMoveLogic(counter4, 1, "#position4");
        counter4++;
        if (counter4 == (fieldNumbers*4)) {
            counter4 = 0;
        }
    });


    //start();
});
