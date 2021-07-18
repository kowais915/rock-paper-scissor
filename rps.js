// Rock Paper Scissor game against computer


// Psudocode

//this function returns items in the array randomly
function compPlay(){
    let arr = ['rock', 'paper', 'scissor'];
    return arr[Math.floor(Math.random()*3)];
}


/*
player computer
rock   scissor (player wins)
rock   paper   (computer wins)
rock   rock    (ties)

paper  scissor (computer wins)
paper  paper   (ties)
paper  rock    (player wins)

scissor scissor (ties)
scissor paper   (player wins)
scissor rock    (computer wins)


*/

let comp = compPlay();
let scorePlayer = 0;
let computerScore = 0;


function rounds(player, comp){





    
    if(player==comp){
        return ("Game Tied!");
    }
    else if(player=="rock" && comp =="scissor"){
        let str1 = "You won! Rock beats scissors";
        scorePlayer = scorePlayer+5;
        return str1;
    }
    else if(player=="rock" && comp == "paper" ){
        computerScore = computerScore +5;
        return ("You lost! Paper covers rocks.");

    }
    else if(player=="paper" && comp == "scissor"){
        computerScore = computerScore +5;
        return ("You lost! Scissor cuts the paper.");
    }
    else if(player=="paper" && comp =="rock"){
        scorePlayer = scorePlayer+5;
        return ("You won! Paper covers the rock.");

    }

    else if(player=="scissor" && comp == "paper"){
        scorePlayer = scorePlayer+5;
        return ("You Won! Scissor cuts the paper.");
    }
    else if(player=="scissor" && comp=="rock"){
        computerScore = computerScore +5;
        return ("You lost! Rock beats the scissor.");
    }
    else{
        return ("invalid Input!");
    }



}

// console.log(rounds("rock", comp));

// game function

function game(){




    let counter = 0;
    

            do{

                let user = prompt("Enter Rock, Paper or Scissor: ");

                            let comp = compPlay();

                            alert(rounds(user, comp));
                            console.log(rounds(user, comp));
                        

                            counter++;
                }
                while(counter<5);


                if(scorePlayer==computerScore){
                    alert(`Game Draw! You score is ${scorePlayer} and the computer score is ${computerScore}`);
                    return ("Game tied!");
                }
                else if(scorePlayer>computerScore){
                    alert(`You beat the computer! Your score is ${scorePlayer} and computer's score was ${computerScore}`);
                    return ("You won!");
                }
                else{
                    alert(`Uh-oh You lost to computer! Your score was ${scorePlayer} and computer's score was ${computerScore}`);
                    return ("You lost!");
                }
        }
        

game();