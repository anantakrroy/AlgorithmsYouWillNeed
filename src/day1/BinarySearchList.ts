export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length
    console.log('Needle >> ', needle);
    console.log('Haystack >> ', haystack);
    
    do {
        let mid = Math.floor(lo + (hi-lo)/2)
        if(needle == haystack[mid]) {
            return true
        } else if(needle > haystack[mid]) {
            lo = mid + 1
        } else {
            hi = mid
        }
        console.log(lo, hi, mid);
        
    } while (lo < hi);
    return false
}