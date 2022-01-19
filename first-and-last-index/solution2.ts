/**
 * Linear search solution 2
 * @param arr
 * @param target
 * @returns
 */
const findFirstAndLastIndexOfTarget = (arr: number[], target: number) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      const start = i;
      debugger;
      while (i + 1 < arr.length && arr[i] + 1 === target) {
        i + 1;
      }
      return [start, i];
    }
  }

  return [-1, -1];
};

console.log(findFirstAndLastIndexOfTarget([2, 4, 5, 5, 5, 5, 5, 7, 9, 9], 5));
