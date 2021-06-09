function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let obj = {};
        for (let i = 0; i < size; i++){
            if (obj[arr[i]] === undefined) {
                obj[arr[i]] = 1;
            } else {
                obj[arr[i]]++;
            }
        }
        let smallest = obj[1];
        for (item in obj) {
            if (obj[item] == 0) {
                console.log(0);
                return
            }
            if (smallest > obj[item]) {
                smallest = obj[item];
            }
        }
        console.log(smallest * 2);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5
    1 0 0 1 0`);
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