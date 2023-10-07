# Trees

## Binary Tree

A Binary Tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.

Inorder, Preorder, and Postorder are different ways to traverse or visit all the nodes in a binary tree. Here's a brief explanation of each:

### 1. Inorder Traversal (LNR: Left-Node-Right)

In an Inorder traversal, the nodes are recursively visited in this order; left, node, right. First, the left subtree is traversed, then the node is visited, and finally, the right subtree is traversed.

**Steps for Inorder Traversal:**

1. Traverse the left subtree in Inorder.
2. Visit the node.
3. Traverse the right subtree in Inorder.

**Example**:
For the following binary tree:

```bash
    10
   /   \
  5     20
```

Inorder traversal would visit the nodes in this order: 5, 10, 20.

### 2. Preorder Traversal (NLR: Node-Left-Right)

In a Preorder traversal, the nodes are recursively visited in this order; node, left, right. First, the node is visited, then the left subtree is traversed, and finally, the right subtree is traversed.

**Steps for Preorder Traversal:**

1. Visit the node.
2. Traverse the left subtree in Preorder.
3. Traverse the right subtree in Preorder.

**Example**:
For the same binary tree above, Preorder traversal would visit the nodes in this order: 10, 5, 20.

### 3. Postorder Traversal (LRN: Left-Right-Node)

In a Postorder traversal, the nodes are recursively visited in this order; left, right, node. First, the left subtree is traversed, then the right subtree is traversed, and finally, the node is visited.

**Steps for Postorder Traversal:**

1. Traverse the left subtree in Postorder.
2. Traverse the right subtree in Postorder.
3. Visit the node.

**Example**:
For the same binary tree above, Postorder traversal would visit the nodes in this order: 5, 20, 10.

These traversal orders are fundamental to various algorithms on binary trees and can be useful in different scenarios based on the requirement of the problem at hand.
