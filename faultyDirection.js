function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[j++];
        let str = input[j++].trim().split("")
        console.log(str)
        let x_axis = 0;
        let y_axis = 0;
        for (let k = 0; k < size; k++){
            if (str[i] == "L") {
                x_axis--;
            }
            if (str[i] == "R") {
                x_axis++;
            }
            if (str[i] == "U") {
                y_axis++;
            }
            if (str[i] == "D") {
                y_axis--;
            }
        }
        if (x_axis == 0 && y_axis == 0) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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