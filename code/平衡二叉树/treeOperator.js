/**
 * @description  创建树，新增节点，删除节点 代码演示
 * @author 氧化氢
 */


// 树节点的数据结构：
function Node(val, left, right) {
  this.val = val
  this.left = left ? left : null
  this.right = right ? right : null
}


function getNewNode(val) {
  return new Node(val)
}

// 删除整个树中 root 之后的节点
function clear(root) {
  if(!root) return
  clear(root.left)
  clear(root.right)
  root.left = null
  root.right = null
  root.val = -10000

  return
}


// 插入：
function insert(root, key) {
  if(!root) return getNewNode(key)
  if(root.val === key) return root
  if(key < root.val) {
    root.left = insert(root.left, key)
  }else {
    root.right = insert(root.right, key)
  } 

  return root
}


// 删除节点：
function deleteNode(root, key) {
  if(!root) return root
  if(key < root.val) {
    root.left = deleteNode(root.left, key)
  }else if(key > root.val) {
    root.right = deleteNode(root.right, key)
  }else {
    // 度为 0
    if(!root.left && !root.right) {
      // delete root
      return null
    }
    // 度为 1
    else if(!root.left || !root.right) {
      var temp = root.left ? root.left : root.right
      // delete root
      return temp
    }
    // 度为 2
    else {
      var temp = predeccessor(root)
      root.val = temp.val
      root.left = deleteNode(root.left, temp.val)
    }
  }

  return root
}

// 找到前驱节点：
function predeccessor(root) {
  var temp = root.left
  while(temp.right) temp = temp.right

  return temp
}



function test() {
  // 初始化一棵树：
  var tree = new Node(3)
  insert(tree, 2)
  insert(tree, 1)
  insert(tree, 5)
  insert(tree, 4)


  console.log('插入后的树：', tree);


  deleteNode(tree, 3)
  deleteNode(tree, 4)

  console.log('删除后的树：', tree);

  clear(tree)

  console.log(tree);


  var arr = []
  midOrder(tree, arr)

  console.log(arr);

  return arr
}

// 中序遍历：
function midOrder(root, arr) {
  if(!root) return
  midOrder(root.left, arr)
  arr.push(root.val)
  midOrder(root.right, arr) 
}


test()