function runProgram(input) {
    let str = input.trim();
    console.log(recursionLength(str));
}
const recursionLength = (str) => {
    if (str.length == 0)
        return 0;
    else
    return (1 + recursionLength(str.substring(1)));
}
if (process.env.USER === "ubuntu") {
	runProgram(`masaischool`);
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