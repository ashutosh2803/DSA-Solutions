function runProgram(input) {
	input = input.trim().split("\n");
	let size = +input.shift();
	let q1 = [];
	let q2 = [];
	let q3 = [];
	let q4 = [];
	let masterQ = [];
	for (let i = 0; i < size; i++){
		let ele = input[i].trim().split(" ");
		if (ele == "D") {
			let top = masterQ[masterQ.length - 1];
			let roll = null;
			`q${top}`.pop();
			if (`q${top}`.length == 0) {
				roll = masterQ.shift();
			}
			console.log(top + " " + roll);
		}
		if (ele[0] == "E") {
			switch (ele[1]) {
				case "1": {
					q1.push(ele[2]);
					masterQ = manageMasterQ(masterQ, 1);
					break;
				}
				case "2": {
					q2.push(ele[2]);
					masterQ = manageMasterQ(masterQ, 1);
					break;
				}
				case "3": {
					q3.push(ele[2]);
					masterQ = manageMasterQ(masterQ, 1);
					break;
				}
				case "4": {
					q4.push(ele[2]);
					masterQ = manageMasterQ(masterQ, 1);
					break;
				}
			}
		}
	}
	console.log(masterQ);
}

const manageMasterQ = (masterQ, team) => {
	for (let i = 0; i < masterQ.length; i++){
		if (team == masterQ[i]) {
			continue
		} else {
			if (`q${team}`.length == 0) {
				masterQ.push(team);	
			}
		}
	}
	return masterQ;
}
if (process.env.USER === "ubuntu") {
	runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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