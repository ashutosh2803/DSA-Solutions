function runProgram(input) {
	input = input.trim().split("\n");
	let tests = +input.shift();
	for (let i = 0; i < tests; i++){
		let num = +input[i];
		console.log(findSqrt());
	}
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
	4
	8`);
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