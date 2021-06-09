function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        console.log(vowelsPriority(input[i]));
    }
}
const vowelsPriority = (str) => {
    let vowels = [];
    let consonants = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U" || str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            vowels.push(str[i]);
        } else {
            consonants.push(str[i]);
        }
    }
    let result1 = "";
    let result2 = "";
    for (let i = 0; i < vowels.length; i++){
        result1 += vowels[i];
    }
    
    for (let i = 0; i < consonants.length; i++){
        result2 += consonants[i];
    }
    let result = result1.concat(result2);
    return result;
}
if (process.env.USER === "ubuntu") {
	runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm`);
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