function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        let num = +input[i].trim();
        if (checkTwistedPrime(num)) {
            console.log("Yes");
        } else {
            console.log("No");
        }   
    }
}
const checkTwistedPrime = (num) => {
    if (isPrime(num) == false)
        return false;

    return isPrime(reverse(num));
}
const isPrime = (num) => {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 == 0 || num % 3 == 0)
        return false;

    for (let i = 5; i * i <= num; i = i + 6)
        if (num % i == 0 || num % (i + 2) == 0)
            return false;

    return true;
}
const reverse = (num) => {
    let rev = 0;
    let rem;
    while (num > 0)
    {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = parseInt(num / 10, 10);
    }
    return rev;
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