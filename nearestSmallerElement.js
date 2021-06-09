function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(arr);
    }
}
const leftTraversal = (arr, size) => {
    let stack = [];
    for (let i = 0; i < size; i++){
        
    }
}
const rightTraversal = (arr, size) => {
    let stack = [];
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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