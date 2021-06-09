function leftRotate(arr, k)
{
    /* To get the starting point of rotated array */
    let mod = k % (arr.length);
    let result = [];
    // Prints the rotated array from start position
    for (let i = 0; i < (arr.length); i++)
        result.push(arr[(mod + i) % (arr.length)]);
    
    return result;
}
 
    const arr = [ 1, 3, 5, 7, 9 ];
   
      // Function Call
    console.log(leftRotate(arr, 2));