let command = prompt('What would you like to do?');
const todolist = [];
while (command !== 'quit' && command !== 'q') {
    if (command === 'list') {
        console.log('**********')
        for (let i = 0; i < todolist.length; i++) {

            console.log(`${i}: ${todolist[i]}`);
        }
        console.log('**********');
    }
    else if (command === 'add') {
        const newItem = prompt('Ok, what new list item would you like to add?');
        todolist.push(newItem);
        console.log(`${newItem} added to the list`);
    }
    else if (command = 'delete') {
        const remove = parseInt(prompt('Ok, what item (by index number) would you like to remove from the list?'));
        if (!Number.isNaN(remove)) {
            const removedItem = todolist.splice(remove, 1);
            console.log(`Ok, ${removedItem[0]} has been removed from the list`);
        } else {
            console.log('Invalid index entry')
        }
    }
    command = prompt('What would you like to do?');
}
console.log('You have quit the app');
window.alert('You have quit the app');