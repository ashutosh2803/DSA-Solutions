function runProgram(input) {
    input = input.trim().split("\n")
    let size = +input[0]
    let arr = input[1].trim().split(" ").map(Number);
    let largestNumber = -1;
    let result = [];
    for (let i = size - 1; i >= 0; i--){
        if (arr[i] >= largestNumber) {
            result.push(arr[i])
            largestNumber = arr[i]
        }
    }
    let output = "";
    let cap = result.length - 1;
    for (let i = cap; i >= 0; i--){
        output += result[i] + " "
    }
    console.log(output.trim());
}
if (process.env.USER === "ubuntu") {
	runProgram(`6
    16 17 4 3 5 2`);
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