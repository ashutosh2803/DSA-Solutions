function runProgram(input) {
    input = input.trim().split("\n");
    let [size, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let countArr = [];
    for (let i = 0; i < size; i++){
        let sum = arr[i];
        let count = 1;
        for (let j = 0; j < size; j++){
            if (arr[j] != arr[i]) {
                if (sum % k != 0) {
                    sum += arr[j];
                    count++;
                } else {
                    countArr.push(count);
                    break;
                }
            }
        }
    }
    let largest = countArr[0];
    for (let i = 0; i < countArr.length; i++){
        if (largest < countArr[i]) {
            largest = countArr[i];
        }
    }
    let result = 0;
    for (let i = 0; i < countArr.length; i++){
        if (largest == countArr[i]) {
            result++;
        }
    }
    console.log(result);
}
if (process.env.USER === "ubuntu") {
	runProgram(`4 3
    2 3 4 6`);
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