function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3));
    let choice = '';
    if (randomNum == 0)
        choice = 'Rock';
    else if (randomNum == 1)
        choice = 'Paper';
    else
        choice = 'Scissors';
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();
    
    let resultStr = `Draw! both chose ${playerSelection}`;

    if (playerSelection != computerSelection) {
        if (playerSelection == 'Rock' && computerSelection == 'Scissors'
            || playerSelection == 'Scissors' && computerSelection == 'Paper'
            || playerSelection == 'Paper' && computerSelection == 'Rock') {
            resultStr = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            resultStr = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    return resultStr;    
}

function handleClickButton(e) {
    let result = playRound(e.target.id, getComputerChoice());
    if (result.includes("win"))
        playerScore++;
    else if (result.includes("lose"))
        computerScore++;
    let score = document.querySelector('.score');
    score.textContent = `${playerScore}-${computerScore}`;
    document.querySelector('.round-result').textContent = result;

    if (playerScore >= 5 || computerScore >= 5) {
        let result = document.querySelector('.round-result');
        if (playerScore > computerScore)
            result.textContent = "You win!";
        else if (playerScore < computerScore)
            result.textContent = "Computer wins!";
        else
            result.textContent = "Draw";
        document.querySelectorAll('.choice').
            forEach(button => button.removeEventListener('click', handleClickButton));
    }
}

const buttons = document.querySelectorAll('.choice');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', handleClickButton);
})