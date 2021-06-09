function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let str = input[line++].trim().split("");
        let chars = false;
        let numbers = false;
        for (let j = 0; j < size; j++){
            if (isNumber(str[j])) {
                numbers = true;
            } else {
                chars = true;
            }
        }
        if (chars == true && numbers == false) {
            console.log("chars");
        }
        if (chars == false && numbers == true) {
            console.log("numbers");
        }
        if (chars == true && numbers == true) {
            console.log("alphanumeric");
        }
    }
}
const isNumber = (ele) => {
    if (ele == 0 || ele == 1 || ele == 2 || ele == 3 || ele == 4 || ele == 5 || ele == 6 || ele == 7 || ele == 8 || ele == 9) {
        return true;
    }
    return false;
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    5
    ab2cd
    5
    acfgh
    3
    123`);
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