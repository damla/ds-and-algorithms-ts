class LinkedListNode {
  value: number
  next: LinkedListNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

class CircularLinkedList {
  head: LinkedListNode | null = null

  // Time Complexity: O(n), Space Complexity: O(1)
  append(value: number): void {
    const newNode = new LinkedListNode(value)
    if (this.head === null) {
      this.head = newNode
      newNode.next = this.head // Point back to itself
    } else {
      let current = this.head
      while (current.next !== this.head) {
        current = current.next as LinkedListNode // Traverse to the last node
      }
      current.next = newNode // Set new node as next of the last node
      newNode.next = this.head // Point new node back to the head
    }
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  prepend(value: number): void {
    const newNode = new LinkedListNode(value)
    if (this.head === null) {
      this.head = newNode
      newNode.next = this.head
    } else {
      let current = this.head
      while (current.next !== this.head) {
        current = current.next as LinkedListNode
      }
      newNode.next = this.head
      this.head = newNode
      current.next = this.head
    }
  }

  // Time Complexity: O(n), Space Complexity: O(1)
  insert(index: number, value: number): void {
    const newNode = new LinkedListNode(value)
    if (index === 0) {
      this.prepend(value)
      return
    }
    let current = this.head
    let previous = null
    let i = 0
    do {
      previous = current
      current = current?.next as LinkedListNode
      i++
    } while (current !== this.head && i < index)
    if (previous) {
      previous.next = newNode
      newNode.next = current
    }
  }

  // Time Complexity: O(n), Space Complexity: O(1)
  delete(value: number): void {
    if (this.head === null) return
    if (this.head.value === value) {
      if (this.head.next === this.head) {
        this.head = null
      } else {
        let current = this.head
        while (current.next !== this.head) {
          current = current.next as LinkedListNode
        }
        this.head = this.head.next
        current.next = this.head
      }
      return
    }
    let current = this.head
    let previous = null
    do {
      previous = current
      current = current.next as LinkedListNode
    } while (current !== this.head && current.value !== value)
    if (current.value === value && previous) {
      previous.next = current.next
    }
  }

  // Time Complexity: O(n), Space Complexity: O(1)
  search(value: number): LinkedListNode | null {
    if (this.head === null) return null
    let current = this.head
    do {
      if (current.value === value) {
        return current
      }
      current = current.next as LinkedListNode
    } while (current !== this.head)
    return null
  }

  // Time Complexity: O(n), Space Complexity: O(n)
  print(): void {
    if (this.head === null) return // Empty list, nothing to print

    let current = this.head
    let output = '-> '
    do {
      output += `${current.value}`
      output += ' -> '
      current = current.next as LinkedListNode
    } while (current !== this.head)
    console.log('Circular Linked List: ', output)
  }
}

export default CircularLinkedList
