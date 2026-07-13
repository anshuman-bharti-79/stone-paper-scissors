let userScore = 0;
let compScore = 0;
let draw = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const drawScore = document.querySelector("#draw");


const genCompchoice = () => {
    const options = ["rock", "paper", "scissors" ];
    const randIdx = Math.floor(Math.random() * 3);
    return  options[randIdx];
}

const drawgame = () => {
    draw++;
    drawScore.innerText = draw;
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userwin, userChoice, compchoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compscorePara.innerText = compScore;
        msg.innerText = `You lose  ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    } 
};


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compchoice = genCompchoice();
    console.log("comp choice = ", compchoice);

    if ( userChoice === compchoice) {
        drawgame();
    }else {
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compchoice === "paper" ? false :true;
        } else if (userChoice === "paper") {
           userwin = compchoice === "scissors" ? false : true;
        } else {
           userwin = compchoice === "rock" ? false : true;
        }

        showWinner(userwin, userChoice, compchoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
})