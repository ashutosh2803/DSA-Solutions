function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let [size, search] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ");
        let obj = { };
        for (let j = 0; j < size; j++){
            for (let k = 0; k < arr[i].length; k++){
                if (arr[i][k] == search) {
                    if (obj[arr[i][k]] === undefined) {
                        obj[arr[i][k]] = 1;
                    } else {
                        obj[arr[i][k]]++;
                    }
                }
            }
        }
        let largest;
        for (item in obj) {
            if (item > largest) {
                largest = item;
            }
        }
        console.log(largest);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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