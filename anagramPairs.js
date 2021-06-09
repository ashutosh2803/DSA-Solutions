function runProgram(input) {
    input = input.trim().split('\n');
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    5
    aaaaabbbbb
    baabbbbaaa
    aaaabbbbba
    xxxxxxxxxy
    yxxxxxxxxx
    2
    abcdefghij
    jighdefabc
    `);
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