function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let vaccines = input[0].trim().split(" ").map(Number)
    let patients = input[1].trim().split(" ").map(Number)
    let flag = [];
    for (let i = 0; i < tests; i++){
        if (vaccines[i] >= patients[i]) {
            flag.push(true);
        }
        else {
            flag.push(false);
        }
    }
    // console.log(flag);
    for (let i = 0; i < flag.length; i++){
        if (flag[i] == false) {
            console.log("No");
            return
        }
    }
    console.log("Yes");
}
if (process.env.USER === "ubuntu") {
	runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`);
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