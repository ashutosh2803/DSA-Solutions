Array.prototype.top = function () {
    return this[this.length - 1];
}
function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    let stack = [];
    let queue = [];

    for (let i = 0; i < size; i++){
        let ele = input[i].trim().split(" ").map(Number);
        let temp = input[i].trim().split("").map(Number);
        // console.log(ele)
        if (ele[0] == 1) {
            queue.push(ele[1])
        }
        if (ele[0] == 2) {
            stack.push(ele[1])
        }

        if (temp == 3) {
            if (queue.length == 0) {
                console.log(-1)
            } else {
                console.log(queue[0]);
            }
        }
        if (temp == 4) {
            if (stack.length == 0) {
                console.log(-1)
            } else {
                console.log(stack.top())
            }
        }
        if (temp == 5) {
            let temp = queue.shift();
            stack.push(temp);
        }
        
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
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