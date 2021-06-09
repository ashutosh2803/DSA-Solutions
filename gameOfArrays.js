function runProgram(input) {
    input = input.trim().split("\n");
    let [size, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let mod = k % size;
    for (let i = 0; i < mod; i++){
        let temp = arr[0];
        for (let j = 0; j < size - 1; j++){
            arr[j] = arr[j + 1];
        }
        arr[size - 1] = temp;
    }
    console.log(arr.join(" "));
}
if (process.env.USER === "ubuntu") {
	runProgram(`6 4
    1 2 5 4 0 6`);
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