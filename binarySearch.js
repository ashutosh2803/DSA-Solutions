function runProgram(input) {
    input = input.trim().split("\n");
    let [size, target] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number).sort((a, b) => {
        if (a > b)
            return 1
        else
            return -1
    });
    let start = 0;
    let end = size - 1;
    if (binarySearch(arr, start, end, target)) {
        console.log(1);
    } else {
        console.log(-1);
    }
}
const binarySearch = (arr, start, end, target) => {
    let middle = Math.floor(start + end / 2);
    if (start > end)
        return false;
    if (arr[middle] == target)
        return true;
    if (arr[middle] > target)
        return binarySearch(arr, start, middle - 1, target);
    if (arr[middle] < target)
        return binarySearch(arr, middle + 1, end, target);
}
if (process.env.USER === "ubuntu") {
	runProgram(`5 0
    2 -2 0 3 4`);
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