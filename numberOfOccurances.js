function runProgram(input) {
    input = input.trim().split("\n");
    let [size, target] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let count = 0;
    let start = 0;
    let end = size - 1;
    console.log(binarySearch(arr, start, end, target, count));
}
const binarySearch = (arr, start, end, target, count) => {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] == target)
        count++;
    if (arr[middle] > target)
        return binarySearch(arr, start, middle - 1, target, count);
    if (arr[middle] < target)
        return binarySearch(arr, middle + 1, end, target, count);
}
if (process.env.USER === "ubuntu") {
	runProgram(`6 3
    2 3 3 3 6 9`);
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