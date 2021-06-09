function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number).sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log(permutation(arr, 0, size-1))
}
function printarray(arr, size)
{
    let result = "";
    for(let i=0; i<size; i++)
    {
        result += arr[i] + " ";
    }
    console.log(result.trim());
}
function swap(arr, a, b)
{
    let temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}
function permutation(arr, start, end)
{
    if(start==end)
    {
        printarray(arr, end+1);
        return;
    }
    for(let i=start;i<=end;i++)
    {
        arr = swap(arr, (arr+i), (arr+start));
        permutation(arr, start+1, end);
        arr = swap(arr, (arr+i), (arr+start));
    }
}
if (process.env.USER === "ubuntu") {
	runProgram(`3
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