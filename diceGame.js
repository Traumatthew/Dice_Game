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
// if rolled doubles or more player keeps dice.

// first need to create holes.
// create score card
// create functions for random dice allowing user to select dice.
// let die1 = [1, 2, 3, 4];
// let die2 = [1, 2, 3, 4, 5, 6];


// this function rolls all the dice at the same time giving you 6 numbers for the 6 different dice.


function rollDie(Array){
    let diceArray = [4, 6, 8, 10, 12, 18];
    let rolls = [];
    let i;
    // for loop
        //rolls.push(theNumber)
    for (i = 0; i < diceArray.length; i++) {
        let roll = Math.floor(Math.random()* diceArray[i] )+1;
        rolls.push(roll);
    }

    console.log(rolls);
    return rolls;
}


// player one rolls

// function golferOne(rollDie)
