// Time Complexity : O(2^n)
// Space Complexity : 0(k)

function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    let index = 1;
    let n = input[0];
    let k = input[1];
    let current = 1;
    let arr = [];
    gifts(n, k, current, arr);
}
const gifts = (n,k, current, arr) => {
    if (arr.length == k) {
        console.log(arr.join(" "));
        return
    }
    for (let i = current; i <= n; i++){
        arr.push(i);
        gifts(n, k, i + 1, arr);
        arr.pop();
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`4 2`);
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