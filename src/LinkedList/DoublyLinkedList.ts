class LinkedListNode {
  value: number
  next: LinkedListNode | null = null
  prev: LinkedListNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

class DoublyLinkedList {
  head: LinkedListNode | null = null
  tail: LinkedListNode | null = null

  // Time Complexity: O(1), Space Complexity: O(1)
  append(value: number): void {
    const newNode = new LinkedListNode(value)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (this.tail) {
        this.tail.next = newNode // set new node as next of tail
        newNode.prev = this.tail // set tail as previous of new node
      }
      this.tail = newNode // update tail to new node
    }
  }

  // Time Complexity: O(1), Space Complexity: O(1)
  prepend(value: number): void {
    const newNode = new LinkedListNode(value)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head // set head as next of new node
      this.head.prev = newNode // set new node as previous of head
      this.head = newNode // update head to new node
    }
  }

  // Time Complexity: O(n), Space Complexity: O(1)
  delete(value: number): void {
    let current = this.head
    while (current !== null) {
      if (current.value === value) {
        if (current.prev !== null) {
          current.prev.next = current.next // bypass current node
        } else {
          this.head = current.next // update head if needed
        }
        if (current.next !== null) {
          current.next.prev = current.prev // bypass current node
        } else {
          this.tail = current.prev // update tail if needed
        }
        return // exit once the value is found and deleted
      }
      current = current.next
    }
  }

  // Time Complexity: O(n), Space Complexity: O(n)
  print(): void {
    let current = this.head
    let output = ''
    while (current) {
      output += `${current.value}`
      if (current.next !== null) {
        output += ' <-> ' // symbolize the bidirectional links
      }
      current = current.next
    }
    console.log(output)
  }
}

export default DoublyLinkedList
