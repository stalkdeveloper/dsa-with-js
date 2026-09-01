/* 

--------------

*****
**
* *
*  *
*   *

*****
  *
  * 
  * 
***** 

------------

*/


function printPattern(n) {
    
    for (let i = 0; i < n; i++){
        let row = "";

        for (j = 0; j < n; j++) {
            // console.log(i, j);
            if (i === 0 || j === 0 || i === j) {
                row += "*";
            } else {
                row += " ";
            }

             /* if (i === 0 || i === n || j === Math.ceil(n / 2)) {
                pattern += "*";
            } else {
                pattern += " ";
            } */

        }

        console.log(row);
    }

}

const n = 5;
printPattern(n);