function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input[0];
    let j = 1;
    for (let i = 0; i < tests; i++){
        let config = input[j++].trim().split(" ").map(Number);
        let n = +config[0]
        let m = +config[1];
        let query = +config[2];
        let mat = [];
        let result = [];
        for (let k = 0; k < n; k++){
            mat.push(input[j++].trim().split(" ").map(Number));
        }
        // console.log(mat);
        if (query == 1) {
            for (let i = 0; i < n; i++){
                for (let j = 0; j < m; j++){
                    if (i % 2 == 0) {
                        result.push(mat[i][j])
                    }
                    if (i % 2 == 1) {
                        result.push(mat[i].reverse());
                    }
                }
            }
        }
        
        else {
            
        }
        console.log(result)
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9
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