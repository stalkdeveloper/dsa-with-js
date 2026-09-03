/*
    // blue print for fixed => update sum / max / min / frequency etc.

    // blueprint 
    let low =0; 
    let high = 0; 
    while(high < n){
        // Add a[high] to the window
        // update sum / max / frequency etc.

        if (high - low + 1 < k) {
            high++;
        }

        else if (high - low + 1 === k){

             // Calculate / update answer

            // Remove a[low] from the window
            // update sum / frequency etc.

            low++;
            high++;
        }
    }

    // --- 
    let low =0; 
    let high = 0; 
    let sum = 0;
    let maxSum = -Infinity;
    let minSum = Infinity;
    while(high < n){
        sum += a[high];

        if (high - low + 1 < k) {
            high++;
        }

        else if (high - low + 1 === k){
            maxSum = Math.max(maxSum, sum); // for max 
            minSum = Math.min(minSum, sum); // for min

            sum -= a[low];
            low++;
            high++;
        }
    }

*/