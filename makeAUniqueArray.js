function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    let arr = input[0].trim().split(" ").map(Number);
    let obj = {};
    for (let i = 0; i < size; i++){
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    let result = "";
    for (item in obj) {
        result += item + " "
    }
    console.log(result.trim());
}
if (process.env.USER === "ubuntu") {
	runProgram(`5
    2 2 2 7 9
    `);
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