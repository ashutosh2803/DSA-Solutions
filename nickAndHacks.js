function runProgram(input) {
    input = input.trim().split("\n").map(Number);
    let tests = +input.shift();
    let n = 1;
    for (let i = 0; i < tests; i++){
        if (check(input[i], n)) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }

}
const check = (r, n) => {
    if (r == n) {
        return true
    };
    if (n > r) {
        return false
    };
    if (check(r, n * 10)) {
        return true   
    };
    if (check(r, n * 20)) {
        return true
    }

    return false
}
if (process.env.USER === "ubuntu") {
	runProgram(`5
    1
    2
    10
    25
    200`);
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
