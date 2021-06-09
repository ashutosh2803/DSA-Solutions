// Time Complexity : O(2^n)
// Space Complexity : O(1)

function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let capacity = +input[j++];
        console.log(milkman(capacity))
    }
}
const milkman = (capacity) => {
    if (capacity == 0)
        return 1
    if (capacity < 0)
        return 0
    return milkman(capacity - 4) + milkman(capacity - 8);
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    12`);
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