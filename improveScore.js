function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let [size, target] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(alterArr(arr, size, target));
    }
}
const alterArr = (arr, size, target) => {
    let sum = 0;
    for (let i = 0; i < size; i++){
        sum += arr[i];
    }
    return Math.min(sum, target);
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    4 10
    1 2 3 4
    4 5
    1 2 3 4`);
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