export default class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  toString() {
    return `${this.value}`;
  }
}
