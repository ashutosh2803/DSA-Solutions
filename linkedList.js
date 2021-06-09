// Time Complexity : O(1)
// Space Complexity : 0(n)

function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let ll = new linkedList();
    for (let i = 0; i < tests; i++){
        let node1 = new node(+input[i]);
        ll.insertNodeAtHead(node1);
    }
}
class node{
    constructor(data) {
        this.data = data;
        this.head = null;
    }
}
class linkedList{
    constructor(head = null) {
        this.head = head;
    }
    insertNodeAtHead(node) {
        if (node) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }
        this.print();
    }
    print() {
        let node = this.head;
        let result = "";
        if (node) {
            while (node) {
                result += node.data + " ";
                node = node.next;
            }
        }
        console.log(result.trim());
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    clear() {
        this.head = null;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
    getFirst() {
        return this.head;
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    1
    2
    3`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}