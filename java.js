
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

/*
1=rock
2=paper
3=scissors
*/



function playRound(playerSelection,computerSelection){
    //** Player Selections **
        //Rock
        if (playerSelection==='rock' && computerSelection=== 'paper'){
            return('You Lose! Paper beats Rock')
        }
    
        else if (playerSelection==='rock' && computerSelection=== 'scissors'){
        return('You Win! Rock beats Scissors')
        }
        else if (playerSelection==='rock' && computerSelection=== 'rock'){
            return('Tie! You both picked Rock!')
        }

        //Paper
        if (playerSelection==='paper' && computerSelection=== 'paper'){
            return('Tie! You both picked Paper!')
        }
    
        else if (playerSelection==='paper' && computerSelection=== 'scissors'){
            return('You Lose! Scissors beats Paper')
        }
        else if (playerSelection==='paper' && computerSelection=== 'rock'){
            return('You Win! Paper beats Rock')
        }

        //Scissors
        if (playerSelection==='scissors' && computerSelection=== 'scissors'){
            return('Tie! You both picked Scissors!')
        }
    
        else if (playerSelection==='scissors' && computerSelection=== 'rock'){
            return('You Lose! Rock beats Scissors')
        }
        else if (playerSelection==='scissors' && computerSelection=== 'paper'){
            return('You Win! Scissors beats Paper')
        }        
}

function game(){
    //setting variables for score
    player = 0;
    computer = 0;

    //keeps score and reports winner/loser
    for(let i=0;i<5;i++){
        console.log('Round ' + i+'!') //display round
        const asking = prompt('Rock, paper, or scissors?'); //creates prompt box asking for selection

        //***RPS variables***
        const playerSelection= asking.toLocaleLowerCase();
        const computerSelection=getComputerChoice();
        let result=(playRound(playerSelection,computerSelection));
        console.log(playRound(playerSelection,computerSelection));

        //Function that keeps score
        if (result.includes(winStr)){
         player++;
         console.log('Score: '+player +' : ' + computer)
        }
        else if (result.includes(loseStr)){
            computer++;
            console.log('Score: '+player +' : ' + computer)
        }
        else{
            console.log('Score: '+player +' : ' + computer) 
        }
    }

    //display the final winner
    if (player > computer){
        console.log('YOURE A WINNER!! '+player+' : '+computer)
    }
    else{
        console.log('Sorry you lost. '+player+' : '+computer)
    }
}


const computerSelection=getComputerChoice();
const winStr ='You Win!'
const loseStr = 'You Lose!'

//console.log(playRound(playerSelection,computerSelection));



//Computer will Randomly return either R P or S
    /*Solution:
        -computer generate a random number from 1-3
        - 1 = rock, 2 = paper, 3 = scissors
        - write if statement to return result
*/

//write function that has two parameters 'playerSelection' and 'computerSelection'
//return string that declares a winner of the round

