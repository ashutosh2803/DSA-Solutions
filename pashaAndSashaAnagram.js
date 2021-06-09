function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let str1 = input[line++].trim().split("");
        let str2 = input[line++].trim().split("");
        str1.sort();
        str2.sort();
        if (str1.join("") === str2.join("")) {
            console.log("True");
        } else {
            console.log("False");
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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