class LinkedListNode {
  value: number
  next: LinkedListNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

class SinglyLinkedList {
  head: LinkedListNode | null = null
  tail: LinkedListNode | null = null

  append(value: number): void {
    const newNode = new LinkedListNode(value)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (this.tail) this.tail.next = newNode
      this.tail = newNode
    }
  }

  prepend(value: number): void {
    const newNode = new LinkedListNode(value)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  insert(index: number, value: number): void {
    const newNode = new LinkedListNode(value)
    if (index === 0) {
      this.prepend(value)
    } else {
      let current = this.head
      let previous = null
      let i = 0
      while (current !== null && i < index) {
        previous = current
        current = current.next
        i++
      }
      if (previous !== null) {
        previous.next = newNode
        newNode.next = current
      }
    }
  } // Time Complexity: O(n), Space Complexity: O(1)

  delete(value: number): void {
    if (this.head === null) return
    if (this.head.value === value) {
      this.head = this.head.next
      return
    }
    let current: LinkedListNode | null = this.head
    let previous: LinkedListNode | null = null
    while (current !== null && current.value !== value) {
      previous = current
      current = current.next
    }
    if (previous !== null && current !== null) {
      previous.next = current.next
    }
  } // Time Complexity: O(n), Space Complexity: O(1)

  search(value: number): LinkedListNode | null {
    let current = this.head
    while (current !== null) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }
    return null
  } // Time Complexity: O(n), Space Complexity: O(1)

  reverse(): void {
    let prev = null
    let current = this.head
    this.tail = this.head
    while (current !== null) {
      const nextNode = current.next
      current.next = prev
      prev = current
      current = nextNode
    }
    this.head = prev
  } // Time Complexity: O(n), Space Complexity: O(1)

  print(): void {
    let current = this.head
    let output = '' // Initialize an empty string to accumulate the values
    while (current) {
      output += `${current.value}` // Append the current value to the output string
      if (current.next !== null) {
        output += ' -> ' // Append ' -> ' only if there is a next node
      }
      current = current.next
    }
    console.log('Singly Linked List: ', output) // Log the accumulated string to the console
  }
}

export default SinglyLinkedList
