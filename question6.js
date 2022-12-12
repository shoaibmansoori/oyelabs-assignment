// 6 question
function findMissedNum(arrayOfNumbers, n ) {
    if(arrayOfNumbers.length === n) {
      console.log("no number is missed");
    }
    if(arrayOfNumbers.length < (n - 1) ) {
          return "more than one number is missed"
    }
    let totalSum = (n * (n+1)) / 2;
    let sumOfArray = 0;
    
    for(let i of arrayOfNumbers){
        sumOfArray += i;
    }
    
    return totalSum - sumOfArray;
}

let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,28,29,30]
let missedNum = findMissedNum(arrayOfNumbers, 30);
console.log("The missing number is :", missedNum)