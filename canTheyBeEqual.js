function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let str1 = input[line++].trim().split("").sort().join("");
        let str2 = input[line++].trim().split("").sort().join("");
        checkEqual(str1, str2) ? console.log("Yes") : console.log("No");
    }
}
const checkEqual = (str1, str2) => {
    return str1 === str2 ? true : false;
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    2
    ab
    ac
    3
    aba
    aab`);
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