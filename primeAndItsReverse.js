function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        let temp = input[i].trim();
        let reverseNum = temp.split("").reverse().join("");
        // console.log(reverseNum);
        if (checkPrime(Number(temp)) && checkPrime(Number(reverseNum))) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
const checkPrime = (num) => {
    let sqrtNum = Math.floor(Math.sqrt(num));
    if (num == 1) {
        return false;
    }
    let prime = true;
    for (let i = 2; i <= sqrtNum; i++){
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    151
    10`);
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