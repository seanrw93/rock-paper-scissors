const rock = "🗿"
const paper = "📜"
const scissors= "✂️"

let playerCount = 0
let computerCount = 0

let resultsList = []

const inputResults = document.getElementById("results-list")

const playerMove = document.getElementById("player-move")
const computerMove = document.getElementById("computer-move")

const gameBtns = document.querySelectorAll(".game-btns")

const rockBtn = document.getElementById("rock")
const scissorsBtn = document.getElementById("scissors")
const paperBtn = document.getElementById("paper")


rockBtn.addEventListener("click", () => {
    const computerOptions = [rock, paper, scissors]
    const choiceNumber = Math.floor(Math.random() * computerOptions.length); 
    
    playerMove.innerText = rock
    computerMove.innerText = computerOptions[choiceNumber]
    
    game()   
    })

scissorsBtn.addEventListener("click", () => {
    const computerOptions = [rock, paper, scissors]
    const choiceNumber = Math.floor(Math.random() * computerOptions.length)
  
    playerMove.innerText = scissors
    computerMove.innerText = computerOptions[choiceNumber]
    
    game()    
    })

paperBtn.addEventListener("click", () => {
    const computerOptions = [rock, paper, scissors]
    const choiceNumber = Math.floor(Math.random() * computerOptions.length)
    
    playerMove.innerText = paper
    computerMove.innerText = computerOptions[choiceNumber]
    
    game() 
    })


function game() {
    const playerScoreBoard = document.getElementById("player-score")
    const computerScoreBoard = document.getElementById("computer-score")
    const winnerMessage = document.getElementById("winner-message")

    let playerMoveText = playerMove.innerText
    let computerMoveText = computerMove.innerText

    if (playerCount > 4) {
        winnerMessage.innerText = "Game over - Player wins the game"
        playerMove.innerText = "🎉" 
        computerMove.innerText = "🤮"
        gameBtns.forEach(gameBtn => {
            gameBtn.disabled = true
        })
      } else if (computerCount > 4) {
        winnerMessage.innerText = "Game over - Computer wins the game"
        playerMove.innerText = "🤮" 
        computerMove.innerText = "🎉"
        gameBtns.forEach(gameBtn => {
            gameBtn.disabled = true
        })
      }
        else if (playerMoveText === computerMoveText) {
        winnerMessage.innerText = "Draw"
      } else if (playerMoveText === rock) {
          if (computerMoveText === scissors) {
            console.log("Player wins - Rock beats Scissors")
            playerCount++
            playerScoreBoard.innerText = playerCount
            winnerMessage.innerText = "Player wins"
          } else {
            console.log("Computer wins - Paper beats rock") 
            computerCount++
            computerScoreBoard.innerText= computerCount;
            winnerMessage.innerText = "Computer wins"
          }
      } else if (playerMoveText === scissors) {
          if (computerMoveText === paper) {
            console.log("Player wins - Scissors beats paper")
            playerCount++
            playerScoreBoard.innerText = playerCount
            winnerMessage.innerText = "Player wins"
          } else {
            console.log("Computer wins - Rock beats scissors") 
            computerCount++
            computerScoreBoard.innerText= computerCount;
            winnerMessage.innerText = "Computer wins"
          }
      } else if (playerMoveText === paper) {
          if (computerMoveText === rock) {
            console.log("Player wins - Paper beats rock")
            playerCount++
            playerScoreBoard.innerText = playerCount
            winnerMessage.innerText = "Player wins"
          } else {
            console.log("Computer wins - Scissors beats paper") 
            computerCount++
            computerScoreBoard.innerText= computerCount;
            winnerMessage.innerText = "Computer wins"
          }
      }
}


game()

