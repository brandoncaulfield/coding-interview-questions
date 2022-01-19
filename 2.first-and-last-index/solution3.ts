// Binary Search solution

/**
 * Iterative Binary Search approach for first value
 * @param arr
 * @param target
 * @returns
 */
let iterativeBinarySearchLeft = (arr: number[], target: number) => {
  let start: number = 0,
    end: number = arr.length;

  // Find the middle of the array

  let middle = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[middle] === target && arr[middle - 1] !== 5) {
      // Return index of starting position
      return middle;
    } else {
      // Move to the left in search
      middle -= 1;
    }
  }
  return false;
};

/**
 * Iterative Binary Search approach for last value
 * @param arr
 * @param target
 * @returns
 */
let iterativeBinarySearchRight = (arr: number[], target: number) => {
  let start: number = 0,
    end: number = arr.length;

  // Find the middle of the awway
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] === target && arr[middle + 1] !== target) {
      return middle;
    } else {
      middle += 1;
    }
  }

  return false;
};

const findFirstAndLast = (arr: number[], target: number) => {
  let output: number[] | "false" = [];
  // Try cover any edge cases first
  if (arr.length == 0 || arr[0] > target || arr[-1] < target) {
    return [-1, -1];
  }
  // Otherwise try find the first and last index of the target
  const start = iterativeBinarySearchLeft(arr, target);
  const end = iterativeBinarySearchRight(arr, target);

  if (start && end) {
    output[0] = start;
    output[1] = end;
    return output;
  } else {
    return [-1, -1];
  }
};

console.log(findFirstAndLast([2, 4, 5, 5, 5, 5, 5, 7, 9, 9], 5));
