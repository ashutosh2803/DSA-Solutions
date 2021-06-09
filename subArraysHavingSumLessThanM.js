function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let [size, target] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        let freq = 0;
        let start = 0;
        let stop = 0;
        let sum = 0;
        sum += arr[0];
        while (start < size && stop < size) {
            if (sum < target) {
                stop++;
                if (stop < size) {
                    sum += arr[stop];
                }
                if (stop >= start) {
                    freq += stop - start;
                }
            } else {
                sum = sum - arr[start];
                start++;
            }
        }
        console.log(freq);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5 5
    1 5 1 3 2`);
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