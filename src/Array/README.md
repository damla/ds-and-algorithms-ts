## Adding elements:


`numbers.push(6); ` 
 Adds new elements at the end of an array.

`numbers.unshift(0);`
Adds new elements at the beginning of an array.

`numbers.pop();`
Removes the last element from an array.

`numbers.shift();`
Removes the first element from an array.

`numbers.splice(2, 0, 6, 7);`
Adds/Removes elements from an array.

`array.splice(start, deleteCount, item1, item2, ..., itemX)`

```
    start: The index at which to start changing the array.
    deleteCount: The number of elements to remove.
    item1, item2, ..., itemX: The elements to add to the array, starting from the start position.

In the expression numbers.splice(2, 0, 6, 7);:

    start is 2, so the method will start at index 2.
    deleteCount is 0, so no elements will be removed.
    item1 and item2 are 6 and 7, respectively, so these values will be added to the array starting at index 2.
```


## Iterating over array:

```ts
for (let num of numbers) {
    console.log(num);
}

numbers.forEach((num, index) => {
    console.log(index, num);
});
```

## Useful methods:

`let squares = numbers.map(x => x * x);`
Creates a new array with the results of calling a function for every array element.

`let evens = numbers.filter(x => x % 2 === 0);`
Creates a new array with every element that passes a test.

`let sum = numbers.reduce((acc, x) => acc + x, 0);`
 Reduces the array to a single value.

`let sorted = numbers.sort((a, b) => a - b);`
Sorts the elements of an array.

```ts
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 3); // returns [2, 3]
```
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

```ts
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // arr2 is now [1, 2, 3, 4, 5]
```
The spread operator (...) allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. Performs a shallow copy of the original array or object


```ts
let arr = Array.from("hello"); // arr is now ['h', 'e', 'l', 'l', 'o']
```
The Array.from() method creates a new array instance from an iterable object.

```ts
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = arr1.concat(arr2); // mergedArr is now [1, 2, 3, 4, 5, 6]
```
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```ts
let arr = [1, 2, 3, 4, 5];
arr.reverse(); // arr is now [5, 4, 3, 2, 1]
```
The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```ts
let arr = ["hello", "world"];
let str = arr.join(" "); // str is now "hello world"
```
The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

## Complexity:

:warning: Worst case is the important scenario for us.

### 1. Accessing Elements:
- Accessing an element by index: `O(1)`

### 2. Adding/Removing Elements:
- Push (adding to the end): `O(1)`
- Pop (removing from the end): `O(1)`
- Unshift (adding to the beginning): `O(n)`
- Shift (removing from the beginning): `O(n)`
- Splice (adding/removing anywhere): `O(n)`

### 3. Searching and Finding Elements:
- Linear Search: `O(n)`
- Binary Search (on a sorted array): `O(log n)`

### 4. Iteration:
- Looping through elements (for, for-of, forEach, map, filter, reduce, etc.): `O(n)`

### 5. Sorting:
- Sort (using the built-in sort method which typically uses a variant of merge sort): `O(n log n)`

### 6. Copying:
- Slice: `O(n)`
- Spread Operator (`[...arr]`): `O(n)`
- Array.from(): `O(n)`

### 7. Other Common Operations:
- Concat: `O(n + m)` where `n` and `m` are the lengths of the two arrays being concatenated.
- Reverse: `O(n)`
- Join: `O(n)`

### 8. Multi-dimensional Arrays:
- Accessing elements: `O(1)`
- Iterating: `O(n * m)` where `n` is the number of sub-arrays and `m` is the average length of the sub-arrays.

<img width="477" alt="image" src="https://github.com/damla/ds-and-algorithms-ts/assets/24878421/8c348a3c-e79b-428e-a266-123eb33f2c72">

- If you change an element in originalArray by assigning a new value to it, it does not affect copiedArray since the spread operator created a new array with its own distinct elements.


