/**
 * N = 4;
 * 
 * *
 * *
 * *
 * ****
 **/



function patternStarPrint(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= n; j++) {
            if (i == n) {
                pattern+= "*"
            } else {
                if (j == 1) {
                    pattern += "*";
                }
            }
        }
        console.log(pattern);
    }
}

patternStarPrint(4)