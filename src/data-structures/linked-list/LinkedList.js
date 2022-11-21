import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // Create new node using value passed to function
    const newNode = new LinkedListNode(value);
    // If there is no head, set new node as head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, attach new node to end of list
      // Set the next property on tail to new node
      this.tail.next = newNode;
      // Set the tail property on list to new node
      this.tail = newNode;
    }
    // Increment length by one
    this.length += 1;
    return this;
  }

  pop() {
    // If list is empty, return undefined
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    // Loop through list until tail
    while (current.next) {
      // Set new tail to current
      newTail = current;
      // Moves current forward
      current = current.next;
    }
    // Set tail to 2nd to last node
    this.tail = newTail;
    // Set next propety of 2nd to last node to null
    this.tail.next = null;
    // Decrement length by one
    this.length -= 1;
    // If list has one node, set head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // Return value of node removed
    return current;
  }

  unshift(val) {
    // Create new node using value passed to function
    const newNode = new LinkedListNode(val);
    // If there is no head, set new node as head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // Set new node's next property to current head
    newNode.next = this.head;
    // Set head property to new node
    this.head = newNode;
    // Increment length by one
    this.length += 1;
    return this;
  }

  shift() {
    // If list is empty, return undefined
    if (!this.head) return undefined;
    // Set current head property to variable
    const currentHead = this.head;
    // Set head property to current head's next
    this.head = currentHead.next;
    // Decrement length by one
    this.length -= 1;
    // If list has one node, set tail to null
    if (this.length === 0) {
      this.tail = null;
    }
    // Return value of node removed
    return currentHead;
  }

  get(index) {
    // If index is less than zero or greater than or equal to length of list, return null
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    // Loop through list until index
    while (counter !== index) {
      current = current.next;
      counter += 1;
    }
    // Return node at index
    return current;
  }

  set(index, value) {
    // Use get function to find node
    const foundNode = this.get(index);
    // If node is found, set the value of node to value passed to function and return true
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    // If node is not found, return false
    return false;
  }

  insert(index, value) {
    // If index is less than zero or greater than length of list, return false
    if (index < 0 || index > this.length) return false;
    // If index is same as length of list, push new node to end of list
    if (index === this.length) return !!this.push(value);
    // If index is 0, unshift new node to start of list
    if (index === 0) return !!this.unshift(value);
    const newNode = new LinkedListNode(value);
    // Otherwise, access node at index - 1
    const prev = this.get(index - 1);
    const temp = prev.next;
    // Set next property on node at index to new node
    prev.next = newNode;
    // Set next property on new node to previous next
    newNode.next = temp;
    // Increment length by one
    this.length += 1;
    return true;
  }

  remove(index) {
    // If index is less than zero or greater than or equal to length of list, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // If index is 0, shift
    if (index === 0) return this.shift();
    // If index is same as length - 1, pop
    if (index === this.length - 1) return this.pop();
    // Otherwise, access node at index - 1
    const prev = this.get(index - 1);
    // Set next property on node to next of next node
    const removed = prev.next;
    prev.next = removed.next;
    // Decrement length by one
    this.length -= 1;
    // Return value of node removed
    return removed;
  }

  reverse() {
    // Swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    // Loop through list
    for (let i = 0; i < this.length; i += 1) {
      // Set next to next property of node
      next = node.next;
      // Set next property of node to prev
      node.next = prev;
      // Set prev to value of node
      prev = node;
      // Set node to value of next
      node = next;
    }
    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
}
