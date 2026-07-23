/** 
Date: 07-23-2026
Instruction:
Given two equal-length strings representing two players' strategies for a game, return the scores as an array [player1, player2].

The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
Each character represents one round, scored as follows:
If both players cooperate, each scores 3.
If both players defect, each scores 1.
If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.
*/

function playGame(p1, p2) {
  let player1 = p1.toUpperCase();
  let player2 = p2.toUpperCase();
  let score1 = 0;
  let score2 = 0;

  //Iterate through each round
  for (let i = 0; i < player1.length; i++){

    //Combine characters into single string
    let strat = player1[i] + player2[i];
    console.log(strat);

    //Add score based on string combo
    switch(strat){
      case "CC": 
        score1 += 3, score2 += 3;
        break;
      case "DD": 
        score1 += 1, score2 += 1;
        break;
      case "CD": 
        score2 += 5;
        break;
      case "DC": 
        score1 += 5;
        break;
    }
  }

  return [score1, score2];
}
