function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let str = input[line++].trim();
        if (checkPalindrome(str, size)) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
const checkPalindrome = (str, size) => {
    if (size == 1) {
        return true;
    }
    let obj = {};
    for (let i = 0; i < size; i++){
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    const temp = Object.values(obj);
    let even = 0;
    let odd = 0;
    for (let i = 0; i < temp.length; i++){
        if (temp[i] % 2 == 0) {
            even = even + 1;
        } else {
            odd = odd + 1;
        }
    }
    return odd == 1 ? true : false;
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    1
    a
    3
    aab
    4
    abbb`);
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