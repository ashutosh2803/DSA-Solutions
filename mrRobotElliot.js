function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let size = +input[j++];
        let str = input[j++].trim();
        encrypt(str, 0, size - 1);
        // let middleEle = 0;
        // let middleIndex = 0;
        // let arr = input[j++].trim().split("");
        // if (size % 2 == 0) {
        //     let middleIndex = (size / 2) - 1;
        //     middleEle = arr[middleIndex];
        // } else {
        //     let middleIndex = (size - 1) / 2;
        //     middleEle = arr[middleIndex];
        // }
        // let result = "";
        // result += middleEle;
        // for (let k = 0; k < size; k++){
        //     if (arr[k] != middleEle) {
        //         result += arr[k];
        //     }
        // }
        // console.log(result)
    }
}
const encrypt = (str, start, end) => {
    if (start > end) {
        return;
    }

    let middle = (start + end) >> 1;

    console.log(str[middle]);

    encrypt(str, 0, middle - 1);
    
    encrypt(str, middle + 1, end);

}
if (process.env.USER === "ubuntu") {
	runProgram(`2
    3
    abc
    4
    abcd`);
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