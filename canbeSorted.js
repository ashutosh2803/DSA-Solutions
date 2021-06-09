function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    let arr = input[0].trim().split(" ").map(Number);
    let orgArr = [...arr];
    let sortedArr = arr.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    });
    if (checkSorted(arr, sortedArr)) {
        console.log("YES")
    } else {
        let stopIndex = 0;
    for (let i = 0; i < size; i++){
        if (orgArr[i] > arr[i + 1]) {
            stopIndex = i;
            break
        }
    }
    let subArr = [];
    console.log(stopIndex)
    for (let i = stopIndex; i < size; i++){
        subArr.push(orgArr[i])
    }
    subArr.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    let resultantArr = orgArr.splice(0, stopIndex)
    for (let i = 0; i < subArr.length; i++){
        resultantArr.push(subArr[i]);
    }
        if (checkSorted(resultantArr, sortedArr)) {
            console.log("YES")
        } else {
            console.log("NO")
        }
    }
}
const checkSorted = (arr, sortedArr) => {
    let flag = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != sortedArr[i]) {
            return false;
        } else {
            flag = true;
        }
    }
    return flag;
}
if (process.env.USER === "ubuntu") {
	runProgram(`10
    -1 0 1 2 3 10 9 7 6 4`);
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