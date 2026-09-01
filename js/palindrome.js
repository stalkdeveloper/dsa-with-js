/* 
    let num=121;
    Check Number is palindrome or not?
*/

function checkPalindrome(num) {
    
    let val = 0;
    let rev = 0;
    let copy = num;
    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit; 
        num = Math.floor(num / 10);
    }

    if (rev === copy) {
        return true
    }
    return false;
}

console.log(checkPalindrome(122));