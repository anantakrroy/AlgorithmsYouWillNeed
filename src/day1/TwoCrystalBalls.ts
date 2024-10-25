export default function two_crystal_balls(breaks: boolean[]): number {
    // calculate the value of 'k' i.e the random floor from which the 1st ball is dropped first
    const jumpFloor = Math.floor(Math.sqrt(breaks.length))
    let safeFloor = 0
    let breakFloor = 0

    // console.log(`Jum floor >>> ${jumpFloor} for total floors >> ${breaks.length} of building >> ${breaks}`);
    
    
    // Calculate floor from where the 1st ball definitely breaks the 1st time
    for(let i = jumpFloor ; i < breaks.length; i += jumpFloor) {
        if(breaks[i]) {
            breakFloor = i
            // console.log('Break floor >> ', breakFloor);
            break
        }
        safeFloor = i
        // console.log('Safe floor >> ', safeFloor);
        
    }

    // Calculate the floor where the 2nd ball breaks ; it is definitely between the last safe floor and the 'i' where the 1st ball broke
    for(let i = safeFloor; i < breakFloor ; ++i) {
        if(breaks[i])
            return i
    }
    return -1
}