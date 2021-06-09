function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    
    for (let i = 0; i < tests; i++){
        let count = 0;
        let size = +input[j++]
        let arr = input[j++].trim().split(" ").map(Number);
        for (let k = 0; k < size; k++){
            for (let m = k + 1; m < size; m++){
                if (k != m) {
                    if ((2 * arr[k]) == (3 * arr[m])) {
                        count++;
                    }
                }
            }
        }
        console.log(count);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    6
    6 6 6 4 4 4
    4
    0 0 0 0`);
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