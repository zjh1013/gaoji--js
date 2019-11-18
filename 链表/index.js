const LinkedList = function(element) {
  this.element = element;
  this.next = undefined;
};
class MyList {
  constructor() {
    this.head = new LinkedList("head");
    this.size = 0;
  }
  add(element) {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new LinkedList(element);
    this.size++;
  }
  display() {
      let = "";
      let current = this.head;
      while(!(current.next == null)){
          temp += " " + current.next.element;
          current = current.next;
      }
      console.log(temp)
  }
}

const myList = new MyList();
mylist.add("aaa");
