"use strict";
/**
 * Are nameless and salesman anagrams
 */
const areTheseWordsAnagrams = (str1, str2) => {
    const str1Freq = {};
    const str2Freq = {};
    /**
     * 1. lettereck if both strings are the same length
     */
    if (str1.length !== str2.length) {
        return false;
    }
    /**
     * check the frequency of each letter using a hash table
     */
    for (const letter of str1) {
        if (str1Freq[letter]) {
            str1Freq[letter] += 1;
        }
        else {
            str1Freq[letter] = 1;
        }
    }
    for (const letter of str2) {
        if (str2Freq[letter]) {
            str2Freq[letter] += 1;
        }
        else {
            str2Freq[letter] = 1;
        }
    }
    const keys = Object.keys(str1Freq);
    for (const key of keys) {
        if (!str1Freq[key] === str2Freq[key]) {
            return false;
        }
    }
    return true;
};
if (areTheseWordsAnagrams("nameless", "salesman")) {
    console.log(`They are anagrams 🎉`);
}
else {
    console.log(`They are not anagrams 💔`);
}
