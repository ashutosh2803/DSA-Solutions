function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    console.log(multiply(arr, n - 1));
}
const multiply = (arr, n) => { 
    if (n == 0) 
        return arr[n]; 
    else
        return (arr[n] * multiply(arr, n - 1)); 
} 
  
if (process.env.USER === "ubuntu") {
	runProgram(`5
    3 5 2 9 4`);
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