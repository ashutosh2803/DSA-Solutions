function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let countArr = [];
        let temp = size;
        let index = 0;
        while (temp >= 0) {
            let obj = {};
            for (let j = index; j < size; j++){
                if (obj[arr[j]] === undefined) {
                    obj[arr[j]] = 1;
                } else {
                    break;
                }
            }
            countArr.push(Object.keys(obj).length);
            temp--;
            index++;
        }
        let result = countArr[0];
        for (let j = 1; j < countArr.length; j++){
            if (result < countArr[j]) {
                result = countArr[j];
            }
        }
        console.log(result);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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