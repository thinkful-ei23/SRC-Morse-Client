class _Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(item) {
		this.head = new _Node(item, this.head);
	}

	insertLast(item) {
		if (this.head === null) {
			this.insertFirst(item);
		} else {
			let tempNode = this.head;
			while (tempNode.next !== null) {
				tempNode = tempNode.next;
			}
			tempNode.next = new _Node(item, null);
		}
	}

	find(item) {
		//start at the head
		let currNode = this.head;
		//if the list is empty
		if (!this.head) {
			return null;
		}
		//Check for the item
		while (currNode.value !== item) {
			//return null if end of the list
			// and the item is not on the list
			if (currNode.next === null) {
				return null;
			} else {
				//otherwise keep looking
				currNode = currNode.next;
			}
		}
		//found it
		return currNode;
	}
}
