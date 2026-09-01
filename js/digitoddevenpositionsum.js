/* 
    let num = 1236545;

    odd even sum in the position
*/

function digitOddEvenSum(num) {

    if (num < 0) {
        num = num * -1;
    }

    let oddSum = 0;
    let evenSum = 0;
    let position = 1;

    while (num > 0) {
        let digit = num % 10;

        if (position % 2 == 1) {
            oddSum += digit;
        } else {
            evenSum += digit;
        }

        console.log(`Check Index ${position} - ${digit}`);
        num = Math.floor(num / 10);
        position++;
    }
    
    return {
        count: position-1,
        odd: oddSum,
        even: evenSum,
    };
}

console.log(digitOddEvenSum(12345));