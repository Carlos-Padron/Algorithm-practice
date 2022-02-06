export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList {
  constructor(head) {
    this.head = head;
  }

  prependNode(node) {
    let head = this.head;
    head.prev = node;

    node.next = head;

    this.head = node;
  }

  appendNode(node) {
    let n = this.head;

    while (n.next != null) {
      n = n.next;
    }

    node.prev = n;
    n.next = node;
  }

  removeNode(data) {
    let n = this.head;

    if (n.data == data) {
      let newHead = n.next;
      newHead.prev = null;
      this.head = newHead;

      return;
    }

    while (n.next != null) {
      if (n.next.data == data) {
        let newNext = n.next.next;
        newNext.prev = n.next;
        n.next = newNext;
      }

      n = n.next;
    }
  }

  printDoublyLinkedList() {
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

  let doublyLinkedList = new DoublyLinkedList(mainNode);

  doublyLinkedList.appendNode(new Node(2));

  doublyLinkedList.appendNode(new Node(3));
  doublyLinkedList.appendNode(new Node(4));
  doublyLinkedList.appendNode(new Node(5));
  //console.log(doublyLinkedList);
  console.log("=== LinkedList ===");
  doublyLinkedList.printDoublyLinkedList();

  doublyLinkedList.removeNode(1);

  console.log("=== LinkedList ===");
  doublyLinkedList.printDoublyLinkedList();

  doublyLinkedList.removeNode(3);

  console.log("=== LinkedList ===");
  doublyLinkedList.printDoublyLinkedList();

  doublyLinkedList.prependNode(new Node(0));

  console.log("=== LinkedList ===");
  doublyLinkedList.printDoublyLinkedList();
}

main();
