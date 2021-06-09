function runProgram(input) {
    input = input.trim().split("\n");
    let temp_arr = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    let modulo_arr = [];
    for (let i = 0; i < arr.length; i++){
        modulo_arr.push(arr[i] % temp_arr[1]);
    }

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if (modulo_arr[j] > modulo_arr[j + 1]) {
                arr = swap(arr, j, j + 1);
                modulo_arr = swapModulo(modulo_arr, j, j + 1);
            }
        }
    }
    let output = "";
    for (let i = 0; i < arr.length; i++){
        output += arr[i] + " "
    }
    console.log(output.trim())
}
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
const swapModulo = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
if (process.env.USER === "ubuntu") {
	runProgram(`5 6
        12 18 17 65 46`);
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