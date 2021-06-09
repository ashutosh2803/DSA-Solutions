function runProgram(input) {
    input = input.trim().split('\n');
    let tests = +input.shift();
    let line = 0;
    for (let j = 0; j < tests; j++) {
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number).sort((a, b) => {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        let sumArr = arr.reduce((a, b) => a + b);
        let sum = 0;
        for (let i = 1; i <= size; i++){
            sum += i;
        }
        let repeated;
        for (let i = 0; i < size; i++){
            if (arr[i] == arr[i + 1]) {
                repeated = arr[i];
                sumArr -= repeated;
            }
        }
        let missing = sum - sumArr;
        console.log(missing + " " + repeated);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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