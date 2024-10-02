//Todolist Actions
export function updateTodo(newTodo)
{
    return {type : 'UPDATENEWTODO', newTodoValue : newTodo}
}
export function addTodo()
{
     return {type : 'ADDTODO'}
}

export function undoFn(id)
{
    return {type : 'UNDO' , indx : id}
}

export function doneFn(id)
{
    return {type : 'DONE', indx : id}
}

export function del(id)
{
    return {type : 'DELETE', indx : id}
}


//Counter Actions 


export function increment()
{
    return {type: 'INC'}
}

export function decrement()
{
    return {type : 'DEC'}
}


export function reset()
{
    return {type : 'RESET'}
}
