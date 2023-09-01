const yargs = require('yargs')
const todos = require('./index.js')

// create ADD command
yargs.command({
    command: 'add',
    describe: 'Add a new Todo',
    builder: {
        title: {
            describe: 'Todo Title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        console.log('Todo Title:- ', argv.title);
    }
})

yargs.parse()