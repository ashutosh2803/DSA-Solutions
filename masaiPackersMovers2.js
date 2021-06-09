function runProgram(input) {
    input = input.trim().split("\n");
    let tests = input[0].trim().split(" ").map(Number);
    let weight = tests[0];
    let trucks = tests[1];
    let arr = input[1].trim().split(" ").map(Number);
    let count = []
    for (let i = 0; i < trucks; i++){
        if (arr[i] % weight) {
            let freq = 0;
            while (weight != 0) {
                weight -= arr[i];
                freq++;
            }
            if (weight == 0) {
                count.push(freq);
            }
        } else {
            weight -= arr[i];
            let freq = 0;
            for (let j = i; j < trucks; j++){
                while (weight != 0) {
                    weight -= arr[j];
                    freq++;
                }
                if (weight == 0) {
                    count.push(freq);
                }
            }
        }
    }
    console.log(count);
}
if (process.env.USER === "ubuntu") {
	runProgram(`3 3
    1 2 3`);
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