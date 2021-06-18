function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let countOne = 0;
        let countZero = 0;
        for (let j = 0; j < size; j++){
            switch (arr[j]) {
                case 0: countZero++;
                    break;
                case 1: countOne++;
                    break;
                default: break;
            }
        }
        if (countOne > countZero) {
            console.log(countZero * 2);
        } else {
            console.log(countOne * 2);
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5
    1 0 0 1 0`);
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