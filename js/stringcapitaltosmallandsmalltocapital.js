/** 
 * AbCDeF
 * @description: This function takes a string as input and converts all uppercase letters to lowercase and all lowercase letters to uppercase.
*/


/** 
 * Converts uppercase to lowercase and vice versa using ASCII values.
 */
function convertString(strs) {
    let n = strs.length;
    let result = "";

    for (let i = 0; i < n; i++) {
        let ch = strs.charCodeAt(i);
        if (ch >= 65 && ch <= 90) { 
            result += String.fromCharCode(ch + 32); 
        } else if (ch >= 97 && ch <= 122) { 
            result += String.fromCharCode(ch - 32);
        } else {
            result += strs[i];
        }
    }

    return result;
}

console.log(convertString("AbCDeF")); 