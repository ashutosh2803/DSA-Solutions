function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
        let zeroArr = [];
        let result = [];
        for (let j = 0; j < size; j++){
            if (arr[j] == 0) {
                zeroArr.push(arr[j]);
            } else {
                result.push(arr[j]);
            }
        }
        let finalResult = [];
        let temp = result.shift();
        finalResult = [temp, ...zeroArr, ...result];
        console.log(finalResult.join(""));
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    4
    2 1 0 0
    4
    1 4 2 3
    4
    5 2 3 2`);
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