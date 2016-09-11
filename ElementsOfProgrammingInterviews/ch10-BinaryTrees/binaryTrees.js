// 10.1 - Check Height Balanced
function isHeightBalanced(root) {
    return Math.abs(height(root.left) - height(root.right)) <= 1;

    function height(root) {
        if(root === null) return -1;
        return 1 + Math.max(height(root.left), height(root.right));
    }
}

// 10.1 Solution
// Similar to above solution but has early termination by checking that
// subtrees are balanced or not.
function driver(root) {
    return checkBalanced(root).balanced;

    function checkBalanced(root) {
        if(root === null) return -1;

        // Post order traversal
        var left = checkBalanced(tree.left);
        if(!left.balanced) return left;
        var right = checkBalanced(tree.right);
        if(!right.balanced) return right;

        var isBalanced = Math.abs(left.height - right.height) <= 1;
        var height = Math.max(left.height, right.height) + 1;

        return {
            balanced: isBalanced,
            height: height
        }
    }
}

// 10.2 - Check if a tree is symmetric
// Short circuits on 1) l != r, 2) left not symmetric, 3) right not symmetric
function driver(root) {
    return checkSymmetric(root.left, root.right);

    function checkSymmetric(l, r) {
        if(!l && !r) return true;

        return l.data === r.data && checkSymmetric(l.left, r.left) && checkSymmetric(l.right, r.right);
    }
}

// 10.3 - Find the least common ancestor
function lca(root, v1, v2) {
    if(root === null) return null;

    if(v1 > root.data && v2 > root.data) {
        return lca(root.right, v1, v2);
    } else if(v1 > root.data && v2 > root.data) {
        return lca(root.left, v1, v2);
    } else {
        return root;
    }
}

// 10.4 - Find the LCA with access to parent on a node
function lcaWithParent(n1, n2) {
    var d1 = getDepth(n1);
    var d2 = getDepth(n2);

    // Arbitrarily set d1 to the deeper height
    if(d1 > d2) {
        var temp = n1;
        n1 = n2;
        n2 = temp;
    }

    var depthDiff = Math.abs(d1 - d2);
    // Move upward from deep node
    while(depthDiff-- > 0) n1 = n1.parent;

    // Until the nodes parent are the same, traverse upwards on both
    while(n1 != n2) {
        n1 = n1.parent;
        n2 = n2.parent;
    }

    return n1;
   
    function getDepth(node) {
        var depth = 0;
        while(node.parent != null) {
            node = node.parent;
            depth++;
        }

        return depth;
    }
}

// 10.10 - Computer the successor from inorder traversal
// Assume you have access to the parent
// O(h) Time complexity
function successor(node) {
    var i = node;
    if(i.right) {
       i = i.right;
       // Find the leftmost element in the node's right subtree
       while(i.left != null) i = i.left;
       
       return i; 
    }

    // Find the closest ancestor whose left subtree contains node 
    while(i.parent != null && i.parent.right == i) i = i.parent;

    return i.parent;
}

// 10.11 - Inorder traversal with O(1) space
function inOrderTraversalWithConstantSpace(root) {
    var curr = root;
    var prev = null;
    var result = [];

    while(curr !== null) {
        var next = null;
        if(curr.parent === prev) {
            // We came down to current from previous
            // Explore left, then right
            if(curr.left !== null) {
                next = curr.left;
            } else {
                result.push(curr.data);
                // Done with left, go right if right is not empty
                next = (curr.right !== null) ? curr.right : curr.parent; 
            }
        } else if(curr.left === prev) {
            // If we go back up from left subtree, print curr and go right if it exists
            result.push(curr.data);
            next = (curr.right !== null) ? curr.right: curr.parent;
        } else {
            // If we can from the right, go up
            next = curr.parrent;
        }

        prev = curr;
        curr = next;
    }

    return result;
}

// 10.12 - Reconstruct binary tree from preorder and inorder traversal arr data
function binaryTreeFromPreOrderInOrder(preOrder, inOrder) {
    var hash = {};
    for(var i = 0; i < inorder.length; i++) hash[inOrder] = i; // hash the index of the value in inOrder

    return buildTree(preOrder, 0, preOrder.length, 0, inOrder.length, hash);

    function buildTree(
        preOrder, preStart, preEnd, inStart, inEnd, inOrderIxHash) {
        // Example 
        // pre - HBFEACDGI
        // in  - FBAEHCDIG
        // First of pre is H 
            // H is at index 4 of inorder
            // There are 4 nodes to the left of it, so the left subtree has a size of 4 
        // Therefore, 
        // left subtree = FBAE 
        // root = H 
        // right subtree = CDIG
        if(preEnd <= preStart || inEnd <= inStart) return null; // base case

        var rootInOrderIdx = inOrderIxHash[preOrder[preStart]]; // get root inorder idx
        var leftSubtreeSize = rootInOrderIdx - inStart;
        var rightTreeStartIx = preStart + leftSubtreeSize + 1;

        var newNode = new BinaryTreeNode();
        newNode.data = preOrder[preStart];
        newNode.left = buildTree(preOrder, preStart+1, rightTreeStartIx, inStart, rootInOrderIdx, inOrderIxHash);
        newNode.right = buildTree(preOrder, rightTreeStartIx, preEnd, rootInOrderIdx+1, inEnd, inOrderIxHash);
        
        return newNode;
    }

    // Private Node constructor
    function BinaryTreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
