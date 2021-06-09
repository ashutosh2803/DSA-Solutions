function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let largest = arr[1];
        let largestIndex = 1;
        for (let j = 1; j < size - 1; j++){
            if (largest < arr[j]) {
                largest = arr[j];
                largestIndex = j;
            }
        }
        console.log(largestIndex);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    3
    10 20 11
    5
    1 3 6 5 4`);
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