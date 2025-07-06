let numbers = []
let lastNumbers = []
let firstBall = true

window.addEventListener("load", () => {
    for (let i = 1; i < 91; i++) {
        numbers.push(i)
        let ball = document.createElement("div")
        ball.classList.add("btn")
        ball.classList.add("rounded-circle")
        ball.classList.add("text-center")

        ball.classList.add("little-balls")
        ball.innerHTML = i
        ball.style = "height:40px;width:40px;margin : 5px;background-color: #FFD466"
        document.getElementById("balls").appendChild(ball)

    }
})
const scoreboard = document.getElementById("scoreboard")
const bigBall = document.getElementById("big-ball")
const allBalls = document.getElementsByClassName("little-balls")
const lastNumbersDisplay = document.getElementById("last-numbers")

const pickBall = () => {
    if(numbers.length == 0) {
        scoreboard.classList.add("d-none")
        Swal.fire({
        title: '¡Se acabó!',
        text: 'El juego ha finalizado',
        icon: 'success',
        confirmButtonText: 'Vale',
        confirmButtonColor: '#47B38F',
        background: "aquamarine",
        color: "#ac18cc"
        })
    }
    let rndNumber = Math.floor(Math.random() * numbers.length);
    let luckyBall = numbers[rndNumber]
    let newNumbers = []
    for (let index in numbers) {
        if (index != rndNumber) {
            newNumbers.push(numbers[index]);
        }
    }
    if (lastNumbers.length < 5) {
        lastNumbers.push(luckyBall)
    } else {

        lastNumbers.push(luckyBall)
        lastNumbers.shift()
    }
    if (firstBall) {
        scoreboard.classList.remove("d-none")
                scoreboard.classList.add("d-flex")

        firstBall = false
    }
    bigBall.innerText = luckyBall
    lastNumbersDisplay.innerText = lastNumbers.join("  ")
    for (let ball of allBalls) {
        if (ball.innerText == luckyBall) {
            ball.classList.add("bg-success")
            ball.classList.add("text-light")
        }
    }
    numbers = newNumbers;
}
const pickButton = document.getElementById("pick-ball")
pickButton.addEventListener("click", pickBall)