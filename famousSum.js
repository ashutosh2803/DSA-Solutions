function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    let n = input[0];
    let k = input[1];
    let result = 0;
    n = String(n);
    for (let i = 0; i < k; i++){
        result += Number(n[i]);
    }
    console.log(superDigit(result * k));
}

const superDigit = (n) => {
    let sum = 0;
    while(n > 0 || sum > 9)
    {
        if(n == 0)
        {
            n = sum;
            sum = 0;
        }
        sum += n % 10;
        n /= 10;
    }
    return sum;
}
if (process.env.USER === "ubuntu") {
	runProgram(`148 3`);
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