/* 
    n=hello;
*/


function reverseStringRecursive(strs) {
    if (strs === null) {
        return null;
    }

    if (strs.length <= 1) {
        return strs;
    }


    let first = strs[0];
    let last = strs[strs.length - 1];
    let str1 = reverseStringRecursive(strs.substring(1, strs.length - 1));

    let result = last + str1 + first;
    return result;
}

console.log(reverseStringRecursive("Hello World"));