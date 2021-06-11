function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
        let type = +input[line++];
        let evenType = [];
        let oddType = [];
        for (let j = 0; j < size; j++){
            if (arr[j] % 2 == 0) {
                evenType.push(arr[j]);
            } else {
                oddType.push(arr[j]);
            }
        }
        let result = [];
        switch (type) {
            case 1: 
                result = [...evenType, ...oddType];
                console.log(result.join(" "));
                break;
            case 2:
                result = [...oddType, ...evenType];
                console.log(result.join(" "));
                break;
            default: null;
        }
    }
}
// type 1 - even first
// type 2 - odd first
if (process.env.USER === "ubuntu") {
	runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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