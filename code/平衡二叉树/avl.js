/**
 * @description  创建树，新增节点，删除节点 代码演示
 * @author 氧化氢
 */


// 树节点的数据结构：
function Node(val, left, right, h = 1) {
  this.val = val ? val : -1000
  this.left = left ? left : null
  this.right = right ? right : null
  this.h = (typeof h === 'number') ? h : 1
}


function getNewNode(val) {
  return new Node(val, null, null, 1)
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
  update_height(root)
  return maintain(root)
}


// 更新树高：
function update_height(root) {
  // 左右子树都没有，那么树高就是默认的 1
  if(root.left === null && root.right === null) return
  // 左子树为空的时候，树高就等于右子树树高 + 1
  if(root.left === null) {
    root.h = root.right.h + 1
  }
  // 右子树为空时，树高就等于左子树树高 + 1
  else if(root.right === null) {
    root.h = root.left.h + 1
  }
  // 左右子树都存在时，树高就等于最大树高 + 1
  else root.h = Math.max(root.left.h, root.right.h) + 1
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

  update_height(root)

  return maintain(root)
}

// 找到前驱节点：
function predeccessor(root) {
  var temp = root.left
  while(temp.right) temp = temp.right

  return temp
}

// 左旋：
function left_rotate(root) {
  var newRoot = root.right
  root.right = newRoot.left
  newRoot.left = root
  update_height(root)
  update_height(newRoot)
  return newRoot
}

function right_rotate(root) {
  var newRoot = root.left
  root.left = newRoot.right
  newRoot.right = root
  update_height(root)
  update_height(newRoot)
  return newRoot
}

function LR_rotate(root) {
  var temp = root.left.right
  temp.left = root.left
  temp.right = root
}
function RL_rotate(root) {
  var temp = root.right.left
  temp.right = root.right
  temp.left = root
}

// 调整节点，调整平衡：
function maintain(root) {

  if(!root.left && !root.right) return root
  if(root.left && root.left.h === 1 && !root.right) return root
  if(root.right && root.right.h === 1 && !root.left) return root
  if(root.left && root.left.left && root.left.h === 2 && !root.right) return right_rotate(root)
  if(root.left && root.left.right && root.left.h === 2 && !root.right) return LR_rotate(root)
  if(root.right && root.right.right && root.right.h === 2 && !root.left) return left_rotate(root)
  if(root.right && root.right.left && root.right.h === 2 && !root.left) return RL_rotate(root)
  if(root.left && root.left.h === 2 && root.right.h === 1) return root
  if(root.right && root.right.h === 2 && root.left.h === 1) return root


  // root 左右至少都有两个节点的情况下可以正常执行:
  if(Math.abs(root.left.h - root.right.h) < 2) return root
  if(root.left.h > root.right.h) {
    if(root.left.right.h > root.left.left.h) {
      // LR 的情况：先左旋，再右旋
      root.left = left_rotate(root.left)
    }
    // 不走上面 if 语句就是 LL 情况，直接右旋即可
    root = right_rotate(root)
  } else {
    if(root.right.left.h > root.right.right.h) {
      // RL 的情况：先左旋，再右旋
      root.right = right_rotate(root.right)
    }
    // 不走上面 if 语句就是 RR 情况，直接左旋即可
    root = left_rotate(root) 
  }

  return root
}


// 测试代码：
function test() {
  // RR型测试：
  // var tree = new Node(1, null, null, 1)
  // tree = insert(tree, 2)
  // tree = insert(tree, 3)
  // tree = insert(tree, 4)
  // tree = insert(tree, 5)
  // tree = insert(tree, 6)
  // tree = insert(tree, 7)
  // tree = insert(tree, 8)


  // LL 型测试
  // var tree = new Node(8, null, null, 1)
  // tree = insert(tree, 7)
  // tree = insert(tree, 6)
  // tree = insert(tree, 5)
  // tree = insert(tree, 4)
  // tree = insert(tree, 3)
  // tree = insert(tree, 2)
  // tree = insert(tree, 1)


  // LR 型测试
  // var tree = new Node(8, null, null, 1)
  // tree = insert(tree, 9)
  // tree = insert(tree, 4)
  // tree = insert(tree, 3)
  // tree = insert(tree, 5)
  // tree = insert(tree, 6)


  // RL 型测试
  var tree = new Node(4, null, null, 1)
  tree = insert(tree, 3)
  tree = insert(tree, 8)
  tree = insert(tree, 9)
  tree = insert(tree, 5)
  tree = insert(tree, 6)
  console.log(tree);

  // console.log(tree);

  // insert(tree, 4)
  // insert(tree, 5)


  // console.log('插入后的树：', tree);


  // deleteNode(tree, 3)
  // deleteNode(tree, 4)

  // console.log('删除后的树：', tree);

  // clear(tree)

  // console.log(tree);


  var arr = []
  midOrder(tree, arr)

  console.log(arr);

  return arr
}

// 中序遍历：
function midOrder(root, arr) {
  if(!root) return
  midOrder(root.left, arr)
  if(root.val !== -1000) arr.push(root.val)
  midOrder(root.right, arr) 
}


test()