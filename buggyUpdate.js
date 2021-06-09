function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let line = 0;
    for (let i = 0; i < tests; i++){
        let version1 = input[line++].trim().split(".");
        let version2 = input[line++].trim().split(".");
        if (versionCompare(version1, version2)){
            console.log("True");
        } else {
            console.log("False");
        };
    }
}
const versionCompare = (version1,version2) => {
    
    let version_num1 = 0;
    let version_num2 = 0;
 
    for (let i = 0, j = 0; (i < version1.length || j < version2.length);) {
        while (i < version1.length() && version1[i] != '.') {
            version_num1 = version_num1 * 10 + (version1[i] - '0');
            i++;
        }
        while (j < version2.length() && version2[j] != '.') {
            version_num2 = version_num2 * 10 + (version2[j] - '0');
            j++;
        }
 
        if (version_num1 > version_num2)
            return true;
        if (version_num2 > version_num1)
            return false;
        
        version_num1 = version_num2 = 0;
        
        i++;
        j++;
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
    2.0.1
    1.9.8
    12.0.1
    12.10.0
    1.1.10
    1.1.12`);
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