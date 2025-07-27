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
    return prompt("Rock, paper, or scissors?")
}

console.log(getComputerChoice())
console.log(getHumanChoice())