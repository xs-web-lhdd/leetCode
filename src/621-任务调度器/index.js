/**
 * @description 621 任务调度器
 * @author 氧化氢
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

function leastInterval(tasks, n) {
  if (n === 0) return tasks.length
  let arr = Array(26).fill(0);
  for (let c of tasks) {
    //统计各个字母出现的次数
    arr[c.charCodeAt() - "A".charCodeAt()]++;
  }
  let max
  // 找到最大次数
  max = Math.max.apply(null, arr)
  let ret = (max - 1) * (n + 1); //计算前n-1行n的间隔的时间大小
  for (let i = 0; i < 26; i++) {
    //计算和最大次数相同的字母个数，然后累加进ret
    if (arr[i] == max) {
      ret++;
    }
  }
  return Math.max(ret, tasks.length);
}

export default leastInterval