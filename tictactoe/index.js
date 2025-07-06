const board = Array.from(document.querySelectorAll('.square'))
board.unshift(false)
const resetButton = document.querySelector(".reset-button")

let popUp = document.getElementById("popup")
let winnerName = document.getElementById("winner-name")
let someoneWon = false;

const winningConditions = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9], 
    [1, 5, 9], 
    [7, 5, 3]
]

function didIWin(player) {
    winningConditions.forEach((value, index) => {
        const a = board[value[0]].innerHTML
        const b = board[value[1]].innerHTML
        const c = board[value[2]].innerHTML
        if ((a != "" && b != "" && c != "") && (a == b && b == c)) {
            someoneWon = true;
            winnerName.innerHTML = player + " won!!"
            popUp.style.display = "block"
        }

    })
}

function isItOver() {
    if (someoneWon == false) {
        let boardCheck = []
        board.forEach((value, index) => {
            boardCheck.push(value.innerHTML)
        })
        if (!boardCheck.includes("")) {
            someoneWon = true
            winnerName.innerHTML = "It's a tie!"
            popUp.style.display = "block"
        }
    }
}

function clickOnSquare(index) {
    if (!someoneWon) {
        if (!board[index].innerHTML) {
            if (board[0] == false) {
                board[index].innerHTML = "X"
                didIWin("X")
                isItOver()
                board[0] = true
            } else if (board[0] == true) {
                board[index].innerHTML = "O"
                didIWin("O")
                isItOver()
                board[0] = false
            }
        }
    }
}

function resetGame() {
    board[0] = false
    board.forEach((value, index) => {
        if (index != 0) {
            value.innerHTML = "";
        }
    })
    someoneWon = false
    popUp.style.display = "none"

}
board.forEach((square,index) => {
    if (index != 0) {
    square.addEventListener('click', () => clickOnSquare(index))        
    }
})
resetButton.addEventListener('click', () => resetGame())