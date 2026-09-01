/* 
    let num = 1236545;

    odd even sum
*/

function digitOddEvenSum(num) {

    if (num < 0) {
        num = num * -1;
    }
    let oddSum = 0;
    let evenSum = 0;
    while(num > 0){
        let checkEven = num % 10;
        num = Math.floor(num / 10);
        if (checkEven % 2 === 0) {
            evenSum += checkEven;
        } else {
            oddSum += checkEven;
        }
    }

    return {
        odd: oddSum,
        even: evenSum,
    };
}

console.log(digitOddEvenSum(333));