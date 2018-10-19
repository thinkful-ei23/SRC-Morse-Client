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

const QLL = new LinkedList();

//answer question
let M = 1;

//if answer is correct:
function algorithmCorrect(list) {
	console.log('starts off:', JSON.stringify(list));
	currNode = list.head;
	nextNode = list.head.next;
	thirdNode = nextNode.next;
	// console.log('thisQ:', currNode);
	// console.log('nextQ:', nextNode);
	// console.log(thirdNode);
	M = M * 2;
	currNode.next = currNode.next + M;
	// console.log(JSON.stringify(currNode.next));
	list.head = nextNode;
	currNode.next = thirdNode.next;
	thirdNode.next = currNode;
	console.log('ends here:', JSON.stringify(list));
}

function main() {
	QLL.insertLast({
		question: '...---...',
		answer: 'SOS',
		memoryStrength: 1,
		next: 1
	});
	QLL.insertLast({
		question: '-- --- -. --. ---',
		answer: 'mongo',
		memoryStrength: 1,
		next: 2
	});
	QLL.insertLast({
		question: '.--. --- ... - --. .-. . ...',
		answer: 'postgres',
		memoryStrength: 1,
		next: 3
	});
	QLL.insertLast({
		question: '-- --- -. --. --- --- ... .',
		answer: 'mongoose',
		memoryStrength: 1,
		next: 4
	});
	QLL.insertLast({
		question: '... --.- .-..',
		answer: 'sql',
		memoryStrength: 1,
		next: null
	});

	// console.log(JSON.stringify(QLL));
}

main();
algorithmCorrect(QLL);
