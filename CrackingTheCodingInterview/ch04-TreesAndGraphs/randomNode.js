/*
  in addition to insert, find, and delete methods for a binary
  tree class, implement a getRandomNode() method that returns
  a random node from the tree
*/

function BinaryTree(val) {
  this.value = val;
  this.size = 1;
}

BinaryTree.prototype.insert = (val) => {
  if (val < this.value) {
    if (!this.left) {
      this.left = new BinaryTree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (!this.right) {
      this.right = new BinaryTree(val);
    } else {
      this.right.insert(val);
    }
  }
  this.size++;
}

// each node should have 1/size chance of getting picked
BinaryTree.prototype.getRandomNode = () => {
  // breakpoints
  // left: < left.size
  // right: >= left.size and < left.size + right.size
  // current node: 1
  const random = Math.random() * this.size;
  if (random < this.left.size) {
    return this.left.getRandomNode();
  } else if (random >= this.left.size &&
    random < this.left.size + this.right.size) {
    return this.right.getRandomNode();
  } else {
    return this;
  }
}
