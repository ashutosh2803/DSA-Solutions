// Time Complexity : O(2^n)
// Space Complexity : O(1)
function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let target = +input[2];
    let sum = 0;
    let index = 0;
    let flag = false;
    const checkSum = (arr, index, sum) => {
        if (index === arr.length) {
            if (target === sum) {
                flag = true;
                return
            }
            else {
                return
            }
        }
        checkSum(arr, index + 1, sum + arr[index]);
        checkSum(arr, index + 1, sum);
        return flag;
        }
    flag = checkSum(arr, index, sum);
    if(flag)
        console.log("yes")
    else
        console.log("no");
}
if (process.env.USER === "ubuntu") {
	runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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