function runProgram(input) {
    let str = input.trim();
    let stack = [];
    let flag;
    for (let i = 0; i < str.length; i++){
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
            flag = 1;
        }
        if (stack.length != 0) {
            if (str[i] == ")") {
                if (stack[stack.length - 1] == "(") {
                    stack.pop();
                } else {
                    break;
                }
            }
            if (str[i] == "}") {
                if (stack[stack.length - 1] == "{") {
                    stack.pop();
                } else {
                    break;
                }
            }
            if (str[i] == "]") {
                if (stack[stack.length - 1] == "[") {
                    stack.pop();
                } else {
                    break;
                }
            }
        } else {
            break;
        }
    }
    if (stack.length == 0 && flag == 1) {
        console.log("balanced")
    } else {
        console.log("unbalanced")
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`(((((((((())))))))))`);
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