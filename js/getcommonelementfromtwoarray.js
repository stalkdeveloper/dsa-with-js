/* 
    arr1 = [1,2,3,4];
    arr2 = [2,3,5];

    // get common from both array
    output = [2,3] 

    // if not match
    output=[];
*/

function fetchCommonElementFromArrays(arr1, arr2) {
    /* if (arr1.length === 0 || arr2.length === 0) {
        return [];
    }

    const map = new Map();
    const result = [];

    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], true);
    }

    for (let i = 0; i < arr1.length; i++) {
        const currentItem = arr1[i];

        if (map.has(currentItem)) {
            result.push(currentItem);
        }
    }

    return result; */

    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }

    return result;

}

const arr1 = [1,2,3,4], arr2 = [2,3,5];

console.log(fetchCommonElementFromArrays(arr1, arr2));