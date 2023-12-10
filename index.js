const score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

/*
THIS IF PART DO THE SAME THING AS DEFAULT OPERATOR (||) DO ABOVE
if(score === null) {
// instead of (score === null) you can also use (!score).
score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}
}
*/

function playGame(playMove) {
const computerMove = pickComputerMove();
let result = '';

if (playMove === '🖖') {
    if (computerMove === '👊') {
        result = 'You Lose';
    } else if (computerMove === '🖐') {
        result = 'You Win';
    } else if (computerMove === '🖖') {
        result = 'Tie';
    }
} else if (playMove === '🖐') {
    if (computerMove === '👊') {
        result = 'You Win';
    } else if (computerMove === '🖐') {
        result = 'Tie';
    } else if (computerMove === '🖖') {
        result = 'You Lose';
    }
} else if (playMove === '👊') {
    if (computerMove === '👊') {
        result = 'Tie';
    } else if (computerMove === '🖐') {
        result = 'You Lose';
    } else if (computerMove === '🖖') {
        result = 'You Win';
    }
}

if(result === 'You Win') {
    score.Wins += 1;
}else if(result === 'You Lose') {
    score.Losses += 1;
}else if(result === 'Tie') {
    score.Ties += 1;
}

localStorage.setItem('score',  JSON.stringify(score));

document.querySelector('.js-result').innerHTML = `${result}`
document.querySelector('.js-move').innerHTML = `you ${playMove}---  ${computerMove} computer`
updateScoreElement();

}

// function section

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = '👊';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = '🖐';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = '🖖';
    }

    return computerMove;
}

function updateScoreElement () {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins} , Losses: ${score.Losses} , Ties:${score.Ties}`;
}

function msgResult () {
    document.querySelector('.js-result').innerHTML = `${result}`
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
}
