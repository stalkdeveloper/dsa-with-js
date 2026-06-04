/* 
    arr = [1, 2, 3, 4, 5];
    After left rotation by k times (k = 7):
    [3, 4, 5, 1, 2]
*/


/* function leftRotationByTimes(arr, k) {
    let length = arr.length;

    k = k % length;

    
    for (let i = 0; i <= k - 1; i++){
        let firstElements = arr[0];
        for (let j = 0; j < length - 1; j++){
            arr[j] = arr[j + 1];
        }
        arr[length-1] = firstElements;
    }
} */

/* function leftRotationByTimes(arr, k) {
    let length = arr.length;
    k = k % length;

    let temp = new Array(length);
    for (let i = 0; i < length; i++) {
        temp[i] = arr[(i + k) % length];
    }
    return temp;
} */


/* 
    Logic: 
    i=0; j=k-1;
    i=k; j=length-1;
    i=0; j=length-1;
*/

function reverse(i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

function leftRotationByTimes(arr, k) {
    let length = arr.length;
    k = k % length;

    reverse(0, k - 1);
    reverse(k, length - 1);
    reverse(0, length - 1);

    return arr;
}

let arr = [1, 2, 3, 4, 5];
let k = 7;

let result = leftRotationByTimes(arr, k);
console.log(result);