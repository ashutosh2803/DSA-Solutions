function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let size = input[j++].trim();
        let arr = input[j++].trim().split(" ").map(Number);
        console.log(sumRecursion(arr, size - 1));
    }
}
const sumRecursion = (arr, size) => {
    if (size == 1) {
        return Math.abs(arr[size] - arr[size - 1]);
    }
    let result = Math.abs(arr[size] - arr[size - 1])
    return (result + sumRecursion(arr, size - 1));

}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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