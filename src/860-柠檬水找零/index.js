/**
 * @description 860 柠檬水找零
 * @author 氧化氢
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] !== 5) return false
  var five = 0,
    ten = 0
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) five++;
    if (bills[i] === 10) {
      if (five > 0) {
        five--, ten++;
      } else {
        return false
      }
    }
    if (bills[i] === 20) {
      if (five > 0 && ten > 0) {
        five--, ten--
      } else if (five >= 3) {
        five = five - 3
      } else {
        return false
      }
    }
  }

  return true
};

export default lemonadeChange