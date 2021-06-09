function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(productExceptSelf(arr).join(" "));
    }
}
const productExceptSelf = (arr) => {
    let left = new Array(arr.length);
    left[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        left[i] = left[i - 1] * arr[i - 1];
    }
    let right = new Array(arr.length);
    right[arr.length - 1] = 1;
    for (let i = arr.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * arr[i + 1];
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = left[i] * right[i];
    }
    return arr;
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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