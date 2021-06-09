function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[j++];
        let arr = input[j++].trim().split(" ").map(Number);
        console.log(recursiveSum(arr, size - 1));
    }
}
const recursiveSum = (arr, size) => {
    if (size == 0)
        return arr[size];
    else
        return (arr[size] + recursiveSum(arr, size - 1));
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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