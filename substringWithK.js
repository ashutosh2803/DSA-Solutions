function runProgram(input) {
    input = input.trim().split("\n");
    let [size, k] = input[0].trim().split(" ").map(Number);
    let str = input[1].trim();
    for (let i = 0; i < size; i++){
        let temp = str[i];
        let j = 1;
        index = i + 1;
        while (j > 0 && index < size) {
            temp += str[index++];
            j--;
        }
        let count = 0;
        if (temp.length == k) {
            let obj = {};
            for (let i = 0; i < temp.length; i++){
                if (obj[temp[i]] === undefined) {
                    obj[temp[i]] = 1;
                } else {
                    obj[temp[i]]++;
                }
            }
            for (item in obj) {
                if (obj[item] == 1) {
                    count++;
                }
            }
            }
        console.log(count);
        return;
        }
}
if (process.env.USER === "ubuntu") {
	runProgram(`4 2
    abcc`);
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