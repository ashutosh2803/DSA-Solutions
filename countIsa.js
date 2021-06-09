function runProgram(input){
    input = input.trim().split("\n");
    let j = 1;
    let test = +input[0];
    while(test){
        let [row, col] = input[j].trim().split(" ").map(Number);
        j++;
        let mat = [];
       for(let i = j;i<j+row;i++){
           mat.push(input[i].trim().split(""));
       }
        let count = 0;
        let match = "isa";
       for(let a = 0;a<row;a++){
           for(let b =0;b<=col-3;b++){
               let str = "";
            for(c = b;c<b+3;c++){
                str += mat[a][c];
               }
               
               if (str == match) count++;
           }
       }
       for(let a = 0;a<col;a++){
        for(let b =0;b<=row-3;b++){
            let str = "";
         for(c = b;c<b+3;c++){
             str += mat[c][a];
            }
            
            if (str == match) count++;
        }
    }
console.log(count)
        j += row;
        test--;
    }

}
if (process.env.USERNAME === "ubuntu"){
    runProgram(`2
    3 3
    isa
    sia
    ais
    5 3
    isa
    sia
    ais
    ssa
    aai`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/,"")
    runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
        process.exit(0);
    });
}