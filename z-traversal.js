function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
	let line = 0;
    for (let i = 0; i < tests; i++){
		let size = +input[line++];
		let arr = [];
		for (let j = 0; j < size; j++){
			arr.push(input[line++].trim().split(" ").map(Number));
		}
		// console.log(arr);
		let result = [];
		for (let j = 0; j < arr[0].length - 1; j++){
			result.push(arr[0][j]);
		}
		for (let j = 0; j < size; j++){
			for (let k = 0; k < size; k++){
				if ((j + k) == size - 1) {
					result.push(arr[j][k]);
				}
			}
		}
		for (let j = 1; j < arr[size - 1].length; j++){
			result.push(arr[size - 1][j]);
		}
		console.log(result.join(" "));
    }
}
// 1 2 3 5 7 8 9
if (process.env.USERNAME === "ASHUTOSH") {
	runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9
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