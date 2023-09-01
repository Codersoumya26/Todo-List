const fs = require('fs');
const chalk = require('chalk');

// Create Todo 
const addTodo = (title, desc) => {
    const todos = loadTodos()
    const duplicateTodo = todos.find((todo) => todo.title === title)

    if (!duplicateTodo) {
        todos.push({
            title: title,
            desc: desc
        })

        saveTodos(todos)
        console.log(chalk.blue('New Todo added'))
    } else {
        console.log(chalk.red('Todo Title already Exist.'))
    }
}

// Read Todo
const showTodo = (title) => {
    const todos = loadTodos()
    const todo = todos.find((todo) => todo.title === title)

    if (todo) {
        console.log(chalk.blue('Your Todo :-'))
        console.log(todo)
    } else {
        console.log(chalk.red('No Todo Found.'))
    }
}

// Update Todo
const EditTodo = (title, desc) => {
    const todos = loadTodos()
    const indexToUpdate = todos.findIndex(todo => todo.title === title);

    if (indexToUpdate !== -1) {
        todos.splice(indexToUpdate, 1)
        console.log(todos)
        todos.push({
            title: title,
            desc: desc
        })
        saveTodos(todos)
        console.log(desc)
        console.log(todos)
        console.log(chalk.blue(title + ' Todo description Updated.'))
    } else {
        console.log(chalk.red('No Todo Found.'))
    }
}

// Delete Todo
const removeTodo = (title) => {
    const todos = loadTodos()
    const otherTodos = todos.filter((todo) => todo.title !== title)

    if (todos.length > otherTodos.length) {
        saveTodos(otherTodos)
        console.log(chalk.red(title + ' todo deleted from list'))
    } else {
        console.log(chalk.red('No Todo Found for this title ' + title))
    }
}

const saveTodos = (newTodos) => {
    const newStringJson = JSON.stringify(newTodos)
        fs.writeFileSync('todoList.json', newStringJson)
}

const loadTodos = () => {
    try {
        const dataBuffer = fs.readFileSync('todoList.json')
        const dataJson = dataBuffer.toString()
        const objectData = JSON.parse(dataJson)
        
        return objectData
    } catch (err) {
        return []
    }
}

module.exports = {
    add: addTodo,
    show: showTodo,
    edit: EditTodo,
    remove: removeTodo,
    todoList: loadTodos
}