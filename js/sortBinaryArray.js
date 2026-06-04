/* 
    // followingTwoPointerArray
    arr = [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0]
*/

function sortBinaryArray(arr) {
    let i = 0; j = 0;

    while (i < arr.length) {
        if (arr[i] === 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        i++;
    }
    return arr;
}


console.log(sortBinaryArray([1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0]));