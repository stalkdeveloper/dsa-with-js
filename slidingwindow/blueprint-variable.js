
/*

    // blue print for variable type.

    let low = 0;
    let high = 0;

    while (high < n) {

        // Add a[high] to the window

        // Shrink while window is invalid
        // while (window is invalid) {
            // Remove a[low]
            low++;
        // }

        // Window is valid
        // Calculate / update answer

        high++;
    }


    // ---
    let low = 0;
    let high = 0;
    let sum = 0;
    let maxLen = 0;

    while (high < n) {
        sum += a[high];

        while (sum > k) {
            sum -= a[low];
            low++;
        }

        maxLen = Math.max(maxLen, high - low + 1);

        high++;
    }


*/