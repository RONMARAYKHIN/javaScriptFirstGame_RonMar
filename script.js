/*function computerPlay(){
    let choice = Math.floor(Math.random() * 3)  + 1;
    if(choice == 1)
    {
       return 'rock';
    }
    if(choice == 2)
    {
        return 'papaer';
    }
    if(choice == 3)
    {
        return 'scissors';
    }
}
/*let lower = function(text)
{
    console.log(text.toLowerCase());
}
function playRound(playersSelection, computerSelection, playersScore,computerScore){
    //let fixP = lower(playersSelection);
   // let fixC = lower(computerSelection);
    if(playersSelection === 'rock' && computerSelection ==='scissors')
    {
        console.log("the computer selection was:", computerPlay());
        console.log("You Win! Rock beats Sccissors");
        playersScore++;
    } else if(playersSelection ==='rock' && computerSelection ==='Papper'){
        console.log("the computer selection was:", computerPlay());
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    }else if(playersSelection ==='rock' && computerSelection ==='rock'){
        console.log("the computer selection was:", computerPlay());
        console.log("Its tie!");
    }else if(playersSelection ==='paper' && computerSelection ==='scissors'){
        console.log("the computer selection was:", computerPlay());
        console.log("You Lose! Sccisors beats Paper");
        computerScore++;
    }else if(playersSelection ==='paper' && computerSelection ==='rock'){
        console.log("the computer selection was:", computerPlay());
        console.log("You Win! Paper beats Rock");
        playersScore++;
    }else if(playersSelection ==='paper' && computerSelection ==='paper'){
        console.log("the computer selection was:", computerPlay());
        console.log("Its tie!");
    }else if(playersSelection ==='scissors' && computerSelection ==='paper'){
        console.log("the computer selection was:", computerPlay());
        console.log("You Win! Scissors beats Paper"); 
        playersScore++;
    }else if(playersSelection ==='scissors' && computerSelection ==='rock'){
        console.log("the computer selection was:", computerPlay());
        console.log("You Lose! Rock beats Sccisors");
        computerScore++;
    }else{
        console.log("the computer selection was:", computerPlay());
        console.log("Its tie!");
    }
}
function game()
{
    let playersScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        computerPlay();
        let playersSelection = prompt("Choose one of this selection you can write them as you like - in UPPERCASE or in lowercase - Rock, Paper,Scissors");
        playRound(playersSelection,computerPlay(),playersScore,computerScore);
    }
    if(playersScore > computerScore){
        console.log("You are the Winner!!!");
    }else if(computerScore > playersScore){
        console.log("You are the Losser!");
    }else{
        console.log("Its tie!")
    }
}
playRound('rock', computerPlay,0,0);

*/

function computerPlay(){
    let choice = Math.floor(Math.random() * 3)  + 1;
    if(choice == 1)
    {
       return 'rock';
    }
    if(choice == 2)
    {
        return 'papaer';
    }
    if(choice == 3)
    {
        return 'scissors';
    }
}
/*let lower = function(text)
{
    console.log(text.toLowerCase());
}*/
function playRound(playersSelection, computerSelection, playerScore,computerScore){
   playersSelection = playersSelection.toString().toLowerCase();
   computerSelection = computerSelection.toString().toLowerCase();
   if(playersSelection.toString() == computerSelection.toString()){
       console.log("the computer selection was:", computerSelection);
       console.log('Its tie!');
   }else if(playersSelection == 'rock'){
       if(computerSelection == 'paper'){
          console.log("the computer selection was:", computerSelection);
           console.log('Computer Won');
           computerScore = computerScore + 1;
       }else{
          console.log("the computer selection was:", computerSelection);
          console.log('Player Won');
           playerScore = playerScore + 1;
       }
   }
   else if(playersSelection == 'scissors'){
       if(computerSelection == 'rock'){
         console.log("the computer selection was:", computerSelection);
           console.log('Computer Won');
           computerScore = computerScore + 1;
       }else{
         console.log("the computer selection was:", computerSelection);
           console.log('Player Won');
           playerScore = playerScore + 1;
       }
   }
   else if(playersSelection == 'paper'){
       if(computerSelection.toString() == 'scissors'){
          console.log("the computer selection was:", computerSelection);
           console.log('Computer Won');
           computerScore = computerScore + 1;
       }else{
          console.log("the computer selection was:", computerSelection);
           console.log('Player Won');
           playerScore = playerScore + 1;
       }
   }
}
function game()
{
    let playersScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        computerPlay();
        let playersSelection = prompt("Choose one of this selection you can write them as you like - in UPPERCASE or in lowercase - Rock, Paper,Scissors");
        playRound(playersSelection,computerPlay(),playersScore,computerScore);
    }
    if(playersScore > computerScore){
        console.log("You are the Winner!!!");
    }else if(computerScore > playersScore){
        console.log("You are the Losser!");
    }else{
        console.log("Its tie!")
    }
}
game();
