
const arr: number[] = [2,4,5,5,5,5,5,7,9,9]
const target: number = 5

/**
 * Linear search solution 1
 * @param arr 
 * @param target 
 * @returns 
 */
const findFirstAndLastIndexOfTarget = (arr: number[], target: number) {

    let output: number[] = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 5 && output[0] === undefined) {
            output.push(i)
        } else if (arr[i] !== 5 && output[0]) {
            output.push(i - 1)
            return output
        }
        
    }
    
    output = [-1,-1]
    return output
}

console.log(findFirstAndLastIndexOfTarget(arr, target))