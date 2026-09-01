/* 
    let num = 1236545;
*/

function digitCount(num) {
    let count = 0;

    let sum = 0;
    // var num = Math.abs(num);
    num = num * -1;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
        
        count++;
    }

    return {
        count: count,
        sum: sum,
    };
}

console.log(digitCount(-123));