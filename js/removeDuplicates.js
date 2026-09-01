/* 
   nums = [0,0,1,1,1,2,2,3,3,4];
*/

const removeDuplicates = (nums) => {
    let count = 1;
    let length = nums.length;
    let arr = [nums[0]];
    /* for (let i = 0; i < length; i++) {
        if (nums[i] !== nums[i+1]) {
            arr[count] = nums[i+1];
            count++;
        }
    } */
    
    let i = 0;
    while (i < nums.length-1) {
        if (nums[i] !== nums[i + 1]) {
            arr[count] = nums[i + 1];
            count++;
        }
        i++;
    }
    return arr;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
