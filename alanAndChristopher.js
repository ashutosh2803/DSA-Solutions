function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let str = input[line++].trim();
        if (str.length == 1) {
            if (str[0] === '#') {
                console.log("");
                return
            }
        }
        console.log(filterStr(str).join(""));
    }
}
const filterStr = (str) => {
    let result = [];
    if (str.length == 1) {
        if (str === '#') {
            result.push("");
            return result;
        }
    }
    for (let i = 0; i < str.length; i++){
        if (str[i] === '#') {
            result.pop()
        } else {
            result.push(str[i]);
        }
    }
    return result;
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    ab#d
    a#bc`);
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