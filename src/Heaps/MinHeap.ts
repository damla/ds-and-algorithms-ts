class MinHeap {
  heap: number[]

  constructor() {
    this.heap = []
  }

  getLeftChildIndex(parentIndex: number): number {
    // Time: O(1), Space: O(1)
    return 2 * parentIndex + 1
  }

  getRightChildIndex(parentIndex: number): number {
    // Time: O(1), Space: O(1)
    return 2 * parentIndex + 2
  }

  getParentIndex(childIndex: number): number {
    // Time: O(1), Space: O(1)
    return Math.floor((childIndex - 1) / 2)
  }

  hasLeftChild(index: number): boolean {
    // Time: O(1), Space: O(1)
    return this.getLeftChildIndex(index) < this.heap.length
  }

  hasRightChild(index: number): boolean {
    // Time: O(1), Space: O(1)
    return this.getRightChildIndex(index) < this.heap.length
  }

  hasParent(index: number): boolean {
    // Time: O(1), Space: O(1)
    return this.getParentIndex(index) >= 0
  }

  leftChild(index: number): number {
    // Time: O(1), Space: O(1)
    return this.heap[this.getLeftChildIndex(index)]
  }

  rightChild(index: number): number {
    // Time: O(1), Space: O(1)
    return this.heap[this.getRightChildIndex(index)]
  }

  parent(index: number): number {
    // Time: O(1), Space: O(1)
    return this.heap[this.getParentIndex(index)]
  }

  swap(indexOne: number, indexTwo: number): void {
    // Time: O(1), Space: O(1)
    const temp = this.heap[indexOne]
    this.heap[indexOne] = this.heap[indexTwo]
    this.heap[indexTwo] = temp
  }

  insert(value: number): void {
    // Time: O(log n), Space: O(1)
    this.heap.push(value)
    this.heapifyUp()
  }

  removeMin(): number | null {
    // Time: O(log n), Space: O(1)
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()!
    const item = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.heapifyDown()
    return item
  }

  heapifyUp(): void {
    // Time: O(log n), Space: O(1)
    let index = this.heap.length - 1
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  heapifyDown(): void {
    // Time: O(log n), Space: O(1)
    let index = 0
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index)
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break
      } else {
        this.swap(index, smallerChildIndex)
      }
      index = smallerChildIndex
    }
  }
}

export default MinHeap
