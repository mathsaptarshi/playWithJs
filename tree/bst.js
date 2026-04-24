class Node{
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BSTree{
  constructor(){
    this.root = null;
  }

  isTreeEmpty(){
    return this.root == null;
  }
  
  createTree(val){
    let newNode = new Node(val);
    if(this.isTreeEmpty()){
      this.root = newNode;
    }
    else{
      this.insertNode(this.root,newNode)
    }
  }

  insertNode(root,newNode){
    if(root.value > newNode.value){
      if(root.left === null){
        root.left = newNode
      }
      else{
        this.insertNode(root.left,newNode)
      }
    }
    else{
      if(root.right === null){
        root.right = newNode;
      }
      else{
        this.insertNode(root.right,newNode)
      }
    }
  }

}

let bst = new BSTree();

bst.createTree(20);
bst.createTree(10);
bst.createTree(5);
bst.createTree(11);
bst.createTree(30);
bst.createTree(3);
bst.createTree(40);
bst.createTree(23);
console.log(bst);