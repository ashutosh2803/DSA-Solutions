function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    for (let i = 0; i < size; i++){
        console.log(input[i].trim().split(" ").map(Number).reverse().join(" "));
    }
}
if (process.env.USERNAME === "ASHUTOSH") {
	runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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