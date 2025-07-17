let pcMove;
let scores = JSON.parse(localStorage.getItem('score')) || {
    won : 0,
    tie : 0,
    lose : 0
}



function Computer(){
    let randNum;
    pcMove = '';
    randNum = Math.floor(Math.random()*(3-1+1)) + 1;
    if (randNum === 1) {
        pcMove = 'Stone';
    } else if (randNum === 2){
        pcMove = 'Paper';
    } else {
        pcMove = 'Sissor';
    }
    return randNum;
}

function playGame(playerMove){
    let randNum = Computer();
    let result = '';
    
    if(playerMove==='Sissor'){
        if (randNum===1){
            result = 'You Lose';
            scores.lose++;
        } else if(randNum === 2){
            result = 'You won';
            scores.won++;
        } else if(randNum === 3){
            result = 'Tie';
            scores.tie++;
        }
        
    } else if(playerMove==='Stone'){
            if (randNum===1){
                result = 'Tie';
                scores.tie++;
            } else if(randNum === 2){
                result = 'You lose';
                scores.lose++;
            } else if(randNum === 3){ 
                result = 'You won';
                scores.won++;
            }
        } else if(playerMove==='Paper'){
            if (randNum===1){
                result = 'You won';
                scores.won++;
            } else if(randNum === 2){
                result = 'Tie';
                scores.tie++;
            } else if(randNum === 3){
                result = 'You lose';
                scores.lose++;
            }
    }
    localStorage.setItem('score',JSON.stringify(scores));
    // alert(`You picked ${playerMove}. Computer picked ${pcMove}. ${result} `);
    updateScoreBoard();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-choice').innerHTML = `        <span>     You</span>
    <img class = "move-icon" src="images\\${playerMove}-emoji.png" alt="">
    <img class = "move-icon" src="images\\${pcMove}-emoji.png" alt="">
    <span>Computer</span>`;
}

function updateScoreBoard(){
    if (!(scores.won==0 && scores.tie ==0 && scores.lose==0)){
        document.querySelector('.js-choice').innerHTML = "<span class = 'preview'>Pick One to Play On</span>"
        document.querySelector('.js-score').innerHTML = `won : ${scores.won}  tie : ${scores.tie} lose : ${scores.lose} `;
        document.querySelector('.reset-button').hidden = false;
    } else{
        document.querySelector('.reset-button').hidden = true;
        document.querySelector('.choice-container').style.width = "80%";
        document.querySelector('.js-choice').innerHTML = "<span class = 'preview'>🎮 Ready to Battle? <br> <br>Choose your weapon 🏹 Stone, Paper, or Scissors</span>"
    }
}

function resetScore(){
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-choice').innerHTML = '';
    document.querySelector('.js-score').innerHTML = '';
    document.querySelector('.reset-button').hidden = true;
        document.querySelector('.choice-container').style.width = "80%";
        document.querySelector('.js-choice').innerHTML = "<span class = 'preview'>🎮 Ready to Battle? <br> <br>Choose your weapon 🏹 Stone, Paper, or Scissors</span>"
}

function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerHTML === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

function calculateTotal(){
    let inputElement = document.querySelector('.js-cost-in');
    if(inputElement.value <= 40){
        
        document.querySelector('.js-cost-out').innerHTML = `Total cost : $${Number(inputElement.value)+10} only/-`;
    } else {
        document.querySelector('.js-cost-out').innerHTML = `Total cost : $${inputElement.value} only/-`;
    }
}
