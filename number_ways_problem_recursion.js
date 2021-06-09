function runProgram(input) {
    let steps = +input;
    console.log(ways(steps))
}
const ways = (n) => {
    if (n == 1)
        return 1
    if (n == 2)
        return 2
    if (n == 3)
        return 4

    return ways(n - 1) + ways(n - 2) + ways(n - 3)
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