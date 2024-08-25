let score = JSON.parse(localStorage.getItem('score')) || {
    Wins : 0,
    Losses : 0, 
    Ties : 0
};

updateElement();



let picked = '';
  function theGame(myMove){     
 let computerMove = pickComputerMove();
 result = '';
    if(myMove==='ROCK'){

        if(computerMove === 'ROCK'){
            result = 'Tie.';
        }else if(computerMove === 'PAPER'){
            result = 'You Lose.'; 
        }else if (computerMove === 'SCISSORS'){
            result = 'You Win!!';
        }  
    }else if(myMove ==='PAPER'){
        if(computerMove === 'ROCK'){
            result = 'You Win!!';
        }else if(computerMove === 'PAPER'){
            result = 'Tie.'; 
        }else if (computerMove === 'SCISSORS'){
            result = 'You Lose.';
        }
    }else if(myMove === 'SCISSORS'){

        if(computerMove === 'ROCK'){
            result = 'You Lose.';
        }else if(computerMove === 'PAPER'){
            result = 'You Win!!'; 
        }else if (computerMove === 'SCISSORS'){
            result = 'Tie.';
        }
    }

        if(result === 'You Win!!'){
            score.Wins += 1;
            document.querySelector('.result')
             .classList.add('green');
            document.querySelector('.result')
             .classList.remove('red');
            document.querySelector('.result')
             .classList.remove('yellow');
        }else if(result === 'You Lose.'){
            score.Losses += 1;
            document.querySelector('.result')
             .classList.add('red');
            document.querySelector('.result')
             .classList.remove('green');
            document.querySelector('.result')
             .classList.remove('yellow');
        }else if(result === 'Tie.'){
            score.Ties += 1;
            document.querySelector('.result')
             .classList.add('yellow');
            document.querySelector('.result')
             .classList.remove('green');
            document.querySelector('.result')
             .classList.remove('red');
        }
        localStorage.setItem('score', JSON.stringify(score));

        updateElement();

        document.querySelector('.result')
        .innerHTML = result;

        document.querySelector('.moves')
        .innerHTML = `<span class="span">Computer</span>
        <img src="Images/${computerMove}.image.jpg" class="move-image"> : 
        <img src="Images/${myMove}.image.jpg" class="move-image">
        <span class="span">You</span>`                    
    }

    function updateElement() {
        document.querySelector('.scorebord')
         .innerHTML = `<span class="result-span">
         Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}
         </span>`;
    }
    

    function pickComputerMove(){
let   computerMove = '';
let  randomNumber = Math.random();

if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'ROCK';
}else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'PAPER';
}else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'SCISSORS';
}
return computerMove;
}

document.querySelector('.rock-btn')
 .addEventListener('click', () => {
    theGame('ROCK');
 });
 
document.querySelector('.paper-btn')
 .addEventListener('click', () => {
    theGame('PAPER');
 });

document.querySelector('.sicissors-btn')
 .addEventListener('click', () => {
    theGame('SCISSORS');
 });
 
 document.querySelector('.reset-button')
  .addEventListener('click', () => {
        score.Wins = 0;
        score.Losses = 0;
        score.Ties = 0;
        localStorage.removeItem('score');
        updateElement();
        document.querySelector('.moves')
        .innerHTML = '';
        document.querySelector('.result')
        .innerHTML = '';
  })