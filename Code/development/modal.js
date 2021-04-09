$(document).ready(function () {

    var modal = document.getElementById("myModal");

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $("#myBtn").click(function () {
        $("#myModal").css("display", "block");
    });

    $(".close").click(function () {
        $("#myModal").css("display", "none");
    });

    $(".close").click(function () {
        $(".modal").css("display", "none");
    });

    $(".close").click(function () {
        $("#TradingModal").css("display", "none");
    });

    $("#lobbyButton").click(function () {
        $("#lobbyModal").css("display", "block");
    });



    // the tree buttons inside the modal
    $("#playGame").click(function () {
        console.log("Click playGame");
    });

    $("#roleDouble").click(function () {
        console.log("Click roleDouble");
    });

    $("#luckyCard").click(function () {
        console.log("Click luckyCard");
    });

    tradingModalTesting();

    function tradingModalTesting() {
        $("#TradingModal").show();
        for (var i = 0; i < 25; i++) {
            $("#tradingButtonCollum1").append("<tr><td><button class='tradingButtons'>TESTING" + i + "</button></td></tr>");
            //$("#tradingButtonCollum2").append("<tr><td><button class='tradingButtons'>TESTING"+i+"</button></td></tr>");
            //$("#tradingButtonCollum3").append("<tr><td><button class='tradingButtons'>TESTING"+i+"</button></td></tr>");
            $("#tradingButtonCollum4").append("<tr><td><button class='tradingButtons'>TESTING" + i + "</button></td></tr>");
        }

        $(".tradingButtons").click(function () {
            var htmlToBeMoved = this.parentElement.parentElement;

            if (this.parentElement.parentElement.parentElement.id === "tradingButtonCollum1") {
                $("#tradingButtonCollum2").append(htmlToBeMoved);
            } else if (this.parentElement.parentElement.parentElement.id === "tradingButtonCollum2") {
                $("#tradingButtonCollum1").append(htmlToBeMoved);
            } else if (this.parentElement.parentElement.parentElement.id === "tradingButtonCollum3") {
                $("#tradingButtonCollum4").append(htmlToBeMoved);
            } else if (this.parentElement.parentElement.parentElement.id === "tradingButtonCollum4") {
                $("#tradingButtonCollum3").append(htmlToBeMoved);
            }
        });
    }

    $("#startMenuButton").click(function () {
        $("#startMenu").show();
    });

    $("#menuPlayButton").click(function () {
        $("#startMenu").hide();
    });
});