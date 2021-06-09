function runProgram(input) {
    let [num, target] = input.trim().split(" ");
    
    while (Number(num) <= Number(target)) {
        num = String(num);
        let temp = num.split("");
        // console.log(temp);
        num = Number(num) + Number(temp[0]) + Number(temp[1]);
        // console.log(num);
    }
    if (num == target) {
        console.log(num);
    } else {
        console.log(-1);
    }
    
}
if (process.env.USER === "ubuntu") {
	runProgram(`30793 83060`);
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