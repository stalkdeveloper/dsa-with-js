/* 
    Given an array of integers and a number k, perform right rotation on the array k number of times.

    Example:
        arr = [1, 2, 3, 4, 5]; 
        k = 7;
        After right rotation by k times (k = 7):
        [4, 5, 1, 2, 3];
*/

/* function rightRotationByTimes(arr, k) {
    let length = arr.length;

    k = k % length;
    
    for (let i = 0; i <= k - 1; i++){
        let lastElements = arr[length - 1];
        for (let j = length - 1; j >= 0; j--){
            arr[j] = arr[j - 1];
        }
        arr[0] = lastElements;
    }
} */


/* 
    i=0; j=l-1;
    i=0; j=k-1;
    i=k; j=l-1;
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

function rightRotationByTimes(arr, k) {
    let length = arr.length;
    k = k % length;
    reverse(0, length - 1);
    reverse(0, k - 1);
    reverse(k, length - 1);

    return arr;
}



let arr = [1, 2, 3, 4, 5];
let k = 7;

rightRotationByTimes(arr, k);

console.log(arr);