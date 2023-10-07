import SinglyLinkedList from './LinkedList/SinglyLinkedList'
import DoublyLinkedList from './LinkedList/DoublyLinkedList'
import CircularLinkedList from './LinkedList/CircularLinkedList'

import Stack from './Stack/Stack'
import Queue from './Queue/Queue'

import BinaryTree from './Trees/BinaryTree'

const mySinglyLinkedList = new SinglyLinkedList()
mySinglyLinkedList.append(5)
mySinglyLinkedList.append(10)
mySinglyLinkedList.prepend(1)
mySinglyLinkedList.print() // 1 -> 5 -> 10

const myDoublyLinkedList = new DoublyLinkedList()
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(10)
myDoublyLinkedList.append(11)
myDoublyLinkedList.prepend(1)
myDoublyLinkedList.delete(5)
myDoublyLinkedList.print() // Output: 1 <-> 10

const myCircularLinkedList = new CircularLinkedList()
myCircularLinkedList.append(5)
myCircularLinkedList.append(10)
myCircularLinkedList.prepend(1)
myCircularLinkedList.delete(20)
myCircularLinkedList.insert(2, 15)
myCircularLinkedList.print()
const node = myCircularLinkedList.search(15)
console.log(
  'Search for value 15 in the Doubly Linked List:',
  node ? node.value : null
)

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log('Stack peek: ', stack.peek()) // Output: 30
stack.print() // Output: 10 20

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print() // Output: 20 30

// Usage:
const myBinaryTree = new BinaryTree()
myBinaryTree.insert(10)
myBinaryTree.insert(20)
myBinaryTree.insert(5)

console.log('Binary Tree inorder: ', myBinaryTree.inOrder())
console.log('Binary Tree preorder: ', myBinaryTree.preOrder())
console.log('Binary Tree postorder: ', myBinaryTree.postOrder())
