document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    const cuteEmojis = ['🌟', '🌸', '🌈', '💖', '✨', '🍓', '🍦', '🎀', '🦄', '🌼', '🦋', '🍬', '💫']; // More emojis!

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function getRandomEmoji() {
        const randomIndex = Math.floor(Math.random() * cuteEmojis.length);
        return cuteEmojis[randomIndex];
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        const deadlineDate = deadlineInput.value;

        if (taskText === '') {
            alert('Oops! Please enter a task to add it to your cute list. 💖');
            return;
        }

        const li = document.createElement('li');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.innerHTML = `<span class="emoji">${getRandomEmoji()}</span> ${taskText}`; // Add emoji

        taskDetails.appendChild(taskSpan);

        if (deadlineDate) {
            const deadlineSpan = document.createElement('span');
            deadlineSpan.classList.add('deadline-text');
            deadlineSpan.textContent = `Due: ${new Date(deadlineDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`;
            taskDetails.appendChild(deadlineSpan);
        }

        li.appendChild(taskDetails);

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '🗑️'; // Trash can emoji for delete
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        // Clear input fields
        taskInput.value = '';
        deadlineInput.value = '';
    }

    function handleTaskActions(e) {
        // If the delete button was clicked
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('li').remove(); // Remove the entire list item
            alert('Task deleted! ✨');
        } else if (e.target.closest('li')) {
            // If any part of the list item (not the delete button) was clicked
            e.target.closest('li').classList.toggle('completed');
        }
    }
});