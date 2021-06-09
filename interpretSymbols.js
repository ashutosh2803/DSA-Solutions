function runProgram(input) {
    input = input.trim().split("\n");
    let num = +input.shift();
    let symbols = input[0].trim().split("");
    for (let i = 0; i < symbols.length; i++){
        switch (symbols[i]) {
            case "@": num *= 10;
                break;
            case "!": num += 2;
                break;
            case "%": num -= 5;
                break;
            case "^": num = num ** 2;
                break;
            case "$": num += 37;
                break;
        }
    }
    console.log(num);
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    ^@!@`);
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