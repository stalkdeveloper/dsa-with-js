/* 
    Input: s = "abcdefg", k = 2
    Output: "bacdfeg"
*/

const reverseStr = (s, k) => {
    const arr = s.split(' ');
    let i = 0;
    while (i < arr.length) {
        reverse(arr, i, Math.min(i + k, arr.length - 1));
        i += 2 * k;
    }

    return arr.join('');
}

const reverse = (arr, i, j) => {
    /* while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
    return arr; */

    if (i >= j) {
        return;
    }

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    reverse(arr, i+1, j-1);
}


let s = "abcdefg", k = 2;

const result = console.log(reverseStr(s, k));