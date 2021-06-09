function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        
        arr.sort((a, b) => {
            if (a > b)
                return 1
            else
                return -1;
        })
        if (arr.includes(0)) {
            let index = 0;
            while (arr[index] == 0) {
                index++;
            }
            if (arr[index] != 0) {
                // 0012
                let temp = arr[index];
                arr[index] = arr[0];
                arr[0] = temp;
            }
            console.log(arr.join(""));
        } else {
            console.log(arr.join(""));
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    4
    2 1 0 0
    4
    1 4 2 3
    4
    5 2 3 2`);
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