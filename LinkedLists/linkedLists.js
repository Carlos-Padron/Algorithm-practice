import SinglyLinkedList, { Node } from "./SinglyLinkedList.mjs";

let node = new Node(1);
let ll = new SinglyLinkedList(node);
ll.appendNode(new Node(2));
ll.appendNode(new Node(6));
ll.appendNode(new Node(3));
ll.appendNode(new Node(9));
ll.appendNode(new Node(5));
ll.appendNode(new Node(1));
ll.appendNode(new Node(4));
ll.appendNode(new Node(4));

//ll.removeAllDuplciatedNodes(2)
//ll.printFromKToLast(3)
ll.deleteMiddleNode()

//ll.printSinglyLinkedList()


