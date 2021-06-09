function runProgram(input) {
    input = input.trim().split("\n");
    let original = input[1].trim();
    let upcoming = [];
    subsequence(original, 0, upcoming);
}
const subsequence = (original, index, upcoming) => {

    if (index == original.length) {
        console.log(upcoming.join(" "));
        return
    }
    subsequence(original, index + 1, upcoming);
    upcoming.push(original[index]);
    subsequence(original, index + 1, upcoming);
}
if (process.env.USER === "ubuntu") {
	runProgram(`4
    abcd`);
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