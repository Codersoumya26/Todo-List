const yargs = require('yargs')
const todos = require('./index.js')

// create ADD command
yargs.command({
    command: 'add',
    describe: 'Create a new Todo',
    builder: {
        title: {
            describe: 'Todo Title',
            demandOption: true,
            type: 'string',
        },
        desc: {
            describe: 'Todo Description',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        todos.add(argv.title, argv.desc);
    }
})

// get SHOW command
yargs.command({
    command: 'show',
    describe: 'Read an Existing Todo',
    builder: {
        title: {
            describe: 'Todo Title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        todos.show(argv.title);
    }
})

// Edit command added
yargs.command({
    command: 'edit',
    describe: 'Update an Existing Todo',
    builder: {
        title: {
            describe: 'Todo Title',
            demandOption: true,
            type: 'string',
        },
        desc: {
            describe: 'Todo Description',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        todos.edit(argv.title, argv.desc);
    }
})

// Remove command added
yargs.command({
    command: 'remove',
    describe: 'Delete an Existing Todo',
    builder: {
        title: {
            describe: 'Todo Title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        todos.remove(argv.title);
    }
})

yargs.parse()