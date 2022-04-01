

class Node:
    def __init__(self, data):
        self.data = data 
        self.left = None 
        self.right= None

    def __str__(self):
        return str(self.data)


class BinaryTree:
    def __init__(self, data = None):        
        if data:
            node = Node(data)
            self.root = node
        else:
            self.root = None

    # percurso em ordem simétrica
    def simetric_traversal(self, node=None):
        if node is None:
            node = self.root

        if node.left:            
            self.simetric_traversal(node_left)
        print(node, end='')    

        if node.right:
            self.simetric_traversal(node.right)
        print(node)



if __name__ == "__main__":
    tree = BinaryTree(7)
    tree.root.left = Node(18)
    tree.root.right = Node(14)

    print(tree.root)
    print(tree.root.right)
    print(tree.root.left)
    
    tree.simetric_traversal()