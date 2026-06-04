/* 

*/

function printStartCrossPattern(n) {
    for (let i = 1; i <= n; i++){
        let row = "";
        for (let j = 1; j <= n; j++){
            if ((i + j == n + 1) || (i == j)) {
                row += "*"
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

printStartCrossPattern(5);