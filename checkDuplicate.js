function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        if (size == 1) {
            console.log("NO");
            line++;
        } else {
            let arr = input[line++].trim().split(" ").map(Number);
            if (checkDuplicate(arr, size)) {
                console.log("YES");
            } else {
                console.log("NO");
            }   
        }    
    }
}
const checkDuplicate = (arr, size) => {
    let obj = {};
    for (let i = 0; i < size; i++){
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    for (item in obj) {
        if (obj[item] != 1) {
            return true;
        }
    }
    return false;
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    1
    1
    2
    1 1
    3
    1 2 3`);
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