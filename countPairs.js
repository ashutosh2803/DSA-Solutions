function runProgram(input) {
    input = input.trim().split("\n");
    let [size, target] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let count = 0;
    for (let i = 0; i < size; i++){
        let sum = arr[i];
        for (let j = 0; j < size; j++){
            if (i != j) {
                sum += arr[j];
                if (sum == target) {
                    count++;
                }
                sum -= arr[j];
            }
        }
    }
    console.log(count / 2);
}
if (process.env.USERNAME === "ASHUTOSH") {
	runProgram(`5 9
    3 0 6 2 7`);
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