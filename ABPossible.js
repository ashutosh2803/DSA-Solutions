function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        let [num, target] = input[i].trim().split(" ");
        if (Number(target) < Number(num)) {
            console.log("Not Possible");
        } else if (Number(target) == Number(num)) {
            console.log("Possible");
        } else {
            if (checkAB(num, target)) {
                console.log("Possible");
            } else {
                console.log("Not Possible");
            }
        }
    }
}
const checkAB = (num, target) => {
    while (Number(num) < Number(target)) {
        if (Number(num) * 2 == target) {
            return true;
        } else if (Number(num + 1) == Number(target)) {
            return true;
        } else {
            
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`4
    6 242
    3 3
    6 3
    10 30`);
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