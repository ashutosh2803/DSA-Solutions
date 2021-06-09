function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let min_index = 0;
    for (let i = 0; i < size - 1; i++){
        min_index = i;
        for (let j = i + 1; j < size; j++){
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        arr = swap(arr, min_index, i);
    }
    console.log(arr.join(" "));
}
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
if (process.env.USER === "ubuntu") {
	runProgram(`5
    3 5 0 9 8`);
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