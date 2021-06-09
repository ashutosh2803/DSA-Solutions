Array.prototype.top = function () {
	return this[this.length - 1];
}
function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[j++];
		let arr = input[j++].trim().split(" ").map(Number);
		let ans1 = leftRightTraversal(arr, size);
		console.log(ans1)
    }
}

const leftRightTraversal = (arr, size) => {
	let ans = [];
	let stack = [];
	for (let i = 0; i < size; i++){
		if (i == 0) {
			ans.push(-1);
			stack.push(i);
			continue;
		}
		while (stack.length != 0 && stack.top() < arr[i]) {
			stack.pop();
		}
		if (stack.length == 0) {
			ans.push(-1);
			continue;
		}
		ans.push(stack.top());
		stack.push(arr[i]);
	}
	return ans;
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5
    5 4 1 3 2`);
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