    Array.prototype.top = function () {
        return this[this.length - 1];
    }
    function runProgram(input) {
        input = input.trim().split("\n");
        let tests = +input.shift();
        let j = 0;
        for (let i = 0; i < tests; i++){
            let size = +input[j++];
            let arr = input[j++].trim().split(" ").map(Number);
            let stack = [];
            let ans = [];
            for (let k = 0; k < size; k++){
                let range = 1;
                if (k == 0) {
                    ans.push(1);
                    stack.push(k);
                    continue;
                }
                while (stack.length != 0 && arr[stack.top()] <= arr[k]) {
                    range = range + ans[stack.top()];
                    stack.pop();
                }
                ans.push(range);
                stack.push(k);
            }
            let output = "";
            for (let m = 0; m < ans.length; m++){
                output += ans[m] + " "
            }
            console.log(output.trim())
        }
    }
    if (process.env.USER === "ubuntu") {
        runProgram(`2
        7
        100 80 60 70 60 75 85
        5
        3 5 0 9 8`);
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