function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(binarySearch(arr, size));
    }
}
const binarySearch = (arr, size) => {
    let low = 0;
    let high = size - 1;
    let result = -1;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (arr[middle] == 1) {
            result = middle;
            high = middle - 1;
        }
        else if (arr[middle] > 1) {
            high = middle - 1;
        }
        else {
            low = middle + 1;
        }
    }
    return result;
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    4
    0 0 0 1 
    1
    1`);
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