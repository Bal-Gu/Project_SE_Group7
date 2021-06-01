export class starshower {

    showHideStars(fieldNumber, totalShowStars, referenceNumber) {
        // fieldNumber needs to be a building and total of stars is maximal 5, the referenceNumber should be the player 0-3
        for (let i = 1; i <= 5; i++){
            const starId = "#" + i + "-star" + fieldNumber;
            $(starId).css("visibility","hidden");
            $(starId).removeClass("star-player1");
            $(starId).removeClass("star-player2");
            $(starId).removeClass("star-player3");
            $(starId).removeClass("star-player4");
        }

        if(totalShowStars >= 0){
            for (let i = 1; i <= 5; i++){
                const starId = "#" + i + "-star" + fieldNumber;
                $(starId).attr("src","../Code/graphic/images/small/star.png");
                $(starId).css("visibility","visible");
                $(starId).css("opacity","0.8");
            }
        }

        for (let i = 1; i <= totalShowStars; i++){
            const starId = "#" + i + "-star" + fieldNumber;
            $(starId).css("visibility","visible");

            const classStyle = "star-player"+(referenceNumber+1);
            $(starId).addClass(classStyle);
            $(starId).attr("src","../Code/graphic/images/small/star2.png");
            $(starId).css("opacity","1.0");
        }
    }
}