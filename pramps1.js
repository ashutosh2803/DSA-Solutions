const arr = ['p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
    'm', 'a', 'k', 'e', 's', '  ',
    'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'];

let result = "";
for (let i = arr.length; i >= 0; i--){
    if (arr[i] !== " ") {
        result += arr[i];
    }
    if (arr[i] === " ") {
        result += arr[i];
    }
}
