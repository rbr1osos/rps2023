/*
- Create 3 buttons **
- Buttons call playround function w/ correct selection
- Add event listeners to buttons **
- 
*/


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
          document.getElementById('computer').innerText = computer;
        }
    
        else if (playerSelection==='rock' && computerSelection=== 'scissors'){
        console.log('You Win! Rock beats Scissors')
          player++;
          document.getElementById('player').innerText = player;
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
          document.getElementById('computer').innerText = computer;

        }
        else if (playerSelection==='paper' && computerSelection=== 'rock'){
            console.log('You Win! Paper beats Rock')
            player++;
            document.getElementById('player').innerText = player;
        }

//Scissors
        if (playerSelection==='scissors' && computerSelection=== 'scissors'){
            console.log('Tie! You both picked Scissors!')
        }
    
        else if (playerSelection==='scissors' && computerSelection=== 'rock'){
            console.log('You Lose! Rock beats Scissors')
            computer++;
            document.getElementById('computer').innerText = computer;
        }
        else if (playerSelection==='scissors' && computerSelection=== 'paper'){
            console.log('You Win! Scissors beats Paper')
            player++;
            document.getElementById('player').innerText = player;
        }     
  
  function resetScore(){
    player=0;
    computer=0;
    document.getElementById('player').innerText = player;
    document.getElementById('computer').innerText = computer;

  }
  
  console.log(player+ " " + computer)
  //Player Wins!
  if (player>=5){
   const container = document.querySelector('.content');
   const result = document.createElement('div');
   result.classList.add('result');
   result.textContent = 'You Win! Player ' + player + " : Computer " + computer;
   container.appendChild(result);

    document.getElementById('playAgain').innerText = 'Play Again?';
    document.getElementById('playAgain').addEventListener('click',resetScore);  
  }

  //Computer Wins!
    if (computer>=5){
        const container = document.querySelector('.content');
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = 'You Lose! Player ' + player + " : Computer " + computer;
        container.appendChild(result);

    document.getElementById('playAgain').innerText = 'Play Again?';
    document.getElementById('playAgain').addEventListener('click',resetScore);
    
  }
  //If user selects another choice after Win -- resets
  if ((player> 5) || (computer>5)){
    player=0;
    computer=0;
    document.getElementById('player').innerText = player;
    document.getElementById('computer').innerText = computer;
  }
}
