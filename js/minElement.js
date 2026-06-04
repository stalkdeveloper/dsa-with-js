/* 
    arr = [3, 5, 9, 1, 7, 10]

*/

function findMinValue(arr) {
    if (arr.length === 0) return undefined;

    let min = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMinValue([3, 5, 9, 1, 7, 10]));