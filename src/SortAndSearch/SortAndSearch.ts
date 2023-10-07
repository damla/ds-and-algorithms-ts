// Time Complexity:  O(n^2)
// Space Complexity: O(logn)
export const quickSort = (
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
): number[] => {
  if (left < right) {
    const pivotIndex = partition(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

const partition = (arr: number[], left: number, right: number): number => {
  const pivotValue = arr[right]
  let pivotIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      ;[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
      pivotIndex++
    }
  }
  ;[arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]
  return pivotIndex
}

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
export const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

const merge = (left: number[], right: number[]): number[] => {
  const result = []
  let i = 0,
    j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}

// Time Complexity: O(logn)
// Space Complexity: O(1)
export const binarySearch = (arr: number[], target: number): number => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}
