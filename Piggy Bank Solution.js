/**
Date: 07-22-2026
Instruction:
Given an object representing a piggy bank, return the total value as a string formatted as "$D.CC".
*/

function piggyBank(coins) {
  let total = 0;


  let values = {
    pennies: 0.01,
    nickels: 0.05,
    dimes: 0.10,
    quarters: 0.25
  };

  let entries = Object.entries(coins);
  for (let coinName of entries){
    total+= values[coinName[0]] * coins[coinName[0]];
  }

  return `$${total.toFixed(2)}`;
}
