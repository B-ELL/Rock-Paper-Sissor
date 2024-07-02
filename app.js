let user_score=0;
let Comp_score=0;

const choices=document.querySelectorAll(".choice");
const message= document.querySelector("#msg");
const user = document.querySelector("#You");
const comp = document.querySelector("#Comp")

const drawGame = () => {
    message.innerText="Game is draw.";
    message.style.backgroundColor="rgb(0, 33, 55)";
}

const showWinner = (userWinner) => {
    if(userWinner===true){
        user_score++;
        message.innerText="You Won!.";
        message.style.backgroundColor="green";
        user.innerText=user_score;
    }
    else{
        Comp_score++;
        console.log(Comp_score);
        message.innerText = "You Lost!.";
        message.style.backgroundColor="red";
        comp.innerText=Comp_score;
    }
}

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return(options[randIdx]);
}

const playGame=(userChoice) =>{
    console.log("user choice",userChoice);
    const CompChoice=genCompChoice();
    console.log("Comp choice",CompChoice);

    if(userChoice===CompChoice){
        drawGame();
    }
    else{
        let userWinner = true;
        if(userChoice===rock){
            userWinner=CompChoice==="paper" ? false:true;
        }
        else if(userChoice===paper){
            userWinner=CompChoice==="scissors" ? false:true;
        }
        else {
            userWinner=CompChoice==="rock" ? false:true;

        }
        showWinner(userWinner);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
