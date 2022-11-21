import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create list node with object as a value', () => {
    const nodeValue = { one: 'foo', two: 'bar' };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.one).toBe('foo');
    expect(node.value.two).toBe('bar');
    expect(node.next).toBeNull();
  });
});
