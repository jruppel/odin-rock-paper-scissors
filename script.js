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

console.log(getComputerChoice())