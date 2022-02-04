class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
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

    if (index > this.size - 1) {
      return;
    }

    let counter = 0;
    let n = this.head;

    while (counter != index - 1 && index < this.size - 1) {
      n = n.next;
      counter++;
    }

    let nextNode = n.next;

    node.next = nextNode;
    n.next = node;
  }

  printSinglyLinkedList() {
    let n = this.head;

    while (n.next != null) {
      console.log(n.data);
      n = n.next;
    }
    console.log(n.data);
  }
}

function main() {
  let mainNode = new Node(1);

  let singlyLinkedList = new SinglyLinkedList(mainNode);

  singlyLinkedList.appendNode(new Node(2));

  singlyLinkedList.appendNode(new Node(3));
  singlyLinkedList.appendNode(new Node(4));
  singlyLinkedList.appendNode(new Node(5));

  singlyLinkedList.removeNode(1);

  singlyLinkedList.removeNode(3);

  singlyLinkedList.prependNode(new Node(0));

  singlyLinkedList.insertNodeAtIndex(2, new Node(7));

  singlyLinkedList.printSinglyLinkedList();
}

main();
