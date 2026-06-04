/* 
    Right Rotation by 1
    arr = [1, 2, 3, 4, 5];
    After right rotation by 1:
    arr = [5, 1, 2, 3, 4];

*/

function rightRotationByOne(arr) {
    let length = arr.length;
    let lastElement = arr[length - 1];

    for (let i = length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
}


let arr = [1, 2, 3, 4, 5];
rightRotationByOne(arr);
console.log(arr);