/* 
    arr = ["h","e","l","l","o"];
*/


/* function reverseString(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
} */

function reverseString(arr, i = 0, j = arr.length - 1) {
    if (i >= j) {
        return arr;
    }

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return reverseString(arr, i + 1, j - 1);
}

console.log(reverseString(["h", "e", "l", "l", "o"]));