<img width="475" alt="image" src="https://github.com/damla/ds-and-algorithms-ts/assets/24878421/dd802bf5-4c01-433b-9700-4a340e04cd99">

- However, the elements themselves are objects, so if the objects are modified (not replaced), both arrays will reflect the changes as they share references to the same objects.

In JavaScript, there are two kinds of values:

1. **Primitive values:** These include types like `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`. Primitive values are immutable and passed by value, meaning when you assign a primitive value to a variable, the variable gets a copy of the value.

2. **Reference values:** These include types like `object`, `array`, and `function`. Reference values are mutable and passed by reference, meaning when you assign a reference value to a variable, the variable gets a reference to the value, not a copy of the value itself.

In your example:

```ts
let originalArray = [1,2,3,4];
let shallowCopyArray = [...originalArray];
shallowCopyArray[0] = 61;
```

The elements of `originalArray` are primitive values (numbers). When you create `shallowCopyArray` using the spread operator, you're creating a new array with copies of the primitive values from `originalArray`. Each element in `shallowCopyArray` is a separate copy of the corresponding element in `originalArray`. Therefore, when you change an element in `shallowCopyArray`, it does not affect `originalArray` because the elements are separate copies, not references to shared values.

This behavior contrasts with the scenario where the array contains objects (reference values). In that case, the spread operator creates a shallow copy of the array, meaning the new array contains references to the same objects, not copies of the objects. Hence, modifying the objects in one array affects the other array.

## Is everything object in js?

In JavaScript, almost everything is an object. However, there are distinctions between primitive values and objects.

### Primitive Values:
Primitive values are not objects and have no methods or properties. The primitive data types in JavaScript are:

1. **Number**: Represents numeric values, e.g., `42` or `3.14`.
2. **String**: Represents a sequence of characters, e.g., `"hello"`.
3. **Boolean**: Represents a true or false value.
4. **Undefined**: Represents an uninitialized variable.
5. **Null**: Represents a null value, indicating the absence of value or no value.
6. **Symbol** (ES6): Represents a unique value that's not equal to any other value.
7. **BigInt** (ES2020): Represents large integers that can't be represented by the Number type.

### Objects:
Everything else in JavaScript is an object, including functions and arrays. This includes:

1. **Regular Objects**: `{}`.
2. **Arrays**: `[]`.
3. **Functions**: Functions are first-class objects, meaning they can have properties and methods, and can be passed as arguments to other functions.
4. **Date Objects**, **RegExp Objects**, and other built-in object types.
5. **Wrapper Objects**: JavaScript has corresponding wrapper objects for the primitive data types String, Number, and Boolean. These provide methods and properties that allow you to manipulate primitive values. When you try to access a method or property of a primitive, JavaScript temporarily wraps it in its corresponding wrapper object, allows access to the method or property, then discards the wrapper object.

### Example:
Here's an example to illustrate the temporary wrapping of primitives:
```javascript
let str = "hello";
console.log(str.toUpperCase());  // Output: HELLO
```
In this code snippet, `str` is a primitive string value. When we call the `toUpperCase` method on it, JavaScript temporarily wraps `str` in a String object, calls the method, then discards the wrapper object.

### Summary:
So, while not everything in JavaScript is an object, the language is designed in such a way that you can often work with primitive values as if they were objects.

Classes in JavaScript are a blueprint for creating objects and encapsulating data and behavior related to those objects. They were introduced in ES6 (ECMAScript 2015) to provide a more straightforward way to create objects and deal with inheritance compared to the existing prototype-based inheritance. Classes in JavaScript are syntactical sugar over the prototype-based inheritance and constructor functions that were traditionally used to create objects and handle inheritance.

Here's a breakdown of how classes work in JavaScript:

### 1. **Declaration:**
You can declare a class using the `class` keyword followed by the name of the class.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

### 2. **Constructor:**
The `constructor` method is a special method for creating and initializing objects created within a class.

### 3. **Methods:**
You can define methods within the class to encapsulate behavior.

