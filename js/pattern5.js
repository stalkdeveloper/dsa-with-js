/* 
    n = 5;
    1
    12
    123
    1234
    12345
*/

function printNumberPattern(n) {
    for (let i = 1; i <= n; i++){
        let row = "";
        for (let j = 1; j <= i; j++){
            row += j;
        }
        console.log(row);
    }
}

printNumberPattern(5);