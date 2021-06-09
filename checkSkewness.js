function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        let num = +input[i];
        let evenCount = 0;
        let oddCount = 0;
        for (let j = 1; j <= num; j++){
            if (num % j == 0) {
                if (j % 2 == 0) {
                    evenCount++;
                } else {
                    oddCount++;
                }
            }
        }
        if (evenCount == oddCount) {
            console.log("Not Skewed")
        } else if (evenCount > oddCount) {
            console.log("Even Skewed")
        } else {
            console.log("Odd Skewed")
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    4
    6
    11
    `);
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