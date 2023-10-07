# Graphs

Graphs are a fundamental data structure used in many areas including social network analysis, internet routing, and many others. Here's an overview of the concepts you'll be learning about:

1. **Graph Theory Basics**:

   - **Vertices (or Nodes)**: The individual data points in the graph.
   - **Edges**: The connections between vertices.
   - **Directed vs Undirected Graphs**: In directed graphs, edges have a direction (from one vertex to another), while in undirected graphs, they do not.
   - **Weighted vs Unweighted Graphs**: In weighted graphs, edges have a weight or cost associated with them, while in unweighted graphs, they do not.

2. **Graph Representation**:

   - **Adjacency Matrix**: A 2D matrix where the cell `matrix[i][j]` is 1 (or the weight of the edge) if there is an edge between vertices `i` and `j`, and 0 otherwise.
   - **Adjacency List**: A list where each element `i` is a list of vertices adjacent to vertex `i`.

3. **Graph Traversal Algorithms**:

   - **Depth-First Search (DFS)**: A graph traversal algorithm that explores as far as possible along each branch before backing up.
   - **Breadth-First Search (BFS)**: A graph traversal algorithm that explores the neighbor vertices first, before moving on to the next level neighbors.

4. **Shortest Path Algorithms**:

   - **Dijkstra's Algorithm**: Finds the shortest path between vertices in a graph.
   - **Bellman-Ford Algorithm**: Also finds the shortest path, and works with graphs that have negative edge weights.

5. **Spanning Tree Algorithms**:

   - **Kruskal's Algorithm**: Finds a minimum spanning tree for a graph, which is a tree that spans all vertices in the graph and has the minimum possible total edge weight.
   - **Prim's Algorithm**: Another algorithm to find the minimum spanning tree.

6. **Topological Sorting**: A linear ordering of the vertices such that for every directed edge `uv` from vertex `u` to vertex `v`, `u` comes before `v` in the ordering.

7. **Cycle Detection**: Determining whether a graph contains a cycle.

Let's start by implementing a simple undirected, unweighted graph in TypeScript. We'll use an adjacency list representation, which is efficient in terms of both space and time for most graph algorithms. Here's a simple implementation:
