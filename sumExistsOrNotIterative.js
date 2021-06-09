function runProgram(input) {
	input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let target = +input[2];

    for (let i = 0; i < size; i++){
        let sum = 0;
        for (let j = i; j < size; j++){
            sum += arr[j];

            if (sum == target) {
                console.log("yes");
                return
            }
        }
    }
    console.log("no");
}
if (process.env.USER === "ubuntu") {
	runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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