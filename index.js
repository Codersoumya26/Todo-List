const fs = require('fs');

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
    todoList: loadTodos
}