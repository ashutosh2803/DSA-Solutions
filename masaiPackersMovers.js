function runProgram(input) {
    input = input.trim().split("\n");
    let sizeArr = input[0].trim().split(" ").map(Number);
    let capacity = sizeArr[0];
    let totalTrucks = sizeArr[1];
    let trucks = input[0].trim().split(" ").map(Number);
    console.log(countFrequences(capacity, trucks));
}
const countFrequences = (capacity, trucks) => {
    if (capacity == 1) {
        return 1;
    }
    if (capacity == 2) {
        return 2;
    }
    if (capacity == 3) {
        return 4;
    }
    let call = 0;
    for (let i = 0; i < trucks.length; i++){
        call += countFrequences(capacity - trucks[i], trucks);
    }
    return call
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