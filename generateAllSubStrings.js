function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let a = 0; a < tests; a++){
        let size = +input[line++];
        let str = input[line++].trim();
        for (i = 0; i < size; i++) {
            for (j = i; j <= size; j++) {
                let substr = str.slice(i, j);
                if (substr.length) {
                    console.log(substr);
                }
            };
          };
    }
}
if (process.env.USER === "ubuntu") {
    runProgram(`1
    4
    aman`);
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