/**
 * @description 实现深拷贝
 * @author 氧化氢
 */

// ------------------------------------------- 简单版深拷贝：只考虑普通对象属性，不考虑内置对象和函数。 -----------------------------------------
function deepCopyEasy(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopyEasy(obj[key]) : obj[key]
    }
  }

  return newObj
}

// -------------------------复杂版深克隆：基于简单版的基础上，还考虑了内置对象比如 Date、RegExp 等对象以及解决了循环引用的问题。----------------------------'
function isObject(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

function deepCopy(obj, map = new WeakMap()) {
  if (map.get(obj)) return obj
  let constructor = obj.constructor

  if (/^(Date|RegExp)$/i.test(constructor.name)) {
    return new constructor(obj)
  }

  if (isObject(obj)) {
    map.set(obj, true)
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepCopy(obj[key])
      }
    }

    return newObj
  } else return obj
}