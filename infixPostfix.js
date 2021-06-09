function runProgram(input) {
    let str = input.trim();
    let result = "";
    let stack = [];
    for (let i = 0; i < str.length; i++){
        if (("a" <= str[i] && str[i] <= "z") || ("A" <= str[i] && str[i] <= "Z")) {
            result += str[i];
        } else if (str[i] == "(") {
            stack.push(str[i]);
        } else if (str[i] == ")") {
            while (stack.length != 0 && stack[stack.length - 1] != "(") {
                let temp = stack.pop();
                result += temp;
            }
            if (stack[stack.length - 1] == "(") {
                stack.pop();
            }
        } else {
            while (stack.length != 0 && precedence(str[i]) <= precedence(stack[stack.length - 1])) {
                let temp = stack.pop();
                result += temp;
            }
            stack.push(str[i]);
        }
    }
    while (stack.length != 0) {
        result += stack.pop();
    }
    console.log(result);
}
const precedence = (ch) => {
    if (ch == "^")
        return 3;
    else if (ch == "/" || ch == "*")
        return 2;
    else if (ch == "+" || ch == "-")
        return 1;
    else
        return -1;
}
if (process.env.USER === "ubuntu") {
	runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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