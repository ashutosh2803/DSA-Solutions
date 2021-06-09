let arr = [
    ['i', 's', 'a'],
    ['s', 'i', 'a'],
    ['a', 'i', 's']
];

let rows = 3;
let cols = 3;
let count = 0;
let match = "isa";

for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols - 3; j++){
        let str = "";
        for (let k = j; k < j + 3; k++){
            str += arr[i][k];
        }
        if (str === match) count++;
    }
}
console.log(count);