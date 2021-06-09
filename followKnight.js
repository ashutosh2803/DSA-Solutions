let chessBoard = Array(11).fill().map(() => Array(11).fill(0));
// initialized a chessboard with initially all values set to 0
let steps = 0;
// created a function to count the all possible steps with from (r,c)
// till k is exhausted
function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    // this takes r, c , k from the input where k is the number of moves left and (r,c) denotes the current position of the knight
    let r = input.shift();
    let c = input.shift();
    let n = input.shift();
    followKnight(r, c, n);
    // call the function initially here with all the input values for r, c , k
    console.log(steps);
}
const followKnight = (r, c, n) => {
    if (r > 10 || c > 10 || r < 1 || c < 1) {
        return
    }
    if (n == 0 && chessBoard[r][c] == 1) {
        return
    }
    if (n == 0) {
        chessBoard[r][c] = 1;
        steps = steps + 1;
    }
    // recursively calling all the possible moves at each position of knight
    else {
        followKnight(r + 2, c + 1, n - 1);
        followKnight(r + 2, c - 1, n - 1);
        followKnight(r - 2, c + 1, n - 1);
        followKnight(r - 2, c - 1, n - 1);
       
        followKnight(r + 1, c + 2, n - 1);
        followKnight(r + 1, c - 2, n - 1);
        followKnight(r - 1, c + 2, n - 1);
        followKnight(r - 1, c - 2, n - 1);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3 3 1`);
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