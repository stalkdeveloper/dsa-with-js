/* 
    n = 4 

 * 
 * *
 *    *
 *  * * *
*/

function printStarPattern(n) {
    for (let i = 1; i <= n; i++){
        let row = "";

        for (let j = 1; j <= i; j++){
            if (j === 1 || j === i || i === n) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

printStarPattern(4);

