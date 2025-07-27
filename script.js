// randomly generates rock, paper, or scissors for the computer choice 
function getComputerChoice() {
    let choice_num=Math.random()
    if(choice_num>=0 && choice_num<=.33) {
        return "rock"
    }
    else if(choice_num>.33 && choice_num<=.66) {
        return "paper"
    }
    else if(choice_num>.66 && choice_num<=1) {
        return "scissors"
    }
}

//prompts user for rock, paper, or scissors choice
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?")
}

console.log(getComputerChoice())
console.log(getHumanChoice())