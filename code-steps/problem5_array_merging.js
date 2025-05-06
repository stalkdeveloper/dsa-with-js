let data1 = [20, 30, 5, 2, 27, 17, 50];
let data2 = [20, 40, 34, 50];
let data3 = [];

data1.sort((a, b) => a - b);
data2.sort((a, b) => a - b);

let i = 0, j = 0, k = 0;

while(i < data1.length && j < data2.length){
    if(data1[i] < data2[j]){
        data3[k] = data1[i];
        i++;
    } else {
        data3[k] = data2[j];
        j++;
    }
    k++;
}

while(i<data1.length){
    data3[k] = data1[i];
    i++;
    k++;
}

while(j < data2.length){
    data3[k] = data2[j];
    j++;
    k++;
}

console.log(data3);

/* 
DSA Concepts Used:
    Sorting
    Two-pointer technique
    While loop for efficient traversal
    Manual indexing (k) instead of push(), reflecting low-level array manipulation (like in C/C++).
    
    Time complexity:
        Sorting: O(n log n + m log m)
        Merging: O(n + m)
*/
