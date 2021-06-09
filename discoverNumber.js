function runProgram(input) {
    input = input.trim().split("\n");
    let line = 0;
    let [size, queriesCount] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number).sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    });
    for (let i = 0; i < queriesCount; i++){
        let query = +input[line++];
        if (binarySearch(arr, size, query)) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}
const binarySearch = (arr, size, target) => {
    let low = 0;
    let high = size - 1;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (arr[middle] == target) {
            return true;
        } else if (arr[middle] < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return false;
}
if (process.env.USER === "ubuntu") {
	runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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