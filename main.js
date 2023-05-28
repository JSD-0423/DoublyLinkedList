const DoublyLinkedList = require('./DoublyLinkedList');

const list = new DoublyLinkedList();

list.push(5);
list.push(10);
list.push(15);

console.log(list.get(0)); // Output: 5
console.log(list.get(1)); // Output: 10
console.log(list.get(2)); // Output: 15

list.set(1, 12);
console.log(list.get(1)); // Output: 12

list.insert(1, 8);
console.log(list.get(1)); // Output: 8
console.log(list.get(2)); // Output: 12

console.log(list.remove(2)); // Output: 12
console.log(list.get(2)); // Output: 15

console.log(list.pop()); // Output: 15
console.log(list.shift()); // Output: 5
list.printList();
console.log(list.length()); // Output: 1
