    document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('formulario');
    const taskInput = document.getElementById('actividad');
    const taskList = document.getElementById('listado');
    const changeBgColorBtn = document.getElementById('cambiar color');
    const originalBgColor = "#A19191"; 
    const newBgColor = "#dda0dd"; 
    let currentColor = originalBgColor;


    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = '';
        } else {
            alert("No puede agregar una actividad con la casilla vacía.");
        }
    });

    changeBgColorBtn.addEventListener('click', () => {
        if (currentColor === originalBgColor) {
            currentColor = newBgColor;
        } else {
            currentColor = originalBgColor;
        }
        document.body.style.backgroundColor = currentColor;
    });
});
