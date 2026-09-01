/*
    arr = [1, 4, 2, 3]; k = 8;
    cost = (max - min) * sub_arr of size    
*/

function getCost(map, low, high) {
    let max = -Infinity;
    let min = Infinity;

    for (let [key, value] of map) {
        if (value > 0) {
            max = Math.max(max, key);
            min = Math.min(min, key);
        }
    }

    return (max - min) * (high - low + 1);
}

function longestSubArray(arr, k){
    let low = 0, high = 0;
    let max = 0, min = 0;
    let cost = 0;

    let n = arr.length;
    let map = new Map();

    let ans = 0;

    while(high < n){

        map.set(arr[high], (map.get(arr[high]) || 0) + 1);

        while(getCost(map, low, high) > k) {
            let ele = arr[low];
            map.set(ele, map.get(ele) - 1);

            if(map.get(ele) == 0) {
                map.delete(ele);
            }

            low++;
        }


        // cost <= k
        ans = Math.max(ans, (high - low + 1));
        high++;
    }

    return ans;
}



console.log(longestSubArray([1,4,2,3], 8));
