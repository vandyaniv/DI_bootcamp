const tasks = [];

const task_input = document.getElementById('task_input');
const add_btn = document.getElementById('add_btn');
const listTasks = document.querySelector('.listTasks');

function add_task() {
  const task_check = task_input.value.trim();
  if (task_check === '') {
    alert('please enter a new task');
    return;
  }
  tasks.push(task_check);

  const tasks_div_list = document.createElement('div');
  tasks_div_list.className = 'task';

  const checkBox = document.createElement('input');
  checkBox.type = 'checkBox';

  const label = document.createElement('label');
  label.textContent = task_check;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';

  deleteBtn.onclick = function () {
    listTasks.removeChild(tasks_div_list);
  };

  tasks_div_list.appendChild(checkBox);
  tasks_div_list.appendChild(label);
  tasks_div_list.append(deleteBtn);

  listTasks.appendChild(tasks_div_list);
  task_input.value = '';
}

add_btn,
  addEventListener('click', (Event) => {
    Event.preventDefault();
    add_task();
  });
