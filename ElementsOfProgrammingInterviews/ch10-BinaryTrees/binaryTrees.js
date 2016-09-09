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