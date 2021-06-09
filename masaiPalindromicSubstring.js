function runProgram(input) {
    let str = new String(input.trim());
    let max = 0;
    if (str.length == 1) {
        console.log(1);
        return
    }
    for (let i = 0; i < str.length; i++){
        let subStr = str.substr(i, str.length);
        for (let j = subStr.length; j >= 0; j--){
            let sub_subStr = subStr.substr(0, j);
            if (sub_subStr.length <= 1) {
                continue;
            }
            if (checkPalindrome(sub_subStr)) {
                if (sub_subStr.length > max) {
                    max = sub_subStr.length;
                }
            }
        }
    }
    console.log(max);
}
const checkPalindrome = (str) => {
    return str.split("").reverse().join("") == str;
}
if (process.env.USER === "ubuntu") {
	runProgram(`thisracecarisgood`);
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