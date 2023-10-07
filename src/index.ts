import SinglyLinkedList from './LinkedList/SinglyLinkedList'
import DoublyLinkedList from './LinkedList/DoublyLinkedList'
import CircularLinkedList from './LinkedList/CircularLinkedList'

import Stack from './Stack/Stack'

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
stack.print() // Output: 10 20 30
console.log("Stack peek: ", stack.peek()) // Output: 30
stack.print() // Output: 10 20
