class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.headNode) {
      this.headNode = node;
      return node;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = node;
    return node;
  }

  prepend(value) {
    const node = new Node(value);
    node.nextNode = this.headNode;
    this.headNode = node;
    return node;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count += 1;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) current = current.nextNode;
    return current;
  }

  at(index) {
    if (index < 0) return null;
    let i = 0;
    let current = this.headNode;
    while (current && i < index) {
      current = current.nextNode;
      i += 1;
    }
    return current || null;
  }

  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      const removed = this.headNode;
      this.headNode = null;
      return removed;
    }
    let prev = null;
    let current = this.headNode;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    // current is last
    prev.nextNode = null;
    return current;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index += 1;
    }
    return null;
  }

  toString() {
    let parts = [];
    let current = this.headNode;
    while (current) {
      parts.push(`( ${current.value} )`);
      current = current.nextNode;
    }
    parts.push('null');
    return parts.join(' -> ');
  }

  insertAt(value, index) {
    if (index <= 0) return this.prepend(value);
    const size = this.size();
    if (index >= size) return this.append(value);
    const newNode = new Node(value);
    let prev = this.at(index - 1);
    if (!prev) return null;
    newNode.nextNode = prev.nextNode;
    prev.nextNode = newNode;
    return newNode;
  }

  removeAt(index) {
    if (index < 0) return null;
    if (!this.headNode) return null;
    if (index === 0) {
      const removed = this.headNode;
      this.headNode = this.headNode.nextNode;
      removed.nextNode = null;
      return removed;
    }
    const prev = this.at(index - 1);
    if (!prev || !prev.nextNode) return null;
    const removed = prev.nextNode;
    prev.nextNode = removed.nextNode;
    removed.nextNode = null;
    return removed;
  }
}

module.exports = { LinkedList, Node };
