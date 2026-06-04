/* 
  arr = [10, 20, 30, 40, 50];   
*/

function reverseArray(arr) {
    let temp = new Array(arr.length);
    
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }
    return temp;
}

console.log(reverseArray([10, 20, 30, 40, 50]));