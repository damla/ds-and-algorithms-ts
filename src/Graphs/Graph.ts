class Graph {
  private adjacencyList: Map<number, number[]>

  constructor() {
    this.adjacencyList = new Map()
  }

  // Time Complexity: O(1)
  // Space Complexity: O(1)
  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, [])
    }
  }

  // Time Complexity: O(1)
  // Space Complexity: O(1)
  addEdge(vertex1: number, vertex2: number): void {
    this.adjacencyList.get(vertex1)?.push(vertex2)
    this.adjacencyList.get(vertex2)?.push(vertex1)
  }

  // Time Complexity: O(E) where E is the total number of edges for the given vertex
  // Space Complexity: O(1)
  removeEdge(vertex1: number, vertex2: number): void {
    this.adjacencyList.set(
      vertex1,
      this.adjacencyList.get(vertex1)?.filter((v) => v !== vertex2) || []
    )
    this.adjacencyList.set(
      vertex2,
      this.adjacencyList.get(vertex2)?.filter((v) => v !== vertex1) || []
    )
  }

  // Time Complexity: O(V + E) where V is the number of vertices and E is the total number of edges
  // Space Complexity: O(1)
  removeVertex(vertex: number): void {
    while (this.adjacencyList.get(vertex)?.length) {
      const adjacentVertex = this.adjacencyList.get(vertex)?.pop()
      this.removeEdge(vertex, adjacentVertex!)
    }
    this.adjacencyList.delete(vertex)
  }

  print(): void {
    for (let [key, value] of this.adjacencyList) {
      console.log(`Vertex ${key} -> ${value.join(' ')}`)
    }
  }

  // Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges
  // Space Complexity: O(V) due to the stack and the visited set
  dfs(start: number): number[] {
    const result: number[] = []
    const visited: Set<number> = new Set()
    const stack: number[] = [start]

    while (stack.length) {
      const vertex = stack.pop()
      if (!vertex || visited.has(vertex)) continue // Skip if vertex is null or already visited
      visited.add(vertex)
      result.push(vertex)

      const neighbors = this.adjacencyList.get(vertex) || []
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor)
        }
      }
    }

    return result
  }

  // Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges
  // Space Complexity: O(V) due to the queue and the visited set
  bfs(start: number): number[] {
    const queue: number[] = [start] // Initialize a queue with the starting vertex
    const result: number[] = [] // List to store the order of visited vertices
    const visited: Set<number> = new Set() // Set to keep track of visited vertices
    visited.add(start) // Mark the starting vertex as visited

    while (queue.length > 0) {
      const vertex = queue.shift() // Remove the first vertex from the queue
      if (vertex === undefined) continue // Skip if vertex is undefined
      result.push(vertex) // Add the vertex to the result list

      const neighbors = this.adjacencyList.get(vertex) || [] // Get the neighbors of the vertex
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          // If the neighbor hasn't been visited
          visited.add(neighbor) // Mark the neighbor as visited
          queue.push(neighbor) // Add the neighbor to the queue to be processed in future iterations
        }
      }
    }

    return result // Return the order of visited vertices
  }
}

export default Graph
