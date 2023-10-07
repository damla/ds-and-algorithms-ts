class HashTable {
  private table: Map<string, number>

  constructor() {
    this.table = new Map<string, number>()
  }

  // Time Complexity: O(1) on average, O(n) in the worst case if a collision occurs
  put(key: string, value: number): void {
    this.table.set(key, value)
  }

  // Time Complexity: O(1) on average, O(n) in the worst case if a collision occurs
  get(key: string): number | undefined {
    return this.table.get(key)
  }

  // Time Complexity: O(1) on average, O(n) in the worst case if a collision occurs
  remove(key: string): void {
    this.table.delete(key)
  }

  // Time Complexity: O(n) as it iterates over all the keys in the table
  print(): void {
    for (let [key, value] of this.table) {
      console.log(`${key} -> ${value}`)
    }
  }
}

export default HashTable
