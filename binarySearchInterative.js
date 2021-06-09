function runProgram(input) {
    input = input.trim().split("\n");
    let [size, target] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number).sort((a, b) => {
        if (a > b)
            return 1
        else
            return -1
    })
    console.log(binarySearch(arr, size, target));
}
const binarySearch = (arr, size, target) => {
    let low = 0;
    let high = size - 1;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (arr[middle] == target) {
            return 1;
        } else if (arr[middle] < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return -1;
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