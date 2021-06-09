function runProgram(input) {
    let num = +input.trim();
    console.log(countStairs(num));
}
const countStairs = (num) => {
    if (num < 0) {
        return 0;
    }
    if (num == 1 || num == 0) {
        return 1;
    }
    return countStairs(num - 1) + countStairs(num - 2) + countStairs(num - 3);
}
if (process.env.USER === "ubuntu") {
	runProgram(`4`);
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