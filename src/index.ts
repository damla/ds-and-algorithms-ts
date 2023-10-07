import SinglyLinkedList from './LinkedList/SinglyLinkedList'

const myList = new SinglyLinkedList()
myList.append(5)
myList.append(10)
myList.prepend(1)
myList.print() // 1 -> 5 -> 10
