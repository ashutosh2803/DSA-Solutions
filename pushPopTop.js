Array.prototype.top = function () {
    return this[this.length - 1];
}
function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let stack = [];
    for (let i = 0; i < tests; i++){
        let ele = input[i].trim().split(" ").map(Number);
        let ele1 = input[i].trim().split("")

        if (ele.length == 2) {
            if (ele[0] == 1) {
                stack.push(ele[1]);
            }
        }

        if (ele1 == 2) {
            if (stack.length == 0) {
                continue;
            }
            else {
                stack.pop()
            }
        }

        if (ele1 == 3) {
            if (stack.length == 0) {
                console.log("Empty!")
            } else {
                console.log(stack.top())
            }
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`6
    1 15
    1 20
    2
    3
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