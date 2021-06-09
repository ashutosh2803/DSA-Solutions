function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        let arr = input[i].trim().split("");
        // console.log(arr);
        if (arr[0] == "-") {
            let result = arr.shift();
            let result1 = mergeSort(arr).join("");
            console.log(result + result1);
        } else {
            arr = mergeSort(arr);
            console.log(arr.join(""));
        }
    }
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
	runProgram(`2
    53334121
    -1002911
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