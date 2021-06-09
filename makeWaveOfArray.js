function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    let arr = input[0].trim().split(" ").map(Number).sort((a, b) => a - b);
    // console.log(arr);
    let newArr = new Array(size);
    let even = 1;
    let odd = 0;
    for (let i = 0; i < size; i++){
        if (i % 2 == 0) {
            newArr[i] = arr[odd + 2];
        }
        if (i % 2 == 1) {
            newArr[i] = arr[even + 2];
        }
    }
    console.log(newArr);
}
// 1 2 3 4 5 6 7 8 9 10
// 2 1 4 3 6 5 8 7 10 9
if (process.env.USER === "ubuntu") {
	runProgram(`10
    9 8 4 10 3 6 5 7 1 2`);
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