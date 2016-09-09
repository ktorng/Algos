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
