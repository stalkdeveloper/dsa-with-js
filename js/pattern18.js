/* 
    X - Pattern

    n=5;
*/

function printStartXPattern(n){
    for (let i = 1; i <= n; i++){
        let row = "";

        for (let j = 1; j <= 2*n-1; j++){
            if (i == j || i + j == n+1) {
                row += "*";
            } else {
                row += " ";
            }
        }

        console.log(row);
        
    }
}

printStartXPattern(5);