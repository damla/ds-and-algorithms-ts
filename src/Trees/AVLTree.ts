class AVLTreeNode {
  value: number
  height: number = 1 // Height of node, used to determine balance factor
  left: AVLTreeNode | null = null
  right: AVLTreeNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

class AVLTree {
  root: AVLTreeNode | null = null

  // Space Complexity: O(log n) for balanced trees due to the call stack, O(n) for unbalanced trees
  insert(value: number): void {
    const newNode = new AVLTreeNode(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.root = this.insertNode(this.root, newNode)
    }
  }

  private insertNode(node: AVLTreeNode, newNode: AVLTreeNode): AVLTreeNode {
    // Standard BST insert
    if (newNode.value < node.value) {
      node.left =
        node.left === null ? newNode : this.insertNode(node.left, newNode)
    } else if (newNode.value > node.value) {
      node.right =
        node.right === null ? newNode : this.insertNode(node.right, newNode)
    }

    // Update height of current node
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))

    // Get balance factor to check whether current node became unbalanced
    const balance = this.getBalance(node)

    // Perform rotations to fix the balance
    // Left Left Case
    if (balance > 1 && newNode.value < node.left!.value) {
      return this.rightRotate(node)
    }

    // Right Right Case
    if (balance < -1 && newNode.value > node.right!.value) {
      return this.leftRotate(node)
    }

    // Left Right Case
    if (balance > 1 && newNode.value > node.left!.value) {
      node.left = this.leftRotate(node.left!)
      return this.rightRotate(node)
    }

    // Right Left Case
    if (balance < -1 && newNode.value < node.right!.value) {
      node.right = this.rightRotate(node.right!)
      return this.leftRotate(node)
    }

    return node // Return the unchanged node pointer
  }

  // Time Complexity: O(1)
  // Space Complexity: O(1)
  private getHeight(node: AVLTreeNode | null): number {
    return node ? node.height : 0
  }

  // Time Complexity: O(1)
  // Space Complexity: O(1)
  private getBalance(node: AVLTreeNode): number {
    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  // Time Complexity: O(1)
  // Space Complexity: O(1)
  private rightRotate(y: AVLTreeNode): AVLTreeNode {
    const x = y.left!
    const T2 = x.right

    // Perform rotation
    x.right = y
    y.left = T2

    // Update heights
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right))
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right))

    return x // New root
  }

  // Time Complexity: O(1)
  // Space Complexity: O(1)
  private leftRotate(x: AVLTreeNode): AVLTreeNode {
    const y = x.right!
    const T2 = y.left

    // Perform rotation
    y.left = x
    x.right = T2

    // Update heights
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right))
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right))

    return y // New root
  }

  // Inorder Traversal: Left, Node, Right
  // Time Complexity: O(n)
  // Space Complexity: O(n) in the worst case due to recursion, O(log n) in the average case for balanced trees
  inorderTraversal(node: AVLTreeNode | null, result: number[] = []): number[] {
    if (node !== null) {
      this.inorderTraversal(node.left, result)
      result.push(node.value)
      this.inorderTraversal(node.right, result)
    }
    return result
  }

  // Preorder Traversal: Node, Left, Right
  // Time Complexity: O(n)
  // Space Complexity: O(n) in the worst case due to recursion, O(log n) in the average case for balanced trees
  preorderTraversal(node: AVLTreeNode | null, result: number[] = []): number[] {
    if (node !== null) {
      result.push(node.value)
      this.preorderTraversal(node.left, result)
      this.preorderTraversal(node.right, result)
    }
    return result
  }

  // Postorder Traversal: Left, Right, Node
  // Time Complexity: O(n)
  // Space Complexity: O(n) in the worst case due to recursion, O(log n) in the average case for balanced trees
  postorderTraversal(
    node: AVLTreeNode | null,
    result: number[] = []
  ): number[] {
    if (node !== null) {
      this.postorderTraversal(node.left, result)
      this.postorderTraversal(node.right, result)
      result.push(node.value)
    }
    return result
  }
}

export default AVLTree
