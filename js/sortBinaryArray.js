/* 
    // followingTwoPointerArray
    arr = [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0]
*/

function sortBinaryArray(arr) {
    let i = 0; j = 0;

    while (i < arr.length) {
        if (arr[i] === 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        i++;
    }
    return arr;
}

/* 
const rearrangeTheArray = (arr) => {
    let i=0;
    let j=arr.length-1;
    while(i<j) {
        if(arr[i] === 0){
            i++;
        } else if (arr[j] === 1) {
            j--;
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    
    return arr;
}

let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];

console.log(rearrangeTheArray(arr));

*/


console.log(sortBinaryArray([1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0]));