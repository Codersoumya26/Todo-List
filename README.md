# Todo-List
Node JS Tutorial Project For Crud Functionality

I used Yargs module to create own command-line commands in node.js. Also FileSystem, Chalk module is used here.

User Can Use a TODO-List with Title and description.

### Run Following Commands

* 1. Add a TODO in List.

```bash
node app.js add --title='First Todo' --desc="Test Todo description"
```

* 2. Show an Existing TODO from List.

```bash
node app.js show --title='First Todo
```

* 3. Update a TODO from The List.

```bash
node app.js edit --title='Test' --desc="Updated desc"
```

* 4. Show Whole Todo List.

```bash
node app.js list
```

* 5. Remove a Todo from The List.

```bash
 node app.js remove --title='First Todo'
```
