/* 
    array = [3, 4, 2, 10, 2, 5];
*/

function printSumArray(arr) {
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(printSumArray([3, 4, 2, 10, 2, 5])); 