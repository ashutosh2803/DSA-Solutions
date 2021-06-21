function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        let num = +input[i];
        // console.log("hello")
        let result = squareRoot(num);
        console.log(result)
        console.log(roundNum(result));
    }
}
const roundNum = (num) => {
    let numArr = num.toString().split(".");
    return numArr[0];
}
const squareRoot = (num) => {
    let low = 0;
    let high = num;
    let ans;
    while (low <= high) {
        let mid = (low + high) / 2;
        if (mid * mid == num) {
            ans = mid;
            break;
        } else if (mid * mid < num) {
            low = mid + 1;
            ans = mid;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}
if (process.env.USERNAME === "ASHUTOSH") {
	runProgram(`10
    7
    4
    16
    5
    21
    3
    12
    4
    4
    10`);
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