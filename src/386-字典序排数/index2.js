/**
 * @description 386-字典序排数
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function(n) {
  return dfs(n)
};

function dfs(target, pre = 0, arr = []) {
  for(var i = 0; i < 10; i++) {
    if(i === 0 && pre === 0) continue
    var num = pre * 10 + i
    if(num > target) continue
    arr.push(num)
    dfs(target, num, arr)
  }

  return arr
}

// 还回来了！