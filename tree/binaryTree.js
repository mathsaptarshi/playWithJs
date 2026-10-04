class Node{
  constructor(val){
    this.value = val;
    this.left = null;
    this.righT = null;
  }
}

class BinaryTree{
  constructor(root){
    this.root = null;
  }

  ç(){
    return this.root == null;
  }

  createTree(val){
    let newNode = new Node(val);
    // if(root.value)
  }

}