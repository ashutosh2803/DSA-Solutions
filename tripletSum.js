function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        for (let j = 0; j < size; j++){
            let sum = arr[j];
            for (let k = 0; k < size; k++){
                if (j != k) {
                    sum += arr[k];
                    for (let m = 0; m < size; m++){
                        
                    }
                }
            }
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5
    1 3 2 4 5`);
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