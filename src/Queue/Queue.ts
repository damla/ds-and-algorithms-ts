class Queue {
  private items: number[]

  constructor() {
    this.items = []
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  enqueue(value: number): void {
    this.items.push(value)
  }

  // Time Complexity: O(n), Space Complexity: O(1)
  dequeue(): number | undefined {
    return this.items.shift()
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  front(): number | undefined {
    return this.items[0]
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  isEmpty(): boolean {
    return this.items.length === 0
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  size(): number {
    return this.items.length
  }

  // Time Complexity: O(n), Space Complexity: O(n)
  print(): void {
    console.log('Queue: ', this.items.join(' '))
  }
}

export default Queue
