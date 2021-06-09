// Time Complexity : O(nlogn)
// Space Complexity : O(1)

function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    let arr = input[0].trim().split(" ").map(Number);
    let result = mergeSort(arr);
    let output = "";
    for (let i = 0; i < result.length; i++){
        output += result[i] + " ";
    }
    console.log(output.trim());
}
const merge = (firstArr, secondArr) => {
    let sortedArr = [];

    while (firstArr.length && secondArr.length) {
        if (firstArr[0] > secondArr[0])
            sortedArr.push(firstArr.shift());
        else
            sortedArr.push(secondArr.shift())
    }
    return sortedArr.concat(firstArr.slice().concat(secondArr.slice()));
}
const mergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;
    let mid = Math.ceil(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid,));

    return merge(left, right);
}
if (process.env.USER === "ubuntu") {
	runProgram(`5
    2 3 1 4 5`);
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