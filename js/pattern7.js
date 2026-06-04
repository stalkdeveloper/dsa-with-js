/* 
    n=5;

    *****
    ****
    ***
    **
    *
*/

function printStarReversePattern(n) {
    for (let i = 1; i <= n; i++){
        let row = "";
        for (j = 1; j <= n - i + 1; j++){
            row += "*";
        }

        console.log(row);
    }
}

printStarReversePattern(5);