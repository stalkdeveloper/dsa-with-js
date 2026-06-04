/* 
    arr = [10, 20, 30, 32, 42, 50]

*/


function reverseArray(arr) {
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
}


console.log(reverseArray([10, 20, 30, 32, 42, 50]));