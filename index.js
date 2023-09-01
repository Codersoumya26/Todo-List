const fs = require('fs');
const chalk = require('chalk');

const addTodo = (title, desc) => {
    const todos = loadTodos()
    const duplicateTodo = todos.find((todo) => todo.title === title)

    if (!duplicateTodo) {
        todos.push({
            title: title,
            desc: desc
        })

        saveTodos(todos)
        console.log(chalk.blue('New todos added'))
    } else {
        console.log(chalk.red('Todo Title already Exist'))
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
    todoList: loadTodos
}