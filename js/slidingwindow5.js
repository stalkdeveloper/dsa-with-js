/* 
    arr = [1,4,2,2,9] k=9
    target = 9;


    output = 1; [9]

    [1,4,2,2] // length 4
    [9] // length 1

    find smallest subarray of length;
*/


function findSmallestSubArray(arr, k) {
    
    let n = arr.length;
    let minLength = Infinity;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < n; right++){
        sum += arr[right]; //

        while(sum > k){ // checking sum equal
            sum -= arr[left];
            left++;
        }
        
        
        if(sum == k) {
            minLength = Math.min(minLength, right-left+1);
        }
    }

    return minLength
}

const arr = [1, 4, 2, 2, 9], k = 9;
console.log(findSmallestSubArray(arr, k));