function maxSecond(array) {
    
    let firstMax = -Infinity;
    let maxSecond = -Infinity;
    /* for (let i = 0; i < array.length; i++){
        if (firstMax < array[i]) {
            firstMax = array[i];
        }
    }
    // return firstMax; // 7

    for (let i = 0; i < array.length; i++){
        if (firstMax > array[i] && array[i] !== firstMax) {
            maxSecond = array[i];
        }
    }

    return maxSecond; */

    /* for (let i = 0; i < array.length; i++){
        if (firstMax < array[i]) {
            firstMax = array[i];
        } else if (maxSecond < array[i] && array[i] !== firstMax) {
            maxSecond = array[i];
        }
    }

    return maxSecond; */

    for (let i = 0; i < array.length; i++){
        if (firstMax == array[i] || maxSecond == array[i]) {
            continue;
        }
        if (firstMax < array[i]) {
            maxSecond = firstMax;
            firstMax = array[i];
        } else if (maxSecond < array[i] && firstMax !== array[i]) {
            maxSecond = array[i];
        }
    }
    return maxSecond;
}

console.log(maxSecond([1, 3, 6, 7, 4]));