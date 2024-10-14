(function () {
  const itemTemplate = document.getElementById('to-do-list__template');
  if (!itemTemplate) return null;
  const listElement = document.getElementById('to-do-list');
  if (!listElement) return null;
  const editForm = document.getElementById('edit-form');
  if (!editForm) return null;

  function makeId() {
    const date = new Date().valueOf();
    return `itemid-${date}`;
  }

  showTasksFromLS();

  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formDate = new FormData(editForm);
    const data = Object.fromEntries(formDate.entries());

    if (data.task) {
      if (editForm.dataset.mode === 'create') {
        const newId = makeId();
        const newTask = {
          id: newId,
          text: data.task,
          isComplete: false,
        };
        addTaskHTML(newTask);
        addTaskLS(newTask);
      } else if (editForm.dataset.mode === 'edit') {
        const taskId = editForm.dataset.editId;
        editTaskHTML(taskId, data.task);
        editTaskFromLS(taskId, data.task);
      }
      editForm.reset();
      editForm.dataset.mode = 'create';
      editForm.dataset.editId = '';
    }
  });

  function editTaskHTML(taskId, taskText) {
    const listItem = listElement.querySelector('#' + taskId);
    listItem.querySelector('.to-do-list__task').innerText = taskText;
  }

  function addTaskHTML(task) {
    const listItem = itemTemplate.content.cloneNode(true);
    const listItemElement = listItem.querySelector('.to-do-list__item');
    listItemElement.setAttribute('id', task.id);
    listItemElement.querySelector('.to-do-list__task').innerText = task.text;
    listElement.append(listItem);
    if (task.isComplete) {
      listItemElement.classList.add('to-do-list__item_complete');
    }
  }

  function addTaskLS(task) {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function showTasksFromLS(task) {
    let tasks = localStorage.getItem('tasks');

    if (tasks) {
      tasks = JSON.parse(tasks); //преобразовали массива переменной в объект
      tasks.forEach((item) => {
        addTaskHTML(item);
      });
    }
  }

  function setCompleteTaskLS(taskId, isComplete) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      if (item.id === taskId) {
        item.isComplete = isComplete;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function removeTaskFromLS(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((item) => item.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function editTaskFromLS(taskId, taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      if (item.id === taskId) {
        item.text = taskText;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function editItem(element) {
    editForm.dataset.mode = 'edit';
    editForm.dataset.editId = element.id;
    editForm.querySelector('[name=task]').value =
      element.querySelector('.to-do-list__task').innerText;
  }

  function deleteItem(element) {
    const elemId = element.id;
    element.remove();
    removeTaskFromLS(elemId);
  }

  function toggleItemCompletion(element) {
    const elemId = element.id;
    let isComplete = true;
    if (element.classList.contains('to-do-list__item_complete')) {
      isComplete = false;
    }
    element.classList.toggle('to-do-list__item_complete');
    setCompleteTaskLS(elemId, isComplete);
  }

  listElement.addEventListener('click', (event) => {
    const item = event.target.closest('.to-do-list__item');
    if (!item) return null;

    switch (event.target.dataset.action) {
      case 'edit':
        editItem(item);
        break;
      case 'delete':
        deleteItem(item);
        break;
      case 'complete':
        toggleItemCompletion(item);
        break;
      default:
        return;
    }
  });
})();

(function () {
  const filterItems = document.querySelectorAll('.to-do-list__filter-item');
  if (!filterItems.length === 0) return null;

  if (document.querySelector('input[name="filter"]')) {
    document.querySelectorAll('input[name="filter"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        const filterAction = event.target.value;
        const dataSource = document.querySelector('.to-do-list__affairs');
            if (!dataSource) return null;
            dataSource.dataset.filter = filterAction;  
      });
    });
  }
})();
