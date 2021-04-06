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

    $("#startMenuButton").click(function () {
        $("#startMenu").show();
    });

    $("#menuPlayButton").click(function () {
        $("#startMenu").hide();
    });
});