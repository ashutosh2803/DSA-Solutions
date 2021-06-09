function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    
    let n = input[0];
    let r = input[1];
    let result = gpRecursion(n, r);
    // console.log(result);
    console.log(result.toFixed(4));
}
const gpRecursion = (n, r) => {
    if (n == 0) {
        return 1
    }
    return  1 / Math.pow(r, n) + gpRecursion(n - 1, r);
}
if (process.env.USER === "ubuntu") {
	runProgram(`3 5`);
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