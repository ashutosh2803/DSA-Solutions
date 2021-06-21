function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    for (let i = 0; i < tests; i++){
        let num = +input[i];
        // console.log("hello")
        let result = squareRoot(num, 3);
        console.log(roundNum(result));
    }
}
const roundNum = (num) => {
    let temp = num.toString().split(".");
    return temp[0];
}
const squareRoot = (number, precision) => {
    let start = 0, end = number;
    let mid;

    let ans = 0.0;

    while (start <= end)
    {
        mid = (start + end) / 2;
            
        if (mid * mid == number)
        {
            ans = mid;
            break;
        }

       if (mid * mid < number) {
            start = mid + 1;
            ans = mid;
        }

       else {
            end = mid - 1;
        }
    }

   let increment = 0.1;
    for (let i = 0; i < precision; i++) {
        while (ans * ans <= number) {
            ans += increment;
        }

       ans = ans - increment;
        increment = increment / 10;
    }
    return ans;
}
if (process.env.USERNAME === "ASHUTOSH") {
	runProgram(`10
    7
    4
    16
    5
    21
    3
    12
    4
    4
    10`);
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