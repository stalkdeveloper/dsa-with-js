/* 
    Count Occurences of Anagrams
    Difficulty: MediumAccuracy: 48.09%Submissions: 110K+Points: 4
    Given a word pat and a text txt. Return the count of the occurrences of anagrams of the word in the text.

    Example 1:

    Input: txt = "forxxorfxdofr", pat = "for"
    Output: 3
    Explanation: for, orf and ofr appears in the txt, hence answer is 3.
    Example 2:

    Input: txt = "aabaabaa", pat = "aaba"
    Output: 4
    Explanation: aaba is present 4 times in txt.
    Constraints:
    1 <= |pat| <= |txt| <= 105

*/

/* 
    function search(pat, txt) {
        let m = pat.length;
        let n = txt.length;

        let sortedPat = pat.split("").sort().join("");
        let count = 0;

        for (let i = 0; i <= n - m; i++) {
            let sub = txt.substring(i, i + m);
            let sortedSub = sub.split("").sort().join("");

            if (sortedSub === sortedPat) {
                count++;
            }
        }

        return count;
    }
*/

/* 
function search(pat, txt) {
    let n = txt.length;
    let m = pat.length;

    let patFreq = new Array(26).fill(0);

    for (let ch of pat) {
        patFreq[ch.charCodeAt(0) - 97]++;
    }

    let count = 0;

    for (let i = 0; i <= n - m; i++) {
        let txtFreq = new Array(26).fill(0);

        for (let j = i; j < i + m; j++) {
            txtFreq[txt.charCodeAt(j) - 97]++;
        }

        let isSame = true;
        for (let k = 0; k < 26; k++) {
            if (patFreq[k] !== txtFreq[k]) {
                isSame = false;
                break;
            }
        }

        if (isSame) count++;
    }

    return count;
}
 
*/

function search(pat, txt) {
    let m = pat.length;
    let n = txt.length;

    let patFreq = new Array(26).fill(0);
    let winFreq = new Array(26).fill(0);

    for (let i = 0; i < m; i++) {
        patFreq[pat.charCodeAt(i) - 97]++;
        winFreq[txt.charCodeAt(i) - 97]++;
    }

    let count = 0;

    function same(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    if (same(patFreq, winFreq)) count++;

    for (let i = m; i < n; i++) {
        winFreq[txt.charCodeAt(i - m) - 97]--;
        winFreq[txt.charCodeAt(i) - 97]++;

        if (same(patFreq, winFreq)) count++;
    }

    return count;
}