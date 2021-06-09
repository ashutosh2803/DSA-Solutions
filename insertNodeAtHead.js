// Time Complexity : 
// Space Complexity : 

function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    if (tests) {
        let ll = new linkedList(+input[0]);
        for (let i = 1; i < tests; i++){
            let node1 = new node(+input[i])
            ll.insertNodeAtHead(node1);
        }
        ll.print();
    }
}
class node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList{
    constructor(head = null) {
        this.head = head;
    }
    print() {
        let node = this.head;
        if (node) {
            while (node) {
                console.log(node.data);
                node = node.next;
            }
        }
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
    insertNodeAtHead(node) {
        if (node) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }
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