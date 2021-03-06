/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (61.88%)
 * Likes:    370
 * Dislikes: 0
 * Total Accepted:    81.5K
 * Total Submissions: 131.3K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = new Map()
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split('').sort().join()
    if (hash.has(str)) {
      let tmp = hash.get(str)
      tmp.push(strs[i])
      hash.set(str, tmp)
    } else {
      hash.set(str, [strs[i]])
    }
  }
  return [...hash.values()]
};
// @lc code=end

