/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (37.38%)
 * Likes:    302
 * Dislikes: 0
 * Total Accepted:    93.4K
 * Total Submissions: 248.8K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0
  let right = x
  let mid = 0
  while (left <= right) {
    mid = parseInt((left + right) / 2)
    if (Math.pow(mid, 2) == x) {
      return mid;
    } else if (Math.pow(mid, 2) < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right

};
// @lc code=end

