function runProgram(input) {
    input = input.trim().split("\n");
    let [size, tests] = input[0].trim().split(" ").map(Number);
    let line = 1;
    let queue = [];
    for (let i = 0; i < tests; i++){
        let temp = input[line++].trim().split(" ").map(Number);
        // console.log(temp);
        if (temp.length == 2) {
            if (queue.length < size) {
                queue.push(temp[1]);
                console.log(temp[1]);
            }else {
                console.log(-1);
            }
        } 
        if(temp.length == 1){
            if (queue.length != 0) {
                console.log(queue.shift());
            } else {
                console.log(-1);
            }
        }
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2 6
    1 1
    1 2
    1 3
    2
    2
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