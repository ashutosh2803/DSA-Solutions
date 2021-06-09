function runProgram(input) {
    let obj = {a: 0, e: 0, i: 0, o: 0, u: 0};
    input = input.trim();
    let str = new String();
    str = input;
    str.toLocaleLowerCase();
    for (let i = 0; i < str.length; i++){
        if (str[i] == "a" || str[i] == "e" || str[i] == "o" || str[i] == "u") {
            obj[str[i]]++;
        }
    }
    let vowels = Object.keys(obj);
    let end = str.length - 1;
    let count = vowels.length;
    for (i = 0; i < str.length; i++){
        let temp = count;
        while (temp > 0) {
            
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`dangerouscovid`);
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