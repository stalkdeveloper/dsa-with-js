/* 
    arr = [3, 5, 9, 1, 7, 10]

*/

function maxElements(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max;
}

console.log(maxElements([3, 5, 9, 1, 7, 10]));