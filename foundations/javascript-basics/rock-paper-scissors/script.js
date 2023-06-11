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
function getResult(playerChoice, computerChoice) {
    
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
function playRound (playerChoice, computerChoice) {

    let str = getResult(playerChoice, computerChoice);
    if (str == "You win!")
        pScore++;
    else if (str == "You lose!")
        cScore++;

    let ps = document.querySelector("#ps");
    ps.textContent = pScore;
    let cs = document.querySelector("#cs");
    cs.textContent = cScore;
    let res = document.querySelector("#res");
    res.textContent = str;
    let pchoice = document.querySelector("#pchoice");
    pchoice.textContent = playerChoice;
    let cchoice = document.querySelector("#cchoice");
    cchoice.textContent = computerChoice;
}

let pScore = 0;
let cScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    console.log("paper");
    playRound("paper", getComputerChoice());
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    console.log("scissors");
    playRound("scissors", getComputerChoice());
});