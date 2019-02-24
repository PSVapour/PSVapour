function hasDupes(array) {
    var vals = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var val = array[i];
        if (val in vals) {
            return true;
        }
        vals[val] = true;
    }
    return false;
}

var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let capture = [];
    if (s === "") return 0;
    for (i; i < s.length; i++) {
        if (capture.includes(s[i]) || hasDupes(capture)) {
            capture.shift();
        }
        capture.push(s[i]);
    }
    return capture.length;
};


/*
  Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
