let humanScore=0
let computerScore=0

// randomly generates rock, paper, or scissors for the computer choice 
function getComputerChoice() {
    let choiceNum=Math.random()
    if(choiceNum>=0 && choiceNum<=.33) {
        return "rock"
    }
    else if(choiceNum>.33 && choiceNum<=.66) {
        return "paper"
    }
    else if(choiceNum>.66 && choiceNum<=1) {
        return "scissors"
    }
}

//prompts user for rock, paper, or scissors choice
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice==computerChoice) {
        console.log(`It's a tie! both players chose ${computerChoice}`)
    }
    else if (humanChoice=="rock" && computerChoice=="scissors" || 
    humanChoice=="paper" && computerChoice=="rock" || 
    humanChoice=="scissors" && computerChoice=="paper") {
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else if (humanChoice=="rock" && computerChoice=="paper" || 
    humanChoice=="paper" && computerChoice=="scissors" || 
    humanChoice=="scissors" && computerChoice=="rock") {
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}

function playGame() {
    console.log("START GAME")
    for(let i=0;i<5;i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
        console.log(`Scores after round ${i+1} - Human: ${humanScore}, Computer: ${computerScore}.`)
    }
    console.log("END GAME")
    console.log(`Final scores - Human: ${humanScore}, Computer: ${computerScore}`)
    if(humanScore>computerScore) {
        console.log("Congratulations, you beat the computer! Refresh the page to try again!")
    }
    else if(humanScore<computerScore) {
        console.log("Better luck next time! Refresh the page to try again!")
    }
    else {
        console.log("You and the computer tied! Refresh the page to try again!")
    }
}
  
playGame()