const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  pop() {
    if (!this.tail) return null;

    const removedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }

    return removedNode.value;
  }

  shift() {
    if (!this.head) return null;

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    return removedNode.value;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length()) return null;

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.value;
  }

  set(index, val) {
    if (index < 0 || index >= this.length()) return false;

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    current.value = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length()) return false;
    
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length()) {
      this.push(val);
      return true;
    }

    const newNode = new Node(val);
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length()) return null;

    if (index === 0) return this.shift();
    if (index === this.length() - 1) return this.pop();

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
    current.prev = null;
    current.next = null;

    return current.value;
  }

  length() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
  printList() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values);
  }
  
}

module.exports = DoublyLinkedList;
