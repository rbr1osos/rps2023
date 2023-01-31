//Variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('p');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');
const reset_div = document.getElementById('reset');

function getComputerChoice(){
    const choices= ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//RESET BUTTON APPEARS
function reset(){
userScore=0;
computerScore=0;
const button_container = reset_div
const resetButton = document.createElement('button');
resetButton.classList.add('button'); //.button
resetButton.textContent='Play Again?'
button_container.appendChild(resetButton);

document.querySelector('.button').addEventListener('click',buttonReset);
;

}

//REMOVE BUTTON
function buttonReset(){
    userScore=0;
    computerScore=0;
    userScore_span.innerText=userScore;
    computerScore_span.innerText = computerScore;
    document.querySelector('.button').remove();
    document.querySelector('.congrats').remove();
    
}

function win(userChoice,computerChoice){
const userChoice_div = document.getElementById(userChoice);
userScore++;
userScore_span.innerText=userScore;
computerScore_span.innerText = computerScore;
result_div.innerText = `${userChoice} beats ${computerChoice}. You win!`;
userChoice_div.classList.add('green-glow');
setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')},400);

if (userScore>4){
    const button_container = reset_div
    const resetButton = document.createElement('div');
    resetButton.classList.add('congrats'); //.button
    resetButton.textContent='YOU WIN!!!'
    button_container.appendChild(resetButton); 
    reset();
    }


}
function lose(userChoice,computerChoice){
const userChoice_div = document.getElementById(userChoice);
computerScore++;
computerScore_span.innerText=computerScore;
userScore_span.innerText=userScore;
result_div.innerText = `${computerChoice} beats ${userChoice}. You lose!`;
userChoice_div.classList.add('red-glow');
setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')},400);
if (computerScore>4){
    const button_container = reset_div
    const resetButton = document.createElement('div');
    resetButton.classList.add('congrats'); //.button
    resetButton.textContent='YOU LOSE!!!'
    button_container.appendChild(resetButton); 
    reset();
    }
}

function draw(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerText = `Draw!! You both selected ${userChoice}!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')},400);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice +computerChoice){
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice, computerChoice);
            break;
    }
}


rock_div.addEventListener('click', function(){
    game('Rock');
})
paper_div.addEventListener('click', function(){
    game('Paper');

})
scissors_div.addEventListener('click', function(){
    game('Scissors');

})



/*
//DOM Elements
document.getElementById('rockButton').addEventListener('click',function() {
    playRound('rock',);
  });
  document.getElementById('paperButton').addEventListener('click',function() {
    playRound('paper');
  });
  document.getElementById('scissorsButton').addEventListener('click',function() {
    playRound('scissors');
  });
  
//variables
let player = 0;
let computer = 0;

//computer choice
function getComputerChoice(){
let choice= Math.floor((Math.random()*3+1))
if (choice == 1){
    return('rock')
}
else if (choice == 2){
    return('paper')
}
else{
    return('scissors')
}
}

//Play Round
function playRound(playerSelection,computerSelection){
 computerSelection=getComputerChoice();

//Rock
        if (playerSelection==='rock' && computerSelection=== 'paper'){
            console.log('You Lose! Paper beats Rock')
          computer++;
          document.getElementById('computer-score').innerText = computer;
        }
    
        else if (playerSelection==='rock' && computerSelection=== 'scissors'){
        console.log('You Win! Rock beats Scissors')
          player++;
          document.getElementById('user-score').innerText = player;
        }
        else if (playerSelection==='rock' && computerSelection=== 'rock'){
            console.log('Tie! You both picked Rock!')
        }

//Paper
        if (playerSelection==='paper' && computerSelection=== 'paper'){
            console.log('Tie! You both picked Paper!')
        }
    
        else if (playerSelection==='paper' && computerSelection=== 'scissors'){
            console.log('You Lose! Scissors beats Paper')
            computer++;
          document.getElementById('computer-score').innerText = computer;

        }
        else if (playerSelection==='paper' && computerSelection=== 'rock'){
            console.log('You Win! Paper beats Rock')
            player++;
            document.getElementById('user-score').innerText = player;
        }

//Scissors
        if (playerSelection==='scissors' && computerSelection=== 'scissors'){
            console.log('Tie! You both picked Scissors!')
        }
    
        else if (playerSelection==='scissors' && computerSelection=== 'rock'){
            console.log('You Lose! Rock beats Scissors')
            computer++;
            document.getElementById('computer-score').innerText = computer;
        }
        else if (playerSelection==='scissors' && computerSelection=== 'paper'){
            console.log('You Win! Scissors beats Paper')
            player++;
            document.getElementById('user-score').innerText = player;
        }     
  
  function resetScore(){
    player=0;
    computer=0;
    document.getElementById('player').innerText = player;
    document.getElementById('computer').innerText = computer;

  }
  
  console.log(player+ " " + computer)
  //Player Wins!
  if (player>4){
   const container = document.querySelector('.gameHistory');
   const result = document.createElement('div');
   result.classList.add('result');
   result.textContent = 'You Win! Player ' + player + " : Computer " + computer;
   container.appendChild(result);

    document.getElementById('playAgain').innerText = 'Play Again?';
    document.getElementById('playAgain').addEventListener('click',resetScore);  
  }

  //Computer Wins!
    if (computer>4){
        const container = document.querySelector('.gameHistory');
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = 'You Lose! Player ' + player + " : Computer " + computer;
        container.appendChild(result);

    document.getElementById('playAgain').innerText = 'Play Again?';
    document.getElementById('playAgain').addEventListener('click',resetScore);
    
  }
  //If user selects another choice after Win -- resets
  if ((player> 4) || (computer>4)){
    player=0;
    computer=0;
    document.getElementById('player').innerText = player;
    document.getElementById('computer').innerText = computer;
  }
}
*/