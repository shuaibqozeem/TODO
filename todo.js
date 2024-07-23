<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        #todoList {
            max-width: 400px;
            margin: 0 auto;
        }

        input[type="text"] {
            width: 70%;
            padding: 8px;
            margin: 10px 0;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding: 8px;
        }

        .deleteButton {
            cursor: pointer;
            color: red;
        }
    </style>
</head>
<body>
    <div id="todoList">
        <h2>Todo List</h2>
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <button onclick="addTask()">Add</button>

        <ul id="tasks">
            <!-- Task items will be added dynamically here -->
        </ul>
    </div>

    <script>
        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskText = taskInput.value.trim();

            if (taskText === "") {
                alert("Please enter a task!");
                return;
            }

            const tasksList = document.getElementById("tasks");

            // Create a new task item
            const li = document.createElement("li");
            li.innerHTML = `${taskText} <span class="deleteButton" onclick="deleteTask(this)">Delete</span>`;

            // Add the new task to the list
            tasksList.appendChild(li);

            // Clear the input field
            taskInput.value = "";
        }

        function deleteTask(element) {
            const listItem = element.parentNode;
            const tasksList = document.getElementById("tasks");

            // Remove the task from the list
            tasksList.removeChild(listItem);
        }
    </script>
</body>
</html>
