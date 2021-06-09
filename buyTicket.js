function runProgram(input) {
    input = input.trim().split("\n")
    let size = +input.shift();
    let queue = [];
    for (let i = 0; i < size; i++){
        let ele = input[i].trim().split(" ")
        let temp = input[i].trim().split("").map(Number);
        if (ele[0] == "E") {
            queue.push(ele[1]);
            console.log(queue.length);
        }
        if (ele == "D") {
            if (queue.length == 0) {
                console.log("-1 0");
            } else {
                let temp = queue.shift();
                console.log(temp + " " + queue.length)
            }
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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