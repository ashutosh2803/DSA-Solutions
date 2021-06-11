function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
        let minEven = arr[size - 1];
        let maxOdd = arr[0];
        for (let j = 0; j < size; j++){
            if (arr[j] % 2 == 0) {
                if (minEven > arr[j]) {
                    minEven = arr[j];
                }
            } else {
                if (maxOdd < arr[j]) {
                    maxOdd = arr[j];
                }
            }
        }
        // console.log(maxOdd);
        console.log(maxOdd - minEven);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5
    3 1 2 4 5`);
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