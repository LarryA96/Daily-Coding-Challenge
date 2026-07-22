/**
Date: 05-28-2026
Instruction: 
Given a start and end number, count the number of fizz and buzz appearances in the range (inclusive).
Numbers divisible by 3 count as a fizz.
Numbers divisible by 5 count as a buzz.
Numbers divisible by both 3 and 5 count as both a fizz and a buzz.
Return an object or dictionary with the counts in the format: { fizz, buzz }.
*/

function fizzBuzzCount(start, end) {
  let begin = start;
  let count = {fizz : 0, buzz: 0};

  while (begin <= end){
    if (begin % 3 == 0 && begin % 5 == 0){
      count.fizz += 1;
      count.buzz += 1;
    } else if (begin % 3 == 0){
      count.fizz += 1;
    } else if (begin % 5 == 0){
      count.buzz += 1;
    }
    begin++;
  }

  return count;
}
