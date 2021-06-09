function runProgram(input) {
    const num = +input.trim();
    console.log(factorial(num))
}
const factorial = (num) => {
    if (num == 1)
        return 1
    else
        return num * factorial(num - 1);
}
if (process.env.USER === "ubuntu") {
	runProgram(`5`);
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