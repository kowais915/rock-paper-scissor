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


function rounds(player, comp){





    
    if(player==comp){
        return ("Game Tied!");
    }
    else if(player=="rock" && comp =="scissor"){
        let str1 = "You won! Rock beats scissors";
        return str1;
    }
    else if(player=="rock" && comp == "paper" ){
        return ("You lost! Paper covers rocks.");
    }
    else if(player=="paper" && comp == "scissor"){
        return ("You lost! Scissor cuts the paper.");
    }
    else if(player=="paper" && comp =="rock"){
        return ("You won! Paper covers the rock.");

    }

    else if(player=="scissor" && comp == "paper"){
        return ("You Won! Scissor cuts the paper.");
    }
    else if(player=="scissor" && comp=="rock"){
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

       
        console.log(rounds(user, comp));
       

        counter++;
    }
    while(counter<5);
}

game();