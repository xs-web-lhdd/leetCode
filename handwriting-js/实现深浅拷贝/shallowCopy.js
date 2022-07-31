/**
 * @description 实现浅拷贝
 * @author 氧化氢
 */


function shallowCopy(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}