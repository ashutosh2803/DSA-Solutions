function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++) {
        if (checkPrime(+input[i])) {
            console.log("Yes")
        } else {
            console.log("No");
        }
    }
}
const checkPrime = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++){
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    } else {
        return false;
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`4
    1
    2
    3
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