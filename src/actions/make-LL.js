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

export const QLL = new LinkedList();

// const array = [
// 	{
// 		memoryStrength: 1,
// 		points: 0,
// 		question: '...---...',
// 		answer: 'SOS',
// 		next: 1
// 	},
// 	{ memoryStrength: 1, points: 0, question: '...', answer: 'S', next: 1 },
// 	{ memoryStrength: 1, points: 0, question: '---', answer: 'O', next: 1 }
// ];

// function makeList(list = QLL, array) {
// 	array.map(position => {
// 		list.insertLast(position);
// 	});
// 	console.log(list);
// 	return list;
// }

// function Next(list) {
// 	currNode = list.head;
// 	nextNode = list.head.next;
// 	// console.log('current node:', currNode);
// 	// console.log('next question:', nextNode);
// 	// console.log('third node:', nextNode.next);
// 	// // let newNode = currNode;
// 	currNode.next = nextNode.next;
// 	nextNode.next = currNode;
// 	list.head = nextNode;
// 	console.log('nexted', list);
// console.log(currNode.next);
// }

// makeList(QLL, array);
// Next(QLL);
