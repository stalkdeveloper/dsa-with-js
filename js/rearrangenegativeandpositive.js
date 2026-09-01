/* 
    arr = [1, 2, 4, -4, , -3, -1];
*/


function rearrangepositiveandnegativealternative(arr) {
    const positives = arr.filter(num => num >= 0);
    const negatives = arr.filter(num => num < 0);

    const result = [];
    let i = 0;
    let j = 0;

    while (i < positives.length && j < negatives.length) {
        result.push(positives[i++]);
        result.push(negatives[j++]);
    }

    while (i < positives.length) {
        result.push(positives[i++]);
    }

    while (j < negatives.length) {
        result.push(negatives[j++]);
    }

    return result;
}

console.log(rearrangepositiveandnegativealternative([1, 2, 4, -4, -3, -1]));
// [1, -4, 2, -3, 4, -1]