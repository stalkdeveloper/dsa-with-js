/* 
    arr = [1, 2, 3, 4, 5];
*/

function leftRotateByOne(arr) {
    let firstElement = arr[0];
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        arr[i] = arr[i + 1];
}
    arr[length - 1] = firstElement;
}

let arr = [1, 2, 3, 4, 5];
leftRotateByOne(arr);
console.log(arr);