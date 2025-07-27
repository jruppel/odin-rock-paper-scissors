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

//plays a round of Rock, Paper, Scissors using human & player choices
function playRound(humanChoice, computerChoice) {
    if (humanChoice==computerChoice) {
        console.log("It's a tie!")
    }
    else if (humanChoice=="rock" && computerChoice=="scissors" || 
    humanChoice=="paper" && computerChoice=="rock" || 
    humanChoice=="scissors" && computerChoice=="paper") {
        humanScore+=1
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else if (humanChoice=="rock" && computerChoice=="paper" || 
    humanChoice=="paper" && computerChoice=="scissors" || 
    humanChoice=="scissors" && computerChoice=="rock") {
        computerScore+=1
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
  }
  
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
  
playRound(humanSelection, computerSelection)