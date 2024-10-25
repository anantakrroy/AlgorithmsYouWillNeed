export default function bubble_sort(arr: number[]): void {
    // 1st iteration bubbles the largest to the end of arr ; repeat this till only 1 element remains to be iterated over
    for(let j = arr.length; j > 1; --j) {
        for(let i = 0 ; i < j - 1 ; ++i) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i]   
                arr[i] = arr[i+1]
                arr[i+1] = temp
            } 
        }
    }
}