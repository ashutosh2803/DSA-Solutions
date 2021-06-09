function countingValleys(steps, path) {
    // Write your code here
    let altitude = 0;
    let prev_altitude = 0;
    let valleyCount = 0;
    for (let i = 0; i < steps; i++){
        if (path[i] == 'U')
            altitude += 1
        else if (path[i] == 'D')
            altitude -= 1
        if (altitude == 0 && prev_altitude < 0)
            valleyCount += 1
    
        prev_altitude = altitude;
    }
    return valleyCount;
}
console.log(countingValleys(8, "UDDDUDUU"));