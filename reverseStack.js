function runProgram(input) {
    input = input.trim().split("\n");
    let stack = [];
    for (let i = 0; i < input.length; i++){
        if (+input[i] != -1) {
            stack.push(+input[i]);
        }
    }
    console.log(reverseStack(stack, stack.length - 1));
    // for (let i = 0; i < stack.length; i++){
    //     console.log(stack[i]);
    // }
}
const reverseStack = (stack, size) => {
    let temp = [];
    if (size == 0) {
        return stack[0];
    }
    else {
        console.log(stack[size]);
        return reverseStack(stack, size - 1);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    2
    3
    4
    -1`);
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