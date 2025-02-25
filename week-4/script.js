let taskList = [
    {
        title: "Belajar HTML dan CSS",
        desc: "Mempelajari dasar-dasar HTML dan CSS untuk membuat website yang menarik.",
        deadline: "1 Januari 1970",
    }
];

const taskElements = document.getElementsByClassName("task-content")[0];

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
})

function renderTasks() {
    taskElements.innerHTML = "";
    taskList.forEach((task, index) => {
        const newElement = `
            <div>
                <h3>${task.title}</h3>
                <p class="description">${task.desc}</p>
                <p class="deadline">${task.deadline}</p>
                <button onclick="deleteNote(${index})">Hapus</button>
            </div>
        `
        taskElements.innerHTML += newElement;
    })
}

function addTask() {
    const taskTitle = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    const deadline = document.getElementById("deadline").value;

    if (taskTitle && desc && deadline
        && taskTitle.length >= 1
        && desc.length >= 1
        && deadline.length >= 1
    ) {
        const newData = {
            title: taskTitle,
            desc,
            deadline,
        }

        taskList.push(newData);
        renderTasks();
    }

}

function deleteNote(index) {
    taskList.splice(index, 1);
    renderTasks();
}


renderTasks();