function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[j++];
        let str = input[j++].trim().split(" ").map(Number);
        if (palindromeCheck(size, str)) {
            console.log("Possible!");
        } else {
            console.log("Not Possible!");
        }
    }
}
const palindromeCheck = (size, str) => {
    let obj = {};
    for (let i = 0; i < size; i++){
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    for (const item in obj) {
        if (obj[item] != 2) {
            return false
        }
    }
    return true;
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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