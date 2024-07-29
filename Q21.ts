// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let fruits: string[] = ["Apple", "Banana", "Orange"];

// Intentional error: Accessing an index that doesn't exist (index 3)
console.log("Trying to access an invalid index:", fruits[3]);

// Correct the error by accessing a valid index (index 2)
console.log("Accessing a valid index:", fruits[2]);
