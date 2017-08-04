function inOrder(currentNode) {
  if(currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right) {
    inOrder(currentNode.right )
  }
}

function max(currentNode) {
  if(currentNode.right) {
    return max(currentNode.right)
  } else {
    return currentNode
  }
}

function min(currentNode) {
  if(currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode
  }
}
