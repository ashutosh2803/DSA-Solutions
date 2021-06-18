function runProgram(input) {
    let [a, b, c, L, R] = input.trim().split(" ").map(Number);
    let results = [];
    for (let X = L; X <= R; X++){
        results.push((a * (X * X)) + (b * X) + c);
    }
    // console.log(results);
    console.log(results.reduce((a, c) => a * c));
}
// ax^2 + bx + c
if (process.env.USER === "ubuntu") {
	runProgram(`-1 3 8 -2 2`);
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