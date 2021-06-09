function runProgram(input) {
    input = input.trim().split("\n");
    let [rows, cols] = input[0].trim().split(" ").map(Number);
    let line = 1;
    let arr = [];
    for (let i = 0; i < rows; i++){
        arr.push(input[line++].trim().split(" ").map(Number));
    }
    let target = +input[line];
    let leftRight = [];
    let rightLeft = [];
    let targetRow;
    let targetCol;
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            if (arr[i][j] == target) {
                targetRow = i;
                targetCol = j;
                break;
            }
        }
    }
    // left to right 
    let temp = targetCol;
    leftRight.push(target);
    for (let i = targetRow - 1; i >= 0; i--){
        leftRight.push(arr[i][--temp]);
    }

    // right to left
    rightLeft.push(target);
    for (let i = targetRow + 1; i < rows; i++){
        rightLeft.push(arr[i][temp++]);
    }
    
    // printing output
    let result = "";
    for (let i = leftRight.length - 1; i >= 0; i--){
        result += leftRight[i] + " ";
    }
    console.log(result.trim());
    console.log(rightLeft.join(" "));
}
if (process.env.USER === "ubuntu") {
	runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`);
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