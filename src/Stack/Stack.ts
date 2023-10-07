class Stack {
  private items: number[]

  constructor() {
    this.items = []
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  push(value: number): void {
    this.items.push(value)
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  pop(): number | undefined {
    return this.items.pop()
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  peek(): number | undefined {
    return this.items[this.items.length - 1]
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
    console.log('Stack: ', this.items.join(' '))
  }
}

export default Stack
