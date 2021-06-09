Array.prototype.top = function () {
	return this[this.length - 1];
}
function runProgram(input) {
	input = input.trim().split("\n");
    let size = +input.shift();
    let package = [];
    for (let i = 0; i < size; i++){
        let ele = input[i].trim().split(" ").map(Number);
        let temp = input[i].trim().split("").map(Number);
        if (ele[0] == 2) {
            package.push(ele[1]);
        }
        if (temp == 1) {
            if (package.length == 0) {
                console.log("No Food");
            } else {
                console.log(package.pop());
            }
        }
    }

}
if (process.env.USER === "ubuntu") {
	runProgram(`6
            1
            2 5
            2 7
            2 9
            1
            1`);
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