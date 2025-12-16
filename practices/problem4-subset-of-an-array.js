// function subsets(arr) {
//     const result = [];

//     function backtrack(start, current) {
//         result.push([...current]);

//         for (let i = start; i < arr.length; i++) {
//             current.push(arr[i]);
//             backtrack(i + 1, current);
//             current.pop(); // backtrack
//         }
//     }

//     backtrack(0, []);
//     return result;
// }

// // Examples
// console.log(subsets([1, 2, 3]));
// // [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

// console.log(subsets([2, 4]));
// // [[], [2], [2,4], [4]]


function subsets(arr) {
    const result = [];

    function solve(index, current) {
        if (index === arr.length) {
            result.push([...current]);
            return;
        }

        current.push(arr[index]);
        solve(index + 1, current);

        current.pop();
        solve(index + 1, current);
    }

    solve(0, []);
    return result;
}

console.log(subsets([1, 2, 3]));
// [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

console.log(subsets([2, 4]));
// [[], [2], [2,4], [4]]
