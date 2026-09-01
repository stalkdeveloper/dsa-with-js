/* 
    price = [10, 3, 2, 7, 4, 1];
    k=6;

    maximum price array value pick array value [3,2,1] output array count ouput 3 
*/

function maxArrayCount(arr, k) {
    arr.sort((a, b) => a - b);

    let sum = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] <= k) {
            sum += arr[i];
            result.push(arr[i]);
        } else {
            break;
        }
    }

    console.log(result); // [1, 2, 3]
    return result.length;
}

let price = [10, 3, 2,1,1, 7, 4, 1];
let k = 6;

console.log(maxArrayCount(price, k));