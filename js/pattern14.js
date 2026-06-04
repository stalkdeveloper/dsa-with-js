/* 
n=3

123
654
789


*/

function printNumberPattern(n) {
    for (let i = 1; i <= n; i++){
        let row = "";

        for (let j = 1; j <= n; j++){
            row += j;
        }
        console.log(row);
    }
}

printNumberPattern(3);