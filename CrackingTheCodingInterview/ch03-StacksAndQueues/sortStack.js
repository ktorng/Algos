// sort a stack such that smallest items are on top
// can use one additional temporary stack

function Stack() {
  this.storage = [];
}

Stack.prototype.push = function(val) {
  this.storage.push(val);
};

Stack.prototype.pop = function() {
  return this.storage.pop();
};

Stack.prototype.isEmpty = function() {
  return this.storage.length === 0;
};

Stack.prototype.peek = function() {
  return this.storage[this.storage.length - 1];
};

Stack.prototype.print = function() {
  return this.storage;
};

function sortStack(stack) {
  // empty stack, nothing to sort
  if (stack.isEmpty()) return stack;

  let temp;
  let result = new Stack();

  while (!stack.isEmpty()) {
    temp = stack.pop();
    while (!result.isEmpty() && result.peek() < temp) stack.push(result.pop());
    result.push(temp);
    while (stack.peek() < result.peek()) result.push(stack.pop());
  }

  return result;
}

var testStack = new Stack();
console.log(testStack.peek() < 1)
testStack.push(1)
testStack.push(9)
testStack.push(16)
testStack.push(12)
testStack.push(7)
console.log(testStack.print())
var sortedStack = sortStack(testStack);
console.log(sortedStack.print())
