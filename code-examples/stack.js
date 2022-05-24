let elements = [];
let top = -1;
const max = 10;

function push(num) {
    if (top < max) {
        elements[++top] = num;
    } else {
        console.log('Stack is full');
    }
}  

function isEmpty() {
    if (top == -1) {
        return true;
    } else {
        return false;
    }
}

function pop() {
    if (top != -1) {
        let num = elements[top];
        return elements[top--];
    } else {
        console.log('Stack is empty');
    }
}

push(10);
push(20);
push(30);

console.log(elements);

// result: [ 10, 20, 30 ]

console.log(pop());