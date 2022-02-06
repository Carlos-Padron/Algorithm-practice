export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class SinglyLinkedList {
  constructor(head) {
    this.head = head;
    this.size = 0;
  }

  prependNode(node) {
    let head = this.head;

    node.next = head;
    this.head = node;
    this.size++;
  }

  appendNode(node) {
    let n = this.head;

    while (n.next != null) {
      n = n.next;
    }

    let newNode = node;

    n.next = newNode;
    this.size++;
  }

  removeNode(data) {
    let n = this.head;

    if (n.data == data) {
      this.head = n.next;
      return;
    }

    while (n.next != null) {
      if (n.next.data == data) {
        n.next = n.next.next;
        this.size--;
        break;
      }
      n = n.next;
    }
  }

  insertNodeAtIndex(index, node) {
    if (index > this.size - 1 || index < 0) {
      return;
    }

    let counter = 0;
    let n = this.head;

    if (index == 0) {
      let nextNode = this.head;

      this.head = node;
      this.head.next = nextNode;
      this.size++;
      return;
    }

    while (counter != index - 1 && index < this.size - 1) {
      n = n.next;
      counter++;
    }

    let nextNode = n.next;

    node.next = nextNode;
    n.next = node;
    this.size++;
  }

  removeNodeAtIndex(index) {
    if (index > this.size - 1 || index < 0) {
      return;
    }

    let counter = 0;
    let n = this.head;

    if (index == 0) {
      this.head = n.next;
      this.size--;
      return;
    }

    while (counter != index - 1 && index < this.size - 1) {
      n = n.next;
      counter++;
    }

    n.next = n.next.next;
    this.size--;
  }

  printSinglyLinkedList() {
    let n = this.head;

    while (n.next != null) {
      console.log(n.data);
      n = n.next;
    }
    console.log(n.data);
  }

  removeAllDuplciatedNodes(data) {
    let hash = {};
    let n = this.head;
    let previuosNode = null;

    while (n != null) {
      if (hash[n.data] && hash[n.data] == data) {
        previuosNode.next = n.next;
        this.size--;
      } else {
        //Add node info to hash
        hash[n.data] = n.data;
        previuosNode = n;
      }
      n = n.next;
    }
  }

  printFromKToLast(k) {
    let n = this.head;
    let counter = 1;
    while (n != null) {
      if (counter >= k) {
        console.log(n.data);
      }

      counter++;
      n = n.next;
    }
  }

  deleteMiddleNode() {
    let length = this.getListLength();

    let index = parseInt(length / 2);

    this.removeNodeAtIndex(index);
  }

  getListLength() {
    let length = 0;
    let n = this.head;

    while (n.next != null) {
      n = n.next;
      length++;
    }
    // or
    //return this.size

    return length;
  }

  //Get last element and removes it
  pop() {}

  //Get the first element and removes it
  shift() {
    
  }



}

// function main() {
//   let mainNode = new Node(1);

//   let singlyLinkedList = new SinglyLinkedList(mainNode);

//   singlyLinkedList.appendNode(new Node(2));

//   singlyLinkedList.appendNode(new Node(3));
//   singlyLinkedList.appendNode(new Node(4));
//   singlyLinkedList.appendNode(new Node(5));

//   singlyLinkedList.removeNode(1);

//   singlyLinkedList.removeNode(3);

//   singlyLinkedList.prependNode(new Node(0));

//   singlyLinkedList.insertNodeAtIndex(0, new Node(7));
//   singlyLinkedList.removeNodeAtIndex(0);
//   singlyLinkedList.removeNodeAtIndex(1);

//   singlyLinkedList.printSinglyLinkedList();
// }

//main();