### 4. **Instantiation:**
You create instances of the class using the `new` keyword.

```javascript
let person1 = new Person("Alice", 25);
person1.greet();  // Output: Hello, my name is Alice and I am 25 years old.
```

### 5. **Inheritance:**
Classes can extend other classes, inheriting their properties and methods.

```javascript
class Employee extends Person {
  constructor(name, age, employeeID) {
    super(name, age);  // call the super class constructor
    this.employeeID = employeeID;
  }

  showID() {
    console.log(`My employee ID is ${this.employeeID}.`);
  }
}

let employee1 = new Employee("Bob", 30, "E12345");
employee1.greet();  // Output: Hello, my name is Bob and I am 30 years old.
employee1.showID();  // Output: My employee ID is E12345.
```

### 6. **Static Methods:**
Static methods are called without instantiating their class and cannot be called through a class instance.

```javascript
class Helper {
  static assist() {
    console.log('Assistance provided.');
  }
}

Helper.assist();  // Output: Assistance provided.
```

Classes provide a clean and elegant syntax for working with objects and inheritance in JavaScript, making the language more accessible and easier to work with for developers familiar with class-based languages like Java or C#.

## Memory Allocation

Arrays are a fundamental data structure that provides a way to allocate contiguous memory blocks to store a collection of elements of the same data type. Here's how memory allocation works for arrays:

### 1. **Contiguous Memory Allocation:**
   - When an array is created, a continuous block of memory is allocated to it. Each element in the array occupies a specific amount of memory based on the data type of the array.
   - For example, in an array of integers, if an integer occupies 4 bytes, then an array of 10 integers will occupy 40 bytes of memory, with each element placed right next to the previous one in memory.

### 2. **Indexing:**
   - The contiguous memory allocation enables constant-time access (O(1)) to any element in the array using indexing. The memory address of any element can be calculated using the formula: `base_address + (element_index * element_size)`.

### 3. **Fixed Size:**
   - Arrays are of fixed size, which means the size of the array needs to be defined at the time of allocation, and it cannot be changed later.
   - If you need to store more elements than the array can hold, you'll need to create a new, larger array and copy the elements from the old array to the new one, which is a time-consuming operation (O(n)).

### 4. **Memory Efficiency:**
   - Arrays are memory-efficient because they do not have the overhead of storing additional pointers or references like in linked lists.
   - However, if the array is sparsely populated (i.e., has lots of empty or unused slots), it may not be a good use of memory.

