function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    let arr = input[0].trim().split(" ").map(Number);
    let start = 0;
    let end = size - 1;
    quickSort(arr, start, end);
    console.log(arr.join(" "));
}
const swap = (arr, a, b) =>
{
	let temp = arr[a];
	arr[a] = arr[b];
    arr[b] = temp;
    return arr
}
const partition = (arr,start,end) => {
	let pivot = arr[end];
	let pIndex = (start - 1); 

	for (let i = start; i <= end - 1; i++)
	{
		if (arr[i] > pivot)
		{
			pIndex++; 
			arr = swap(arr, pIndex, i);
		}
	}
	arr = swap(arr, pIndex + 1, end);
	return (pIndex + 1);
}

const quickSort = (arr, start, end) => {
    if (start >= end)
        return
    else
	{
		let pIndex = partition(arr, start, end);
		quickSort(arr, start, pIndex - 1);
		quickSort(arr, pIndex + 1, end);
	}
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