function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        let num = +input[i];
        console.log(squareRoot(num));
    }
}
const squareRoot = (num) => {
    if (num < 2) {
        return num;
    }
    let result;
    let start = 1;
    let end = num / 2;
    while (start <= end) {
        let middle = start + (start + end) / 2;
        let sqr = middle * middle;
        if (sqr == num)
            return middle;
        else if (sqr < num) {
            start = middle + 1;
            result = middle;
        } else {
            end = middle - 1;
        }
    }
  	resultArr = String(result).split(".");
    return Number(resultArr[0]);
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    4
    8`);
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