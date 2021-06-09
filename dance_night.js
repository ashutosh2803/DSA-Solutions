function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++){
        let tempArr = input[j++].trim().split(" ").map(Number);
        let totalBoys = tempArr[0];
        let totalGirls = tempArr[1];
        let boys = input[j++].trim().split(" ").map(Number).sort();
        let girls = input[j++].trim().split(" ").map(Number).sort();
        
        let result = [];
    
        for (let k = 0; k < totalBoys; k++){
           let index = 0
            while (boys[k] < girls[index] && index <= totalGirls  && checkDuplicate(result, index)) {
                index++;
            }
            if (boys[k] > girls[index]) {
                result.push(index);
            }
        }
        if (result.length == totalBoys) {
            console.log("YES")
        } else {
            console.log("NO")
        }
    }
}
const checkDuplicate = (result, query) => {
    let flag = false;
    for (let i = 0; i < result.length; i++){
        if (query == result[i]) {
            flag = true
        } else {
            flag = false
        }
    }
    return flag;
}
if (process.env.USER === "ubuntu") {
	runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`);
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