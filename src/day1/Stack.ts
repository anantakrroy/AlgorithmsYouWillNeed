type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;


    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const newNode: Node<T> = { value: item }
        // if stack is empty, then assign head to the new node
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // stack already exists ; assign next of new node to the current head and then update head to new node
        newNode.next = this.head;
        this.head = newNode;
    }
    pop(): T | undefined {
        if (this.length > 0) {
            this.length--;
        }
        // if no head found, stack is empty, return undefined
        if (!this.head) {
            return undefined;
        }

        // stack is LIFO ; so last added node should be removed ; head should point to the previous node (which is the next of the head node)
        const head = this.head;
        this.head = this.head.next;

        // free up memory for the popped node
        head.next = undefined

        // if the stack is empty after pop, assign head to undefined
        if (this.length == 0) {
            this.head = undefined;
        }

        // return the popped value
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}