function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[j++];
        let arr = input[j++].trim().split(" ").map(Number);

        let stack = [];
        let res = [];
        for (let k = size - 1; k >= 0; k--){
            while (stack.length !== 0 && arr[k] >= stack[stack.length - 1]) {
                stack.pop();
            }
            if (stack.length !== 0) {
                let top = stack[stack.length - 1];
                if (top % 2 === 0) {
                    res.push(arr[k]);
                }
            }
            stack.push(arr[k]);
        }
        const result = res.reduce((a, b) => a + b, 0);
        console.log(result)
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    5
    2 3 5 8 3`);
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