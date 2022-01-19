/**
 * Are nameless and salesman anagrams
 */

const areTheseWordsAnagrams = (str1: string, str2: string) => {
  /**
   * 1. Check if the words are the same length
   */
  if (str1.length !== str2.length) {
    return false;
  } else {
    /**
     * 2. Check if the words lexicographic order is the same
     */
    debugger;
    console.log(str1.split("").sort());
    console.log(str2.split("").sort());
    if (str1.split("").sort() !== str2.split("").sort()) {
      return false;
    }
  }
  return true;
};

if (areTheseWordsAnagrams("nameless", "salesmen")) {
  console.log(`They are anagrams 🎉`);
} else {
  console.log(`They are not anagrams 💔`);
}
