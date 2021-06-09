function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input.shift();
  let str = input[0].trim();
  let result = removeDuplicate(str, size);
  if (result.length) {
    console.log(result);
  } else {
    console.log(-1);
    }
}
function removeDuplicate(str, size) {
    let safe = []; 
    for (let i = 0; i < size; i++) {
      let n = safe.length;
      let last = safe[n - 1];
  
       if (i === 0) {
           safe.push(str[i]);
        }
      else{
        if (str[i] === last) {
          safe.splice(n - 1, 1);
        } else {
          safe.push(str[i]);
        }
      }
    }
    return safe.join("");
  };
if (process.env.USER === "ubuntu") {
	runProgram(`5
    aabbc`);
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