// MirrorTree or Symmetric Tree
// Case1: if both nodes are null, they are Symmetric
// Case2: If only one node is null, or if there values don't match then they are not Symmetric
// Case3: Recursion: We check the outer pair and the inner pair and return true only only if both result are true.


/**
 * Definition for a binary tree node.
 */
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Main function to check symmetry
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
    // An empty tree is symmetric
    if (!root) return true;

    // Helper function to compare two nodes
    const isMirror = (node1, node2) => {
        // If both nodes are null, they are symmetric
        if (!node1 && !node2) return true;

        // If only one is null, or values don't match, they aren't symmetric
        if (!node1 || !node2 || node1.val !== node2.val) return false;

        /**
         * Recursively check:
         * 1. Left child of node1 with Right child of node2 (Outer pair)
         * 2. Right child of node1 with Left child of node2 (Inner pair)
         */
        return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    };

    return isMirror(root.left, root.right);
};

// --- Example Usage ---

// Creating a symmetric tree: [1, 2, 2, 3, 4, 4, 3]
const symmetricTree = new TreeNode(1);
symmetricTree.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
symmetricTree.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));

console.log("Is tree symmetric?",symmetricTree, isSymmetric(symmetricTree)); // Output: true

// Creating a non-symmetric tree: [1, 2, 2, null, 3, null, 3]
// const asymmetricTree = new TreeNode(1);
// asymmetricTree.left = new TreeNode(2, null, new TreeNode(3));
// asymmetricTree.right = new TreeNode(2, null, new TreeNode(3));

// console.log("Is tree symmetric?", isSymmetric(asymmetricTree)); // Output: false