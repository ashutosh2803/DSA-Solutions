Array.prototype.top = function () {
	return this[this.length - 1];
}
function runProgram(input) {
	input = input.trim().split("\n");
	let size = +input[0];
	let arr = input[1].trim().split(" ").map(Number);
	let ans = [];
	let stack = [];
	for (let i = 0; i < size; i++) {
		if (i == 0) {
			ans.push(-1);
			stack.push(arr[i]);
			continue;
		}
		while (stack.top() >= arr[i] && stack.length != 0) {
			stack.pop();
		}
		if (stack.length == 0) {
			ans.push(-1);
			stack.push(arr[i]);
			continue;
		}

		ans.push(stack.top());
		stack.push(arr[i]);

	}
	let output = "";
	for (let i = 0; i < ans.length; i++){
		output += ans[i] + " "
	}
	console.log(output.trim());
}
if (process.env.USER === "ubuntu") {
	runProgram(`8
    39 27 11 4 24 32 32 1`);
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