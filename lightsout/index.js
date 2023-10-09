$(function () {

    function altDrawBoard() {
        let index = 0;
        for (let x = 0; x < 5; x++) {
            let htmlRow = $("<div></div>").addClass("board-row d-flex justify-content-evenly");
            for (let y = 0; y < 5; y++) {
                let htmlBtn = $("<button></button>").addClass("game-btn btn-" + x + "-" + y);
                index++
                if (Math.round(Math.random()) == 1) htmlBtn.addClass("btn-on");
                htmlRow.append(htmlBtn);
            }
            $("#board").append(htmlRow);
        }
    }

    function isItOver() {
        if ($(".btn-on").length == 0){
            $("#modal").addClass("d-flex");
        };
    }
    altDrawBoard();

    $("#modalBtn").on("click", function (event) {
        location.reload();
    })

    $(".game-btn").on("click", function (event) {
        $(this).toggleClass("btn-on");
        let position = event.target.classList[1].replace("btn-", "").split("-");
        let row = parseInt(position[0]);
        let col = parseInt(position[1]);
        console.log(row, col);
        switch (col) {
            case 0:
                $(".btn-" + row + "-" + (col + 1)).toggleClass("btn-on");
                break;
            case 4:
                $(".btn-" + row + "-" + (col - 1)).toggleClass("btn-on");
                break;
            default:
                $(".btn-" + row + "-" + (col + 1)).toggleClass("btn-on");
                $(".btn-" + row + "-" + (col - 1)).toggleClass("btn-on");
                break;
        }
        switch (row) {
            case 0:
                $(".btn-" + (row + 1) + "-" + col).toggleClass("btn-on");
            case 4:
                $(".btn-" + (row - 1) + "-" + col).toggleClass("btn-on");
                break;
            default:
                $(".btn-" + (row + 1) + "-" + col).toggleClass("btn-on");
                $(".btn-" + (row - 1) + "-" + col).toggleClass("btn-on");
                break;
        }
        isItOver();
    })
});