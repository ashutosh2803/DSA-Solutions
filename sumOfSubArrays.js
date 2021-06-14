function runProgram(input) {
    input = input.trim().split("\n");
    let line = 0;
    let size = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let queriesCount = +input[line++];
    for (let i = 0; i < queriesCount.length; i++){
        let [low, high] = input[line++].trim().split(" ").map(Number);
        
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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