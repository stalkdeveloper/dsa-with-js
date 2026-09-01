/**
 * 
 *  Check if a given string is a palindrome or not.
 *  s = "naman";
*/

function palindromeString(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}


console.log(palindromeString("sunil"));