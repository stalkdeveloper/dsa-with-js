/* 
    Input: arr[] = [-8, 2, 3, -6, 1] , k = 2
    Output: [-8, 0, -6, -6]
    Explanation: First negative integer for each window of size 2
    [-8,2] = -8, [2,3] = 0 (does not contain a negative integer), [3,-6] = -6, [-6,10] = -6

    Input: arr[] = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
    Output: [-1, -1, -7, -15, -15, 0]
    Explanation: First negative integer for each window of size 3
    [ 12, -1, -7] = -1, [-1,-7, 8] = -1, [-7, 8, -15] = -7, [8, -15, 30] = -15, [-15, 30, 16] = -15, [30, 16, 28] = 0
    

*/


/* 
Brute Force

function printFirstNegativeInteger(arr, k) {
    let result = [];
    let n = arr.length;

    for (let i = 0; i <= n - 1; i++){
        let firstNegative = 0;

        for (j = i; j < i + k; j++){
            if (j >= arr.length) return result;

            if (arr[j] < 0) {
                firstNegative = arr[j];
                break;
            }
        }

        result.push(firstNegative);

    }

    return result;
} 
*/


/* 
O(n) and O(k)

function printFirstNegativeInteger(arr, k) {

    let dq = [];
    let result = [];
    let n = arr.length;
    for (let i = 0; i < k; i++){
        if (arr[i] < 0) {
            dq.push(i);
        }
    }

    for (let i = k; i < n; i++){
        if (dq.length > 0) {
            result.push(arr[dq[0]]);
        } else {
            result.push(0);
        }

        while (dq.length > 0 && dq[0] < (i - k + 1)) {
            dq.shift();
        }

        if (arr[i] < 0) {
            dq.push(i);
        }
    }

    if (dq.length > 0) {
        result.push(arr[dq[0]]);
    } else {
        result.push(0);
    }

    return result;

} 

*/

function printFirstNegativeInteger(arr, k) {
    let firstNegIndx = 0;
    let result = [];
    let n = arr.length;

    for (let i = 0; i <= n-k; i++){
        while (
            firstNegIndx < n &&
            (firstNegIndx < i || arr[firstNegIndx] >= 0)
        ) {
            firstNegIndx++;
        }

        if (firstNegIndx < i + k) {
            result.push(arr[firstNegIndx]);
        } else {
            result.push(0);
        }

        
    }

    return result;
}

const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
const res = printFirstNegativeInteger(arr, k);
console.log(res.join(" "));

