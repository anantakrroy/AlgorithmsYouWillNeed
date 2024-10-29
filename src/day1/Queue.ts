type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        // add item to the queue  meaning the tail keeps updating

        // if there are no elements in queue, then new item is both the head and tail
        const newNode = {value: item} as Node<T>;
        this.length++;
        if(!this.tail) {
            this.tail = this.head = newNode;
            return;
        }

        // there is atleast one item in the queue means the tail needs to update to the new item node and original tail next points to new item node
        this.tail.next = newNode;
        this.tail = newNode;
        return;
    }
    deque(): T | undefined {
        // if the head is undefined means queue is empty ; return undefined
        if(!this.head) {
            return undefined;
        }
        // NOTE : Queue is FIFO (First in- First Out) ; head is at the first inserted item ; deque means removing that element from the queue; hence the head needs to be updated
       
        this.length--;

        const head = this.head; // this is the current head
        this.head = this.head.next; // point the head to current heads next

        // free the earlier head by not pointing to any node
        head.next = undefined;

        // if the queue is empty after dequeue operation, make sure the tail is undefined
        if(this.length == 0){
            this.tail = undefined
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}