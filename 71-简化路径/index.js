/**
 * @description 71-简化路径
 * @author 氧化氢
 */

/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  var names = path.split('/')

  var stack = []
  for(var name of names) {
      if(name === '..') {
          if(stack.length) stack.pop()
      }
      else if(name !== '.' && name.length) {
          stack.push(name)
      }
  }


  return `/${stack.join('/')}`
};
