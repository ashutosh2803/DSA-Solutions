function runProgram(input) {
    let num = +input;
    let result = "";
    for (let i = 0; i < num; i++) {
        let count = 0;
        for (let j = 0; j < num - i; j++) {
            result += "* ";
            count++;
        }
        for (let k = 0; k < num - count; k++){
            result += " ";
        }
        result += "\n";
    }
    console.log(result.trim());
}
if (process.env.USER === "ubuntu") {
	runProgram(`5`);
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