function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let j = 1;
    for (let i = 0; i < size; i++){
        let str = input[j++];
        checkParanthesis(str);
    }
}
function checkParanthesis(str) {
    input = str.trim().split("")
    let arr = [];
    let flag = [];
    if (input.length == 0) {
        console.log("not balanced")
        return
    }
    for (let i = 0; i < input.length; i++){
        if (input[i] == "(" || input[i] == "{" || input[i] == "[") {
            arr.push(input[i]);
        }
        if (arr.length == 0) {
            console.log("not balanced")
            return
        }
        switch (input[i]) {
            case ")": let x = arr[arr.length - 1]
                if (x != "(") {
                    flag.push(false);
                } else {
                    arr.pop()
                    flag.push(true);
                }
                break;
            case "}": let y = arr[arr.length - 1]
                if (y != "{") {
                    flag.push(false);
                } else {
                    arr.pop()
                    flag.push(true);
                }
                break;
            case "]": let z = arr[arr.length - 1]
                if (z != "[") {
                    flag.push(false);
                } else {
                    arr.pop()
                    flag.push(true);
                }
                break;
        }
    }
    if (arr.length != 0) {
        console.log("not balanced")
        return
    }
    for (let i = 0; i < flag.length; i++){
        if (flag[i] == false) {
            console.log("not balanced")
            return
        }
    }
    console.log("balanced")
    
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    {([])}
    ()
    ([]
    `);
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