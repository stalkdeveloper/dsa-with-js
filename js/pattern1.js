/**
 * 3
 * 32
 * 321
 * 321
 * 32
 * 3
 *  
**/

function pattern(n) {
    for (let i = n; i >= 1; i--){
        let row = '';
        for (let j = n; j >= i; j--){
            row += j;
        }
        console.log(row);
    }


    for (let i = 1; i <= n; i++){
        let row = '';
        for (let j = n; j >= i; j--){
            row += j;
        }
        console.log(row);
    }

}

pattern(3);

/* 

function pattern(n){
    for(i=n; i>=1; i--){
        let row = '';
        for(j = n; j>=i; j--){
            row+=j;
        }
        console.log(row);
    }
    
    for(i=1; i<= n; i++){
        let row = '';
        for(j=n; j>=i; j--){
            row+= j;
        }
        console.log(row);
    }
} 
    
    
*/