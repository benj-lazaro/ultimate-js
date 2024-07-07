// Exercise

const _items = new WeakMap();

class Stack {
  constructor() {
    // Instance member(s)

    // Private member array using a WeakMap identifier
    _items.set(this, []);
  }

  // Prototype member(s)
  push(obj) {
    // Pushes in an item unto the private array (i.e. stack)
    _items.get(this).push(obj);
  }

  pop() {
    // Pops out an item from the private array (i.e. stack)
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Stack is empty.");
    return items.pop();
  }

  peek() {
    // Peeks at the item on top of the private array (i.e. stack)
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Stack is empty.");
    return items[items.length - 1];
  }

  // Gets the current item inside the private array (i.e. stack)
  get count() {
    return _items.get(this).length;
  }
}

const stack = new Stack();
console.log(stack);
