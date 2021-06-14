function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size1 = +input[line++];
        let arr1 = input[line++].trim().split(" ").map(Number);
        let size2 = +input[line++];
        let arr2 = input[line++].trim().split(" ").map(Number);
        let result = [];
        let i = 0;
        let j = 0;
        while ((i < size1) && (j < size2)) {
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
                i++;
                j++;
            } else if (arr1[i] < arr2[j]) {
                i++;
            } else {
                j++;
            }
        }
        console.log(result.length != 0 ? result.join(" ") : -1);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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