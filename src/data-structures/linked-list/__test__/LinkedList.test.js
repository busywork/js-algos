import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.tail.next).toBeNull();
  });

  it('should delete linked list tail', () => {
    const linkedList = new LinkedList();

    expect(linkedList.pop()).toBeUndefined();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);

    const deletedNode1 = linkedList.pop();

    expect(deletedNode1.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(2);

    const deletedNode2 = linkedList.pop();

    expect(deletedNode2.value).toBe(2);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(1);

    const deletedNode3 = linkedList.pop();

    expect(deletedNode3.value).toBe(1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.unshift(2);
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(2);

    linkedList.push(1);
    linkedList.unshift(3);
    linkedList.push(0);
    linkedList.unshift(4);

    expect(linkedList.toString()).toBe('4,3,2,1,0');
  });

  it('should delete linked list head', () => {
    const linkedList = new LinkedList();

    expect(linkedList.shift()).toBeUndefined();

    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(2);

    const deletedNode1 = linkedList.shift();

    expect(deletedNode1.value).toBe(1);
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(2);

    const deletedNode2 = linkedList.shift();

    expect(deletedNode2.value).toBe(2);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should find node by index', () => {
    const linkedList = new LinkedList();

    expect(linkedList.get(1)).toBeNull();

    linkedList.push(0);
    linkedList.push(1);

    expect(linkedList.get(1)).toBeDefined();
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.tail.value).toBe(1);

    linkedList.push(2).push(3);

    const node = linkedList.get(2);

    expect(node.value).toBe(2);
    expect(linkedList.get(4)).toBeNull();
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.tail.value).toBe(3);
  });

  it('should set value of node by index', () => {
    const linkedList = new LinkedList();

    linkedList.push(0).push(1).push(2).push(3);

    expect(linkedList.toString()).toBe('0,1,2,3');
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.tail.value).toBe(3);

    linkedList.set(2, 1);

    const node = linkedList.get(2);

    expect(node.value).toBe(1);

    linkedList.set(0, 3);
    linkedList.set(1, 2);
    linkedList.set(3, 0);

    expect(linkedList.toString()).toBe('3,2,1,0');
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(0);
  });

  it('should insert node by index', () => {
    const linkedList = new LinkedList();

    linkedList.push(0).push(2).push(4).push(6);

    expect(linkedList.toString()).toBe('0,2,4,6');
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.tail.value).toBe(6);

    linkedList.insert(1, 1);

    const node = linkedList.get(1);

    expect(node.value).toBe(1);

    linkedList.insert(3, 3);
    linkedList.insert(5, 5);

    expect(linkedList.toString()).toBe('0,1,2,3,4,5,6');
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.tail.value).toBe(6);
  });

  it('should remove node by index', () => {
    const linkedList = new LinkedList();

    linkedList.push(6).push(3).push(5).push(4);

    expect(linkedList.toString()).toBe('6,3,5,4');
    expect(linkedList.head.value).toBe(6);
    expect(linkedList.tail.value).toBe(4);

    const removedNode1 = linkedList.remove(1);

    expect(removedNode1.value).toBe(3);
    expect(linkedList.toString()).toBe('6,5,4');
    expect(linkedList.head.value).toBe(6);
    expect(linkedList.tail.value).toBe(4);

    linkedList.push(3).push(2).push(1).push(0);

    const removedNode2 = linkedList.remove(0);

    expect(removedNode2.value).toBe(6);

    const removedNode3 = linkedList.remove(5);

    expect(removedNode3.value).toBe(0);
    expect(linkedList.toString()).toBe('5,4,3,2,1');
    expect(linkedList.head.value).toBe(5);
    expect(linkedList.tail.value).toBe(1);
  });

  it('should reverse linked list', () => {
    const linkedList = new LinkedList();

    linkedList.push(0).push(1).push(2).push(3);

    expect(linkedList.toString()).toBe('0,1,2,3');
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.tail.value).toBe(3);

    linkedList.reverse();

    expect(linkedList.toString()).toBe('3,2,1,0');
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(0);

    linkedList.reverse();

    expect(linkedList.toString()).toBe('0,1,2,3');
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.tail.value).toBe(3);
  });
});
