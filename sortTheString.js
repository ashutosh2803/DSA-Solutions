function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split("");
    console.log(sortString(arr));
}
const sortString = (arr) => {
    let high = arr.length - 1;
    let operations = 0;
    let low = 0;
    for(let i = 0; i < arr.length; i++){
        if (low <= high && arr[i] == 1){
            let temp = arr[i];
            arr[i] = arr[high];
            arr[high] = temp;
            operations++;
        }
        low++;
        high--;
    }
    return operations;
}
if (process.env.USER === "ubuntu") {
	runProgram(`4
    1100
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