### 5. **Dynamic Arrays:**
   - Some languages or libraries provide dynamic arrays (e.g., JavaScript's arrays, Java's ArrayList, or C++'s vector) that can resize automatically as elements are added or removed. 
   - Dynamic arrays often allocate more memory than needed to minimize the cost of frequent resizing. When the array fills up, it allocates a new larger block of memory, copies the elements from the old block to the new block, and deallocates the old block.

### 6. **Allocation Methods:**
   - Memory for arrays can be allocated at compile-time (static allocation) or run-time (dynamic allocation).
   - In static allocation, the size of the array is determined at compile-time, and memory is allocated before runtime.
   - In dynamic allocation, memory is allocated at run-time, and the array can be resized during program execution (though not all programming languages support this feature natively).

JavaScript does not natively support fixed-size arrays. However, it provides a typed array API for handling binary data which includes fixed-size array implementations. The typed arrays are views into ArrayBuffer objects, which provide a mechanism for accessing raw binary data.

JavaScript does not natively support fixed-size arrays. However, it provides a typed array API for handling binary data which includes fixed-size array implementations. The typed arrays are views into ArrayBuffer objects, which provide a mechanism for accessing raw binary data.

Here's a brief overview of how you can use these in JavaScript:

### 1. **ArrayBuffer:**
   - An `ArrayBuffer` is a generic fixed-length raw binary data buffer. It's not an array and has no way to understand the contents of the data it's holding; you can't directly manipulate its content.

```javascript
let buffer = new ArrayBuffer(16);  // creates a buffer of 16 bytes
```

### 2. **Typed Arrays:**
   - Typed arrays are views into `ArrayBuffers`. They provide a context to read and write the data in the `ArrayBuffers`.

```javascript
let int32View = new Int32Array(buffer);  // creates a view that treats data as 32-bit signed integers
int32View[0] = 42;
```

### 3. **DataViews:**
   - `DataViews` are another way to interact with the content of `ArrayBuffers`. They provide a low-level interface for reading and writing multiple number types in an `ArrayBuffer` irrespective of the platform's endianness.

```javascript
let view = new DataView(buffer);
view.setInt32(0, 42);  // set int32 at byte offset 0
```

### 4. **Fixed Size:**
   - The size of the `ArrayBuffer` and the typed arrays are fixed at construction time and can't be changed later.

### 5. **Use Cases:**
   - These fixed-size array-like structures are especially useful when dealing with binary data, such as when working with files, network protocols, or other binary data sources.

### Example:

```javascript
// Creating an ArrayBuffer of 8 bytes
let buffer = new ArrayBuffer(8);

// Creating a typed array of 32-bit signed integers using the buffer
let int32View = new Int32Array(buffer);

// Now int32View has 2 elements (since each int32 is 4 bytes)
int32View[0] = 42;
int32View[1] = 43;

console.log(int32View[0]);  // Output: 42
console.log(int32View[1]);  // Output: 43
```

In this example, we create an `ArrayBuffer` of 8 bytes, and then create an `Int32Array` view into that buffer. The `Int32Array` has 2 elements since each 32-bit integer occupies 4 bytes.

Through the use of `ArrayBuffer`, `TypedArray`, and `DataView`, JavaScript provides the capability for fixed-size, array-like structures, even though its standard arrays are dynamic.

In JavaScript, the specifics of how memory is allocated for dynamic arrays (or growing arrays) can vary between different JavaScript engines (e.g., V8 used in Chrome and Node.js, SpiderMonkey in Firefox, etc.). However, a common strategy employed by many of these engines is similar to what you described for Java: when an array needs to grow beyond its current allocation, the size of the allocated memory is doubled to accommodate new elements, minimizing the frequency of memory reallocations which are costly operations.

Here are some points regarding memory allocation for dynamic arrays in JavaScript:

### 1. **Doubling Allocation Size:**
   - When the array reaches its current capacity and a new element is added, the memory allocation size is often doubled. This doubling strategy helps to amortize the cost of copying elements to the new memory location over many insertions, resulting in a constant amortized time per insertion.

### 2. **Memory Copying:**
   - When the memory is reallocated, the existing elements are copied to the new memory block. This operation can be time-consuming but is necessary to ensure contiguous memory allocation, which in turn allows for efficient indexing into the array.

### 3. **Sparse Arrays:**
   - JavaScript allows for sparse arrays, where the indices are not contiguous. In such cases, the engine may opt for a different memory representation to save space, such as using a hash table or a similar data structure instead of a contiguous memory block.

### 4. **Engine Optimization:**
   - JavaScript engines employ various optimizations to make array operations as fast as possible. For example, they may use different internal representations for arrays depending on how the array is used in the code, which can affect the memory allocation strategy.

### 5. **Implementation Details:**
   - The exact details of memory allocation and array growth strategies may be specific to each JavaScript engine. For instance, the V8 engine used in Chrome and Node.js has undergone several changes over the years in how it handles array memory allocation to improve performance and memory usage.

### 6. **Pre-allocation:**
   - If you know the number of elements in advance, pre-allocating the array size by setting the `length` property of the array can help to improve performance by reducing the number of memory reallocations required as elements are added.

```javascript
let arr = [];
arr.length = 1000;  // pre-allocate 1000 elements
```

In summary, JavaScript engines use sophisticated strategies and optimizations for memory allocation and array growth to provide efficient dynamic arrays, with the doubling strategy being a common approach to handle array growth.
