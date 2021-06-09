// Time Complexity : O(2^n)
// Space Complexity : O(n)

function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
	let arr = input[0].trim().split(" ").map(Number);
    console.log(solve(index=0, arr, count=0, sum=0, size))
}
const solve = (index, arr, count, sum, size) => {
	if (index === size) {
		if (sum % 2 == 1 && sum >= 0) {
			return count++;
		}
	}

	solve(index + 1, arr, count, sum + arr[index], size)
	solve(index + 1, arr, count, sum, size)

	return count;
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    1 2 3`);
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