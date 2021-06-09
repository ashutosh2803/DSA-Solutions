Array.prototype.top = function () {
    return this[this.length - 1];
}
function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let minStack = [];
    let stack = [];
    let arr = [];
    for (let i = 1; i <= size; i++){
        stack.push(input[i].trim().split(" "))
    }
    let cap = stack.length;
    // console.log(cap)
    for (let i = 0; i < cap; i++){
        if (stack[i].length == 2) {
            if (minStack.length == 0) {
                arr.push(Number(stack[i][1]))
                minStack.push(Number(stack[i][1]));
            } else {
                arr.push(Number(stack[i][1]))
                if (minStack.top() > Number(stack[i][1])) {
                    minStack.push(Number(stack[i][1]))
                } else {
                    let temp = minStack.top()
                    minStack.push(temp);
                }
           }
        } else {
            if (stack[i] == "MIN") {
                if (minStack.length == 0) {
                    console.log("EMPTY")
                } else {
                    let temp = minStack.top();
                    console.log(temp);
                }
            }
            if (stack[i] == "POP") {
                if (arr.length == 0) {
                    console.log("EMPTY")
                } else {
                    arr.pop()
                    minStack.pop();
                }
            }
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`11
    PUSH 5
    PUSH 7
    PUSH 3
    PUSH 8
    PUSH 10
    MIN
    POP
    POP
    MIN
    POP
    MIN`);
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