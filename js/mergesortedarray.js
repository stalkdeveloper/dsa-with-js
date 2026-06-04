

function merge(arr1, arr2) {
    let merge = new Array(arr1.length + arr2.length);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < arr1.length && j < arr2.length) {
        arr1[i] < arr2[j] ? merge[k++] = arr1[i++] : merge[k++] = arr2[j++];
    }

    while (i < arr1.length) {
        merge[k++] = arr1[i++];
    }
    while (j < arr2.length) {
        merge[k++] = arr2[j++];
    }
    return merge;
}

let arr1 = [2, 5, 6];
let arr2 = [1, 3, 4, 8];

console.log(merge(arr1, arr2));