function runProgram(input) {
    input = input.trim().split("\n");
    var size = Number(input[0].trim());
    var str = input[1].trim().split("");
    var obj = {};
    for(var i = 0; i < size; i++){
        if(obj[str[i]] == undefined){
            obj[str[i]] = 1;
        }else{
            obj[str[i]]++;
        }
    }
    var arr = Object.keys(obj);
    arr.sort();
    for(var j = 0;j < arr.length;j++){
        console.log(arr[j] + "-" + obj[arr[j]]);
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`4
    aman`);
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