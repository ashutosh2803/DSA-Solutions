function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let [size, target] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(suchPairs(arr, size, target));
    }
}
const suchPairs = (arr, size, target) => {
    let obj = {};
    for (let i = 0; i < size; i++){
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    for (item1 in obj) {
        let sum = item1;
        for (item2 in obj) {
            if (item1 != item2) {
                sum += item2;
            }
            if (sum == target) {
                return 1;
            }
        }
    }
    return -1;
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5 2
    3 4 0 2 7`);
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