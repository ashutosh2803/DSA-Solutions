function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    
    const customSort = (a, b) => {
        if (a[1] < b[1]) {
            return 1
        } else if (a[1] > b[1]) {
            return -1
        } else if (a[1] === b[1]) {
            if (a[0] < b[0]) {
                return -1
            } else {
                return 1
            }
        }
    }

    let a = input.map((ele) => ele.trim().split(" ")).map((ele) => [ele[0], +ele[1]]).sort(customSort);
    
    let rank = 1;
    
    // console.log(a)
    
    a.forEach((ele, i) => {
        if (i == 0) {
            console.log(rank + " " + ele[0])
            return
        }
        if (ele[1] == a[i - 1][1]) {
            console.log(rank + " " + ele[0])
        } else {
            rank = 1 + i;
            console.log(rank + " " + ele[0]);
        }
    });
}
if (process.env.USER === "ubuntu") {
	runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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