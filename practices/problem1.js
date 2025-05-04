// Checking sum zero - problem1
// [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// [? , ?] => Output

// Option 1
// [-4, 4]

// Option 2
// [-2, 2]

function getSumPairZero(array){
    for(let number of array){
        for(let j=1; j<array.length; j++){
            if(number + array[j] === 0){
                return [number, array[j]];
            }
        }
    }
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

/* 
    o(n^2) quardatic time complexity
    
*/