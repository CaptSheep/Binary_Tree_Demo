class BiNode<B> {
    data: B
    rightNode: BiNode<B> | null
    leftNode: BiNode<B> | null

    constructor(data: B) {
        this.data = data
        this.rightNode = null;
        this.leftNode = null
    }

}

class BiTree<B> {
    root: BiNode<B> | null
    totalNode: number

    constructor() {
        this.root = null
        this.totalNode = 0
    }

    addElement(element: B) {
        if(!this.root){
            this.root = new BiNode(element)
            this.totalNode++
        }
        else {
            let newNode = new BiNode(element)
            let currentNode = this.root
            while (currentNode){
                if(newNode.data === currentNode.data){
                    throw new Error('Node data existed')
                }
                if(currentNode.data < element){
                    if(!currentNode.rightNode){
                        currentNode.rightNode = newNode
                        break
                    }
                    currentNode = currentNode.rightNode
                }
                else if(currentNode.data > element){
                    if(!currentNode.leftNode){
                        currentNode.leftNode = newNode
                        break;
                    }
                    currentNode = currentNode.leftNode
                }
            }
            this.totalNode++
            return currentNode
        }
    }
    searchValue(value){
        let currentNode = this.root
        while (currentNode){
            if(currentNode.data === value){
                return currentNode
            }
            if(value < currentNode.data){
                currentNode = currentNode.leftNode

            }
            else {
                currentNode = currentNode.rightNode
            }
        }
        console.log('Can not find the node with this value')
        return null
    }
}

let biTree = new BiTree()
biTree.addElement(10)
biTree.addElement(12)
biTree.addElement(11)
biTree.addElement(15)
// biTree.addElement(15)
biTree.addElement(3)
biTree.addElement(4)
biTree.addElement(2)
biTree.addElement(1)
console.log(biTree)
console.log(biTree.searchValue(13))