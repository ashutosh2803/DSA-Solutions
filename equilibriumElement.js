function runProgram(input) {
	input = input.trim().split("\n");
	let size = +input.shift();
	let arr = input[0].trim().split(" ").map(Number);
	for (let i = 1; i < size - 1; i++){
		leftSum = traversalSum(0, i - 1, arr);
		rightSum = traversalSum(i + 1, size - 1, arr);
		if (leftSum == rightSum) {
			console.log(i + 1);
			return;
		}
	}
	console.log(-1);
}
const traversalSum = (start, end, arr) => {
	let sum = 0;
	for (let i = start; i <= end; i++){
		sum += arr[i];
	}
	return sum;
}
if (process.env.USERNAME === "ASHUTOSH") {
	runProgram(`5
	3 3 5 5 1`);
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