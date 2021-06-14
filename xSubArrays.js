function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++) {
        let [size, K, X] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
        let count = 0;
        let obj = {};
        for (let j = 0; j < size; j++){
            if (obj[arr[j]] == undefined) {
                obj[arr[j]] = 1;
            } else {
                obj[arr[j]]++;
            }
        }
        let newArr = Object.keys(obj).filter((element) => element <= K);
        console.log(newArr);
    }
}
// 1 1 2 3 5
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5 3 2
    1 3 2 5 1`);
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