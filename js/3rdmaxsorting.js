/* 
    [2, 2, 3, 1]

    v1 = max
    v2 = second max
    v3 = third max

    v1 = 3 
        then again same so that one 
        check next one if greater then shift 2 to v2 and new v1 is 3
        then same for last one 1 shifted 1 by 1.
    v2 = 2 
    v3 = 1
*/
function thirdMax(array) {
    let max = -Infinity;
    let maxSecond = -Infinity;
    let maxThird = -Infinity;

    for (let i = 0; i < array.length; i++){

        if (max == array[i] || maxSecond == array[i] || maxThird == array[i]) {
            continue;
        }
        if (max < array[i]) {
            maxThird = maxSecond;
            maxSecond = max; 
            max = array[i];
        } else if (maxSecond < array[i] && array[i] !== max) {
            maxThird = maxSecond;
            maxSecond = array[i];
        } else if (maxThird < array[i] && array[i] !== maxSecond && array[i] !== max) {
            maxThird = array[i];
        }
    }

    return maxThird;
}

console.log(thirdMax([2, 1, 4, 5, 0, 8]));
console.log(thirdMax([2, 2, 3, 1]));

