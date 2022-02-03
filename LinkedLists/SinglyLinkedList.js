class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head) {
    this.head = head;
  }

  prependNode(node) {
    let head = this.head;

    node.next = head;
    this.head = node;
  }

  appendNode(node) {
    let n = this.head;

    while (n.next != null) {
      n = n.next;
    }

    let newNode = node;

    n.next = newNode;
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
        break;
      }
      n = n.next;
    }
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
  //console.log(singlyLinkedList);
  console.log("=== LinkedList ===");
  singlyLinkedList.printSinglyLinkedList();

  singlyLinkedList.removeNode(1);

  console.log("=== LinkedList ===");
  singlyLinkedList.printSinglyLinkedList();

  singlyLinkedList.removeNode(3);

  console.log("=== LinkedList ===");
  singlyLinkedList.printSinglyLinkedList();


  singlyLinkedList.prependNode(new Node(0));

  console.log("=== LinkedList ===");
  singlyLinkedList.printSinglyLinkedList();

}

main();
