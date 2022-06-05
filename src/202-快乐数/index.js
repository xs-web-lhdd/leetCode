/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let pre = n, cur = getNext(n)
  while(cur != pre && cur != 1) {
    pre = getNext(pre)
    cur = getNext(getNext(cur))
  }

  return cur === 1;
};

var getNext = function(n) {
  let t = 0
  while(n) {
    t += (n % 10) ** 2
    n = Math.floor(n / 10)
  }

  return t
}