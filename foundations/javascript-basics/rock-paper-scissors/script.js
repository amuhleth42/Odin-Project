function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function getComputerChoice () {
    let x = getRandomInt(3);

    //console.log(`x: ${x}`)
    switch (x) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound (playerChoice, computerChoice) {

    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice)
        return "Same choice, nobody wins!";
    if (playerChoice == "rock" && computerChoice == "paper")
        return "You lose!";
    if (playerChoice == "rock" && computerChoice == "scissors")
        return "You win!";
    if (playerChoice == "paper" && computerChoice == "rock")
        return "You win!";
    if (playerChoice == "paper" && computerChoice == "scissors")
        return "You lose!";
    if (playerChoice == "scissors" && computerChoice == "rock")
        return "You lose!";
    if (playerChoice == "scissors" && computerChoice == "paper")
        return "You win!";
}

function game () {
    
    let pScore = 0;
    let cScore = 0;

    while (pScore != 5 && cScore != 5) {

        let pc = prompt("Enter your choice: ");
        if (pc == undefined)
        {
            console.log("Please input a valid choice: rock, paper or scissors")
            continue ;
        }
        let round = playRound(pc, getComputerChoice());
        if (round == undefined)
            console.log("Please input a valid choice: rock, paper or scissors")
        else
            console.log(round);
        if (round == "You win!")
            pScore++;
        else if (round == "You lose!")
            cScore++;
        console.log(`Player score: ${pScore}, computer score: ${cScore}`)
    }
    if (pScore == 5)
        console.log("You won the game!")
    else
        console.log("You lost the game!")

}
console.log("Welcome to Rock Paper Scissors!")
game();