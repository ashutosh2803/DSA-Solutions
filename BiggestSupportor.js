function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let num = +input[line++];
        let largestOdd;
        console.log(largestOddFactor(num));
    }
}
const largestOddFactor = (n) => {
    let factors = [];
    let d = 2;
    while (n > 1) {
        while (n % d == 0) {
            factors.push(d);
            n = n / d;
        }
        d = d + 1;
    }
    return factors;
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    10
    4`);
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