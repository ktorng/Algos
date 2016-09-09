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
