function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
    let arr = input[0].trim().split(" ").map(Number);
    let queriesCount = +input[1];
    let queries = input[2].trim().split(" ").map(Number);
    for (let i = 0; i < queriesCount; i++){
        if (searchQuery(arr, queries[i], 0, size - 1)) {
            console.log("YES");
        } else {
            console.log("NO")
        }
    }
}
const searchQuery = (arr, query, start, end) => {
       
    if (start > end) return false;
   
    let mid = Math.floor((start + end)/2);
   
    if (arr[mid] === query) {
        return true;
    } 
    if (arr[mid] > query) {
        return searchQuery(arr, query, start, mid-1);
    }
    else {
        return searchQuery(arr, query, mid+1, end);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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