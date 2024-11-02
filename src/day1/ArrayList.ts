export default class ArrayList<T> {
    public length: number;
    private list: Array<T>;

    constructor(size: number) {
        // initialise an array of 'size' 
        this.list = new Array(size);
        this.length = size;
    }

    prepend(item: T): void {
        this.length++
        this.list = [item, ...this.list]
    }

    insertAt(item: T, idx: number): void {
        this.length++
        const updateList = []
        for (let i = 0; i < idx; i++) {
            updateList.push(this.list[i])
        }
        for (let i = idx; i < this.length; i++) {
            if (i == idx) {
                updateList.push(item)
            } else {
                updateList.push(this.list[i])
            }
        }
        this.list = updateList
    }

    append(item: T): void {
        // check if empty slots exist, if yes, fill replace them one by one by 'item',
        for (let i = 0; i < this.length; i++) {
            if (this.list[i] == undefined) {
                this.list[i] = item
                return;
            }
        }
        // if not, then increase the size of the array and push 'item' to the end
        this.length++;
        this.list.push(item);
    }

    remove(item: T): T | undefined {
        //  remove the 1st occurence of item 
        const itemIdx = this.list.findIndex(el => el == item)
        if (itemIdx == -1) {
            return undefined;
        }

        const updateList = []
        for (let i = 0; i < this.length; i++) {
            if (i != itemIdx) {
                updateList.push(this.list[i])
            }
        }
        this.list = updateList
        this.length--
        return item
    }
    get(idx: number): T | undefined {
        if (this.list && idx < this.length) {
            return this.list[idx];
        }
        return undefined
    }
    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined
        }

        const removedItem = this.list[idx];
        const updateList = []
        for (let i = 0; i < this.length; i++) {
            if (i !== idx) {
                updateList.push(this.list[i])
            }
        }
        this.list = updateList
        console.log('List after remove at 1 >>> ', this.list);
        this.length--
        return removedItem
    }
}