class BinaryTreeNode {
  value: number
  left: BinaryTreeNode | null = null
  right: BinaryTreeNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

class BinaryTree {
  root: BinaryTreeNode | null = null

  // Time Complexity: O(log n) for balanced trees, O(n) for unbalanced trees
  // Space Complexity: O(1)
  insert(value: number): void {
    const newNode = new BinaryTreeNode(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  private insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // Time Complexity: O(n)
  // Space Complexity: O(n)
  inOrder(
    node: BinaryTreeNode | null = this.root,
    result: number[] = []
  ): number[] {
    if (node !== null) {
      this.inOrder(node.left, result)
      result.push(node.value)
      this.inOrder(node.right, result)
    }
    return result
  }

  // Time Complexity: O(n)
  // Space Complexity: O(n)
  preOrder(
    node: BinaryTreeNode | null = this.root,
    result: number[] = []
  ): number[] {
    if (node !== null) {
      result.push(node.value)
      this.preOrder(node.left, result)
      this.preOrder(node.right, result)
    }
    return result
  }

  // Time Complexity: O(n)
  // Space Complexity: O(n)
  postOrder(
    node: BinaryTreeNode | null = this.root,
    result: number[] = []
  ): number[] {
    if (node !== null) {
      this.postOrder(node.left, result)
      this.postOrder(node.right, result)
      result.push(node.value)
    }
    return result
  }
}

export default BinaryTree
