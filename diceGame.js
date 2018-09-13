"use strict";

// function rollDie(numberOfSides){
//     let roll = Math.floor(Math.random()*numberOfSides)+1;
//     return roll;
// 

// make a dice game that two players play
// has to use 6 diff dice (4,6,8,10,12,and 18 sided)
// use one function capable of rolling dice

// My game will be a version of dice golf

// there are 18 rounds, representing 18 holes. 

// each hole is assigned a par. (how many "strokes is avg per hole").
    // there will be 4 par 3's which the player will need to roll 3 of a kind.
    // there will be 10 par 4's which the player will need to roll 4 of a kind.
    // there will be 4 par 5's which the player will need to 5 of a kind.

// each roll counts as a stroke. the lowest amount of rolls wins.

// the players will roll all 6 dice at once.
// if rolled doubles or more player keeps those dice.

// first need to create holes.
// create score card
// create functions for random dice allowing user to select dice.


// this function rolls all the dice at the same time giving you 6 numbers for the 6 different dice.

function playGame() { // master function
    let diceArray = [4, 6, 8, 10, 12, 18];
    let playerRolls = rollDice(diceArray);
    let pairs = searchForDuplicates(playerRolls);
    console.log(pairs);
    // searchForDuplicates(playerRolls);
}

function rollDice(array){ //rolls all the dice let dice Array = [4, 6, 8, 10, 12, 18];
    let rolls = [];
    for (let i = 0; i < array.length; i++) {
        let roll = Math.floor(Math.random()* array[i] )+1;
        rolls.push(roll);
    }
    console.log(rolls);
    return rolls;
}

function searchForDuplicates(rolls) {
    rolls.sort();

    // find if numbers were hit
    for(let i = 0; i < rolls.length; i++) { // loops over array to search for duplicates for
        for(let j = i + 1; j < rolls.length; j++) { // loop over array to perform the search for duplicates for a number
            if(rolls[j] === rolls[i]) {

                // duplicate!
                console.log('You Win!');
                return "WINNER";
            }
        }
    }

    return "LOSER";
}






// function searchForDuplicates(rolls) {
//     rolls.sort();

//     // find if numbers were hit
//     for(let i = 0; i < rolls.length; i++) { // loops over array to search for duplicates for
//         for(let j = i + 1; j < rolls.length; j++) { // loop over array to perform the search for duplicates for a number
//             if(rolls[j] === rolls[i]) {

//                 // duplicate!
//                 console.log('You Win!');
//                 return "WINNER";
//             }
//         }
//     }

//     return "LOSER";
// }
