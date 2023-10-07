import SinglyLinkedList from './LinkedList/SinglyLinkedList'
import DoublyLinkedList from './LinkedList/DoublyLinkedList'
import CircularLinkedList from './LinkedList/CircularLinkedList'

import Stack from './Stack/Stack'
import Queue from './Queue/Queue'

import BinaryTree from './Trees/BinaryTree'
import AVLTree from './Trees/AVLTree'

import MaxHeap from './Heaps/MaxHeap'
import MinHeap from './Heaps/MinHeap'

import HashTable from './HashTable/HashTable'

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

const binaryTree = new BinaryTree()
binaryTree.insert(10)
binaryTree.insert(20)
binaryTree.insert(5)

console.log('Binary Tree inorder: ', binaryTree.inOrder())
console.log('Binary Tree preorder: ', binaryTree.preOrder())
console.log('Binary Tree postorder: ', binaryTree.postOrder())

const avlTree = new AVLTree()
avlTree.insert(30)
avlTree.insert(20)
avlTree.insert(40)
avlTree.insert(10)
avlTree.insert(25)
avlTree.insert(35)
avlTree.insert(50)
// Inorder Traversal
const inorderResult = avlTree.inorderTraversal(avlTree.root)
console.log('AVT Tree Inorder Traversal: ', inorderResult)

// Preorder Traversal
const preorderResult = avlTree.preorderTraversal(avlTree.root)
console.log('AVT Tree Preorder Traversal: ', preorderResult)

// Postorder Traversal
const postorderResult = avlTree.postorderTraversal(avlTree.root)
console.log('AVT Tree Postorder Traversal: ', postorderResult)

const maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(5)
console.log('Max Heap remove max: ', maxHeap.removeMax())

const minHeap = new MinHeap()
minHeap.insert(10)
minHeap.insert(20)
minHeap.insert(5)
console.log('Min Heap remove min: ', minHeap.removeMin())

const hashTable = new HashTable()
hashTable.put('key1', 100) // Insert key-value pairs using the put method
hashTable.put('key2', 200)
hashTable.put('key3', 300)

console.log('Hash Table get key2: ', hashTable.get('key2')) // Output: 200, use the get method to retrieve values
console.log('Hash Table get key4: ', hashTable.get('key4')) // Output: undefined

hashTable.remove('key2') // Delete key2 using the remove method
console.log('Hash Table get key2 after removal: ', hashTable.get('key2')) // Output: undefined

hashTable.print() // Print the contents of the hash table
