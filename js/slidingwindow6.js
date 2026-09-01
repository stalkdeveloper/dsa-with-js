/* 
    Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

    Examples:

    Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
    Output: 6
    Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.
    Input: arr[] = [-5, 8, -14, 2, 4, 12], k = -5
    Output: 5
    Explanation: Subarrays with sum = -5 are [-5] and [-5, 8, -14, 2, 4]. The length of the longest subarray with a sum of -5 is 5.
    Input: arr[] = [10, -10, 20, 30], k = 5
    Output: 0
    Explanation: No subarray with sum = 5 is present in arr[].
    Constraints:
    1 ≤ arr.size() ≤ 105
    -104 ≤ arr[i] ≤ 104
    -109 ≤ k ≤ 109
*/


function longestSubarray(arr, k) {
    let n = arr.length;
    let map = new Map();
    let sum = 0;
    let maxLen = 0;
    
    for(let i=0; i<n; i++){
        sum += arr[i];
        
        if(sum === k){
            maxLen = i+1;           
        }
        
        if(map.has(sum)){
            maxLen = Math.max(maxLen, i-map.get(sum)+1)
        }
        
        if (!map.has(sum)) {
            map.set(sum, i);
        }
        
    }
    
    return maxLen;
}


let input1 = [10, 5, 2, 7, 1, -10], k1 = 15;
let input2 = [-5, 8, -14, 2, 4, 12], k2 = -5;
let input3 = [10, -10, 20, 30], k3 = 5;
let input4 = [30, 2, 1, 0, 5, 7], k4 = 3;
console.log(longestSubarray(input1, k1));
console.log(longestSubarray(input2, k2));
console.log(longestSubarray(input3, k3));
console.log(longestSubarray(input4, k4));