function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[j++];
        let arr = input[j++].trim().split(" ").map(Number);
        arr.sort((a, b) => {
            if (a > b) {
                return -1;
            } else {
                return 1;
            }
        });
        console.log(largestX(size, arr));
    }
}
const largestX = (size, arr) => {
    let result;
    for (let i = 0; i < size; i++){
        for (let j = i + 1; j < size; j++){
            if (arr[j] == -(arr[i])) {
                result = arr[i];
                return result;
            }
        }
    }
    // return result;
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    5
    2 1 -1 -2 3
    6
    -3 2 -4 4 -2`);
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