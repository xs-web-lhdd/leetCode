/**
 * @description 108 将有序数组转换为二叉搜索树
 * @author 氧化氢
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  return build(0, nums.length - 1, nums);
};

function build(left, right, nums) {
  if(left > right) return null
  var mid = Math.ceil((left + right) / 2)
  return new TreeNode(nums[mid], build(left, mid - 1, nums), build(mid+1, right, nums))
}
