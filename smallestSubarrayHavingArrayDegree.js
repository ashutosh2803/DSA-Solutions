function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let [degree, largestNum] = degreeCount(size, arr);
        console.log(degree, largestNum);
        
    }
}
const smallestSubArray = (largestNum, arr, size, degree) => {
    largestNum.forEach(element => Number(element));
    let smallestSubArr = [];
    let index = 0;
    for (let i = 0; i < size; i++){
        while(degree > 0 && )
    }
}
const degreeCount = (size, arr) => {
    let obj = {};
    for (let i = 0; i < size; i++){
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    let largest = obj[arr[0]];
    let largestNum = [];
    for (item in obj) {
        if (largest < obj[item]) {
            largest = obj[item];
        }
    }
    for (item in obj) {
        if (largest == obj[item]) {
            largestNum.push(item);
        }
    }
    return [largest, largestNum];
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    13
    1 3 3 2 2 3 6 6 5 5 6 6 3
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