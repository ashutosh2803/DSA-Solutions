function runProgram(input) {
    let num = +input;
    let result = logFactorial(num)
    console.log((Math.round(result * 10000)) / 10000);
}
const logFactorial = (num) => {
    if (num == 1) {
        return 0;
    }
    return Math.log(num) + logFactorial(num - 1);
}
if (process.env.USER === "ubuntu") {
	runProgram(`3`);
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