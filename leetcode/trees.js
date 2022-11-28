//94. Binary Tree Inorder Traversal



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


//LEFT, ROOT, RIGHT
var inorderTraversal = function(root) {
    const stack = [];
    let curr = root;
    let output = []
    
    while (curr !== null || stack.length !== 0) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
        if(stack.length == 0){
            stack.push(curr);
            curr = curr.right;
        }else{
            curr = stack.pop();
            output.push(curr.val);
            curr = curr.right;  
        }
      
    }  
  }
  
  return output;
};
