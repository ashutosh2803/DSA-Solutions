function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input.trim().split(" ").map(Number).sort((a, b) => a - b);
        let product = [];
        for (let j = 0; j < size; j++){
            if (arr[j] > 0) {
                let temp = arr[j];
                for (let k = j + 1; k < size; k++){
                    temp *= arr[k];
                }
            }
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    3
    -3 0 -2
    4
    4 5 -1 2`);
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