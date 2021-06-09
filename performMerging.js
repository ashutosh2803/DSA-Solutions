function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    let arr1 = input[0].trim().split(" ").map(Number);
    let arr2 = input[1].trim().split(" ").map(Number);
    let mergedArr = performMerging(arr1, arr2, size);
    console.log(mergedArr.join(" "));
}
const performMerging = (arr1, arr2, size) => {
    let result = [];
    for (let i = 0; i < size; i++){
        if (arr1[i] > arr2[i]) {
            result.push(arr2[i]);
            result.push(arr1[i]);
        }
        else if (arr1[i] < arr2[i]) {
            result.push(arr1[i]);
            result.push(arr2[i]);
        }
        else {
            result.push(arr1[i]);
            result.push(arr2[i])
        }
    }
    return result;
}
if (process.env.USER === "ubuntu") {
	runProgram(`4
    1 5 7 9
    2 4 6 8`);
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