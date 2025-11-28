let stack = []
top = -1

function push(value){
    top = top+1
    stack[top] = value
}

function pop(){
    remove = stack[top]
    top = top-1
    return remove
}

push(10)
push(20)
push(30)
console.log(stack);
console.log(pop());

